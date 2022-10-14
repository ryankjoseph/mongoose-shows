const Show = require('../models/show');

module.exports = {
  new: newShow,
  add: addShow,
  index: allShows,
  delete:deleteShow,
  getID: getID
};

function getID(req,res){
  console.log(req.params.id);
}

async function deleteShow(req,res){
  await Show.findByIdAndRemove(req.params.id);
  res.redirect('/shows')
}

function newShow(req,res){
  res.render('shows/new')
}

function addShow(req,res){  
  req.body.ongoing = !!req.body.ongoing;
  // remove whitespace next to commas
  req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  if(req.body.cast) req.body.cast = req.body.cast.split(',');
  const show = new Show(req.body);
  show.save(function(err){
    if(err) return res.render('shows/new');
    res.redirect('/shows')
  })
}

async function allShows(req,res){
  var showList = await Show.find({});
  res.render('shows/index',{shows:showList})
}
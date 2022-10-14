const Show = require('../models/show');

module.exports = {
  new: newShow,
  add: addShow,
  index: allShows,
  delete:deleteShow,
  updateShowForm,
  updateShow
};

async function updateShowForm(req,res){
  const show = await Show.findById(req.params.id)
  console.log('genre',show.genre);
  const showString = show.genre.includes('Mystery');
  console.log('genre',showString);
  console.log('the id', show.id)
  res.render('shows/update', {show:show});
}

async function updateShow(req,res){


  req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  if(req.body.cast) req.body.cast = req.body.cast.split(',');
  console.log('body')
  console.log(req.body.genre);
  if(!req.body.genre) req.body.genre=[''];
  console.log(req.body.genre);

  const show = await Show.findByIdAndUpdate(req.params.id, {
    title:req.body.title,
    startingYear: req.body.startingYear,
    endingYear: req.body.endingYear,
    mpaaRating: req.body.mpaaRating,
    cast: req.body.cast,
    genre: req.body.genre

  })
  console.log(show)
  res.redirect('/shows');
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
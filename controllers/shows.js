const Show = require('../models/show');

module.exports = {
  new: newShow,
  add: addShow,
  index: allShows,
  delete:deleteShow,
  showOne,
  updateShowForm,
  updateShow
};
async function showOne(req,res){
  const show = await Show.findById(req.params.id)
  res.render('shows/showOne', {show:show});
}
async function updateShowForm(req,res){
  const show = await Show.findById(req.params.id)
  const showString = show.genre.includes('Mystery');
  res.render('shows/update', {show:show});
}

async function updateShow(req,res){


  req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  if(req.body.cast) req.body.cast = req.body.cast.split(',');

  if(!req.body.genre) req.body.genre=[''];
  const show = await Show.findByIdAndUpdate(req.params.id, {
    title:req.body.title,
    description: req.body.description,
    image: req.body.image,
    startingYear: req.body.startingYear,
    endingYear: req.body.endingYear,
    mpaaRating: req.body.mpaaRating,
    cast: req.body.cast,
    genre: req.body.genre,
    ongoing: !!req.body.ongoing

  })
  res.redirect(`/shows/show/${req.params.id}`);
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
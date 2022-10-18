var express = require('express');
var router = express.Router();
const showsCtrl = require('../controllers/shows')

router.get('/', showsCtrl.index)
router.get('/show/:id', showsCtrl.showOne)
router.get('/update/:id', showsCtrl.updateShowForm)
router.post('/update/:id', showsCtrl.updateShow)
router.get('/delete/:id', showsCtrl.delete)

router.get('/new', showsCtrl.new);
router.post('/', showsCtrl.add);

module.exports = router;

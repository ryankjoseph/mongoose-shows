var express = require('express');
var router = express.Router();
const showsCtrl = require('../controllers/shows')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', showsCtrl.index)
router.get('/delete/:id', showsCtrl.delete)

router.get('/new', showsCtrl.new);
router.post('/', showsCtrl.add);

module.exports = router;

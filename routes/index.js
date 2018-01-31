//0826199500217
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Salgado' });
});

router.get('/data', function(req, res, next) {
  res.render('index', { title: 'Data Uri' });
});

router.get('/prueba', function(req, res, next) {
  res.render('index', { title: 'Prueba' });
});

router.get('/prueba1', function(req, res, next) {
  res.render('newview', { "Nombre": "Byron",
                          "Correo":"bsalgado@gmail.com"});
});



module.exports = router;

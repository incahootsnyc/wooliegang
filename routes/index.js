var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	let test = 'hello';
	const anotherTest = {};
	
  res.render('index', { title: 'Express' });
});

router.get('/manyfaces', function(req, res, next) {

	let test = 'hello';
	const anotherTest = {};
	
  res.render('faces', { title: 'Express' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	req.db.collection('post').find().toArray(function(error, doc){
		req.db.collection('categories').find().toArray(function(error, cat){
			res.render('index', {posts:doc, categories:cat});
		})
	})

});
router.get('/admin', function(req, res, next) {

  res.render('admin', { heading: 'Admin', name: 'Devesh' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
	req.db.collection('static').find({ "page_id" : "about"}).toArray(function(error, doc){
		res.render('about', doc[0]);
	})
});
/* GET services page. */
router.get('/services', function(req, res, next) {
	req.db.collection('static').find({ "page_id" : "services"}).toArray(function(error, doc){
		res.render('services', doc[0]);
	})
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
	req.db.collection('static').find({ "page_id" : "contact"}).toArray(function(error, doc){
		res.render('contact', doc[0]);
	})
});
module.exports = router;

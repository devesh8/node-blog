var express = require('express');
var router = express.Router();
var ModelPost = require('../model/post')

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("index");
	req.db.collection('post').find().toArray(function(error, doc){
		req.db.collection('categories').find().toArray(function(error, cat){
			res.render('index', {posts:doc, categories:cat});
		});
	});
});

router.get('/managepost', function(req, res, next) {
	req.db.collection('post').find().toArray(function(error, doc){
		req.db.collection('categories').find().toArray(function(error, cat){
			res.render('managepost', {posts:doc, categories:cat});
		});
	});
});

router.get('/Admin', function(req, res, next) {
	res.render('admin');
});

router.get('/post/:id', ModelPost.fetchPost, ModelPost.fetchComment, ModelPost.renderPost);
router.get('/category/:id', ModelPost.fetchPostbyCategory, ModelPost.renderCategory );

router.get('/addposts', function(req, res, next) {
  res.render('addposts', { heading: 'Admin', name: 'Devesh' });
});
/* GET about page. */
router.get('/page/:page_id', function(req, res, next) {
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

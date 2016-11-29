var express = require('express');
var router = express.Router();
var ModelPost = require('../model/post')

/* GET home page. */
router.get('/post', function(req, res, next) {
	req.db.collection('post').find().toArray(function(error, doc){
		res.json(doc);
	});
});
router.get('/post/:id', function(req, res, next) {
	req.db.collection('post').find({"post_id":req.params.id}).toArray(function(error, doc){
		res.json(doc);
	});
});
router.post('/post', function(req, res, next) {
	var post = req.body;
	req.db.collection('post').insert(post, function(error, doc){	
		res.json(doc);
	});
});
router.post('/post/:id', function(req, res, next) {
	var post = req.body;
	req.db.collection('post').update({"post_id":req.params.id},{$set:post}, function(error, doc){	
		res.json(doc);
	});
});
router.post('/post/:id/delete', function(req, res, next) {
	var post = req.body;
	req.db.collection('post').remove({"post_id":req.params.id}, function(error, doc){	
		res.json(doc);
	});
});
//Categories
router.get('/category', function(req, res, next) {
	req.db.collection('categories').find().toArray(function(error, doc){
		res.json(doc);
	});
});
router.get('/category/:id', function(req, res, next) {
	req.db.collection('categories').find({"cat_id":req.params.id}).toArray(function(error, doc){
		res.json(doc);
	});
});
router.post('/category', function(req, res, next) {
	var post = req.body;
	req.db.collection('categories').insert(post, function(error, doc){	
		res.json(doc);
	});
});
router.post('/category/:id', function(req, res, next) {
	var post = req.body;
	req.db.collection('categories').update({"cat_id":req.params.id},{$set:post}, function(error, doc){	
		res.json(doc);
	});
});
router.post('/category/:id/delete', function(req, res, next) {
	var post = req.body;
	req.db.collection('categories').remove({"cat_id":req.params.id}, function(error, doc){	
		res.json(doc);
	});
});
module.exports = router;

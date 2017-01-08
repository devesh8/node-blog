var postModel = {
	fetchPost : function(req, res, next) {
		var id = req.params.id;		
		req.db.collection('post').find({"post_id" : id}).toArray(function(error, doc){
			req.post = doc[0];
			req.db.collection('categories').find({"category" : req.post.category}).toArray(function(error, cat){			
				req.post.cat = cat[0];
				next();
			});
			//req.post = doc[0];
		});
	},
	fetchComment : function(req,res, next) {
		req.db.collection('categories').find().toArray(function(error, cat){
			req.cats = cat;
			next();
		});
	},
	renderPost : function (req, res, next) {
		res.render('posts', {post: req.post, cats: req.cats});
	},
	fetchPostbyCategory : function (req, res, next) {
		var catid = req.params.id;
		req.db.collection('post').find({"category" : catid}).toArray(function(error, doc){
				req.posts = doc;
				next();
		});
	},
	fetchCategory : function(req, res, next) {
		req.db.collection('categories').find().toArray(function(error, cat){
			req.categories = cat;
			next();
		});
	},
	renderCategory : function(req, res, next) {
		console.log(res.categories);
		res.render('index', {posts:req.posts, categories:req.categories});
	}
};
module.exports = postModel;


var express 	= require("express");
var router 		= express.Router();

/****  Models  ***/
var User 		= require("../models/user").User;
var Post 		= require("../models/post").Post;
var Category 	= require("../models/category").Category;

var Tag 		= require("../models/tag").Tag;

/****  Config  ***/
var JWT    		= require('jsonwebtoken') // Json Web Token for authentication
var config 		= require("../config/config.js");
var verifyToken = require("../middlewares/verify_token.js"); // Middleware for validate token

/****  Api  routes  ***/

router.post("/authenticate", function(req, res){

	//Find user by credentials
	User.findOne(req.body, function(err, user){

		if (err) {
			return res.send(err);
		}

		if(!user){
			return res.send({ success: false, message: 'Autenticación fallida. No se encontró el usuario.' });
		}else if (user){

			//Check if password matches
			if(user.password != req.body.password){
				return res.send({ success: false, message: 'Autenticación fallida. Contraseña incorrecta' });
			}else{
				// if user is found and password right
				// create token
				var token = JWT.sign(user, config.secret, {
		          expiresIn : 60*60*24 // expires in 24 hours
		        });

		        res.locals.user = user;
				// Return the token
				user.password = null; 
				return res.json({
					success: true,
					message: 'Autenticación correcta!',
					token: token,
					user: user
				});
			}
		}
	});
});

router.get("/categories", function(req, res,next){
 	
 	Category.find({},function(err, categories){
		if(!err){
			 return res.status(200).send({categories:categories	});
		}else{
           return  res.send({err:err});
		}

	});
   // return next();
});

router.get("/posts",function(req, res,next){
	
	Post.find({})
		.populate('author') // Get author object models/user.js
		.populate('category')// get category object - models/category.js
		.exec(function(err, posts){

			if(!err){
				return res.status(200).send({posts:posts});
			}else{
				return  res.send({err:err});
			}
		});
   // return next();
});

router.use(verifyToken); // Setting the middleware

router.route("/users")
	.post(function(req , res){
		
		var user = new User(req.body);
		
		//Save user signed
		user.save().then(function(user){
			return res.send({ success: true });
		}, function(err){
			return res.send(err);
		});
	});

router.post("/categories", function(req, res){
		
		var cat = new Category(req.body);
		
		//Save category created
		cat.save().then(function(user){
			return res.send({ success: true });
		}, function(err){
			return res.send(err);
		});
	});

router.post("/posts", function(req , res){
	var post = new Post(req.body);

	//Create Date object from model models/post.js
	post.date = new Date();

	//Get user logged
	post.author = res.locals.user._id;

	post.save().then(function(post){
		return res.send({ success: true });
	}, function(err){
		return res.send(err);
	});

});

module.exports = router;
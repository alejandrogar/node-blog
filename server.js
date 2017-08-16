var express 		= require("express");
var mongoose 		= require("mongoose");
var formidable 		= require("express-formidable"); // For use req params
var router 			= require("./config/routes.js");
var config 			= require("./config/config.js");
var methodOverride 	= require("method-override");
var bodyParser = require('body-parser');
var app 			= express();

app.use(express.static('public'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.json());

/*
app.use(formidable({
	encoding: 'utf-8',
	multiples: true,
	keepExtensions:true,
	uploadDir:"./public/images/" //setting our dir for uploaded files
}));*/

app.use('/api', router);

app.listen(8080);
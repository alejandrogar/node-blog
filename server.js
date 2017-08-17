var express 		= require("express");
var mongoose 		= require("mongoose");
var fileUpload      = require('express-fileupload');
var router 			= require("./config/routes.js");
var config 			= require("./config/config.js");
var methodOverride 	= require("method-override");
var bodyParser 		= require('body-parser');
var bytes 			= require('bytes');
var app 			= express();

app.use(express.static('public'));
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(bodyParser.json({limit: '50mb'}) );
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit:50000
}));

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use('/api', router);

app.get('/*', function(req, res) {
  return res.sendfile('./public/index.html');
})



app.listen(8080);
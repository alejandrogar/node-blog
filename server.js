var express 		= require("express"),
	mongoose 		= require("mongoose"),
	fileUpload      = require('express-fileupload'),
	router 			= require("./config/routes.js"),
	config 			= require("./config/config.js"),
	formidable      = require('express-formidable'),
	bodyParser 		= require('body-parser'),
	bytes 			= require('bytes'),
	app 			= express();


app.use(bodyParser.json({limit: '50MB'}));
app.use(bodyParser.urlencoded({
  limit: '50MB',
  extended: true,
  parameterLimit:50000
}));
app.use(express.static('public'));

app.use('/api', router);

app.get('/*', function(req, res) {
  return res.sendfile('./public/index.html');
})



app.listen(8080);
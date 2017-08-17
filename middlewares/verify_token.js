var JWT    	= require('jsonwebtoken');
var config 		= require("../config/config.js");

module.exports = function(req, res, next){
	
	var token 	= req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['Authorization'];

	//Decode token
	if(token){

		// verifies secret and checls exp
		JWT.verify(token, config.secret, function(err, decoded){ 
			if (err) {
				return res.json({ success: false, message: 'Falló la autenticación del token' });    
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;
				res.locals.user = decoded._doc;
				next();
			}
		});

	}else{

		// if there is no token
		// return an error
		return res.status(400).send({
			success: false, 
			message: 'Token no envíado' 
		});
	}
}
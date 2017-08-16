var mongoose = require("mongoose");
var errorMessages = require("../config/error_messages.js");

var Schema = mongoose.Schema;

// Create connection mongodb
var promise = mongoose.connect("mongodb://localhost/node_blog", {
  useMongoClient: true,
});

var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

var user_schema = new Schema({
	name:{
		type: String,
		required:[true, errorMessages.nameReq]
	},
	user:{
		type: String, 
		required:[true, errorMessages.userReq], 
		unique: true
	},
	email:{
		type: String, 
		required:[true, errorMessages.emailReq],
		unique: [true, errorMessages.emailExists],
		validate: {
			validator: function(email) {
				return emailRegex.test(email);
			},
			message: errorMessages.emailBad
		}
	},
	password:{
		type: String,
		required:[true, errorMessages.passwordReq]
	},
	image:String
});

var User = mongoose.model("User", user_schema);

module.exports.User = User;
var mongoose = require("mongoose");
var errorMessages = require("../config/error_messages.js");
var Schema = mongoose.Schema;

// Create connection mongodb
var promise = mongoose.connect("mongodb://localhost/node_blog", {
  useMongoClient: true,
});

var post_schema = new Schema({
	title: {
		type:String,
		required: [true, errorMessages.fieldReq]
	},
	description: {
		type:String,
		required: [true, errorMessages.fieldReq]
	},
	image: {
		type:String,
		required: [true, errorMessages.fieldReq]
	},	
	date:{
		type:Date,
		required: [true, errorMessages.fieldReq]
	},
	content:{
		type:String,
		required: [true, errorMessages.fieldReq]
	},
	author:{
		type: Schema.Types.ObjectId, ref: "User",
	},
	category:{
		type: Schema.Types.ObjectId, ref: "Category",
		required: [true, errorMessages.fieldReq]
	},	
});


var Post = mongoose.model("Post", post_schema);

module.exports.Post = Post;


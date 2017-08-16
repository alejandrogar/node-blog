var mongoose = require("mongoose");
var errorMessages = require("../config/error_messages.js");

var Schema = mongoose.Schema;

// Create connection mongodb
var promise = mongoose.connect("mongodb://localhost/node_blog", {
  useMongoClient: true,
});

var tag_schema = new Schema({
	name: {
		type:String,
		required: [true, errorMessages.fieldReq]
	},
});


var Tag = mongoose.model("Tag", tag_schema);

module.exports.Tag = Tag;


module.exports = {

	/**** Custom mongoose error messages ****/

	// User model error messages 
	"emailExists": "Email {VALUE} is already registered",
	"emailReq ": "Email is required",
	"emailBad": "{VALUE} is not a valid email",
	"userExists": "Username {VALUE} is already registered",
	"userReq": "Username is required",
	"passwordReq": "Password id required",
	"passwordEquals": "",
	"nameReq": "Name is required",

	//Post model error messages
	"titleReq": "Title is required",
	"dateReq": "Date is required",
	"contentReq": "Content is required",


	// Generic error message for all fields
	"fieldReq": "The field {PATH} is required"
};
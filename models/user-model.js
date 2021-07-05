const { Schema, model } = require('mongoose');

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
	username: {
		type: String,
		required: [true, "Name is required"],
	  },
	password: {
		type: String,
		required: [true, "Password is required"]
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: true,
		match: [ /^\S+@\S+\.\S+$/ , "Please input a valid email"],
		lowercase: true
	},
});

const User = model('User', userSchema);

module.exports = User;
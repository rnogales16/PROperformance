const { Schema, model, Mongoose } = require('mongoose');

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
	name: {
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
	role: {type: String, enum: ['Professional', 'Athlete'], default: 'Athlete'},

	sport: {type: String, enum: ['Crossfit', 'Swimming', 'Running']},

	registrationNumber: {
		type: Number,
		min: 0
	},
	imageUrl: {
		type: String,
		default: 'https://www.google.com/search?q=defaul+profile+picturesxsrf=ALeKk004htaevlPfixR2HAvxyV95Lt4fCg:162540255888&source=lnms&tbm=isch&sa=Xved=2ahUKEwiBoo6xuMnxAhWHlxQKHZy8B7QQ_AUoAXoECAEQAwbiw=1536&bih=722&dpr=1.25#imgrc=eHQKa74ZnnpTfM'
	},
	likedPlans: [{type: Schema.Types.ObjectId, ref: 'Plans'}]
});

const User = model('User', userSchema);

module.exports = User;

const { Schema, model } = require('mongoose');

const planSchema = new Schema({
	title: { type: String },
	description: { type: String, required: true, maxlength: 280 },
	imageUrl: {
		type: String,
		default:
			'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cyclingweekly.com%2Ffitness%2Ftraining%2Fcycling-training-plan-beginner-153317&psig=AOvVaw2E4xDFzFZ0B6dNYYcQdhx4&ust=1625489458467000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJCT8aS6yfECFQAAAAAdAAAAABAD'
	},
	owner: { type: Schema.Types.ObjectId, ref: 'User' },
	reviews: [{type: Schema.Types.ObjectId, ref: 'Review', default: []}]
});

const Plan = model('Plan', planSchema);

module.exports = Plan;



/*
Cloudinary.config({
	cloud_name:
	api_key
	api_secret:
})

const storage = new cloudinaryStorage({
	Cloudinary,
	params: {
		allawed_format: ['svg', 'png', 'jpg'],
		folder: 'cloudinary-test'
	}
})
*/
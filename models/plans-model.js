
const { Schema, model } = require('mongoose');

const resourceSchema = new Schema({
	name: { type: String },
	description: { type: String },
	imageUrl: {
		type: String,
		default:
			'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cyclingweekly.com%2Ffitness%2Ftraining%2Fcycling-training-plan-beginner-153317&psig=AOvVaw2E4xDFzFZ0B6dNYYcQdhx4&ust=1625489458467000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJCT8aS6yfECFQAAAAAdAAAAABAD'
	},
	owner: { type: Schema.Types.ObjectId, ref: 'Professional' },
	reviews: [{type: Schema.Types.ObjectId, ref: 'Review', default: []}]
});

const Resource = model('Resource', resourceSchema);

module.exports = Resource;
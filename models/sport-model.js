
const { Schema, model } = require('mongoose');


const sportSchema = new Schema({
	name: String,
    description: String,
    imageUrl: {
      type: String,
      default: 'https//www.google.com/url?sa=i&url=https%3A%2F%2Fec.europaeu%2Feurostat%2Fweb%2Fsport&psig=AOvVaw0hqCFMk4E4mjl3BMusoBJd&ust=1625499181191000source=images&cd=vfe&ved=0CAoQjRxqFwoTCPjcybveyfECFQAAAAAdAAAAABAO'
    }
});

const Sport = model('Sport', sportSchema);

module.exports = Sport;
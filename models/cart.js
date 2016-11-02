var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Item = require('./item');

var CartSchema = new Schema({
  items: [Item.schema]
});


var Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;

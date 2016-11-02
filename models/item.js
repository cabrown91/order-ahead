var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Cart = require('./cart');

var ItemSchema = new Schema({
  itemName: String,
  itemPrice: Number,
  itemImage: String,
  itemDescription: String
});


var Item = mongoose.model('Item', ItemSchema);

module.exports = Item;

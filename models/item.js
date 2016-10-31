var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  itemName: String,
  itemPrice: Number,
  itemimage: String,
  itemDescription: String
});


var Item = mongoose.model('Item', ItemSchema);

module.exports = Item;

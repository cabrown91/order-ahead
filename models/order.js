var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Cart = require('./cart');

var OrderSchema = new Schema({
  orderItems: Cart.schema,
  orderTotal: Number,
  pickUpTime: String
});


var Order = mongoose.model('Order', OrderSchema);

module.exports = Order;

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  orderItems: [ Object ],
  orderTotal: Number,
  pickUpTime: String
});


var Order = mongoose.model('Order', OrderSchema);

module.exports = Order;

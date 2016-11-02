var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/order-ahead");

var Cart = require('./cart');
var Item = require('./item');
var Order = require('./order');


module.exports.Cart = Cart;
module.exports.Item = Item;
module.exports.Order = Order;

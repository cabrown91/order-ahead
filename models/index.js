var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/order-ahead");

var Employee = require('./employee');
var Item = require('./item');
var Order = require('./order');


module.exports.Employee = Employee;
module.exports.Item = Item;
module.exports.Order = Order;

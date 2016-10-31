var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Item = require('./item');

var EmployeeSchema = new Schema({
  cart: [Item.schema]
});


var Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;

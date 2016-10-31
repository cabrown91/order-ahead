var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  cart: [Item.schema]
});


var Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Employee
let Employee = new Schema({
  person_name: {
    type: String
  },
  role: {
    type: String
  },
  employee_number: {
    type: Number
  }
},{
    collection: 'employees'
});

module.exports = mongoose.model('Employees', Employee);
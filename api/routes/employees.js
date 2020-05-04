const express = require('express');
const router = express.Router();
let Employee = require('../models/Employee');

// Defined store route
router.post('/add',async  (req, res)=> {
  let employee = new Employee({
    person_name: req.body.person_name,
    role: req.body.role,
    employee_number: req.body.employee_number
  });
  try{
    const savedEmployee = await employee.save();
    res.send(savedEmployee)
  }
    catch(err){
      res.status(400).send("unable to save to database");
    };
});

// Defined get data(index or listing) route
router.get('/', (req, res)=> {
    Employee.find((err, employees)=>{
    if(err){
      console.log(err);
    }
    else {
      res.json(employees);
    }
  });
});

// Defined edit route
router.get('/edit/:id',(req, res)=> {
  let id = req.params.id;
  Employee.findById(id, (err, employee)=>{
      res.json(employee);
  });
});

//  Defined update route
router.post('/update/:id', (req, res)=> {
    Employee.findById(req.params.id, (err, employee)=> {
    if (!employee)
      res.status(404).send("data is not found");
    else {
        employee.person_name = req.body.person_name;
        employee.role = req.body.role;
        employee.employee_number = req.body.employee_number;

        employee.save().then(employee => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
router.get('/delete/:id', (req, res)=> {
    Employee.findByIdAndRemove({_id: req.params.id}, (err, business)=>{
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = router;

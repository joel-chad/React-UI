import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Create extends Component {

    state = {
      person_name: '',
      role: '',
      employee_number:''
    }
  
  onChange=(e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit= (e) => {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      role: this.state.role,
      employee_number: this.state.employee_number
    };
    console.log(obj)
    axios.post('http://localhost:4000/employee/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      person_name: '',
      role: '',
      employee_number: ''
    })
  }
 
  render() {
    return (

      <div>
        <div className="bg-gray-800 p-3 w-full text-xl text-center">
        <nav className="flex justify-between">
          <Link to='/home' className="">Human Resources Dept.</Link>
          <div className="flex flex-row" >
            <ul className='float-right flex'>
              <li className="px-3">
                <Link to='/home' className="">Home</Link>
              </li>
              <li className="px-3">
                <Link to='/create' className="">Create</Link>
              </li>
              <li className="pl-3 pr-24">
                <Link to='/index' className="">Index</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
          <div className='container' style={{ marginTop: 10 }}>
              <h3 align="center">Add New Employee</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Employee Name:  </label>
                      <input 
                        type="text" 
                        name='person_name'
                        className="form-control" 
                        value={this.state.person_name}
                        onChange={this.onChange}
                        />
                  </div>
                  <div className="form-group">
                      <label>Role: </label>
                      <input type="text"
                      name='role' 
                        className="form-control"
                        value={this.state.role}
                        onChange={this.onChange}
                        />
                  </div>
                  <div className="form-group">
                      <label>Employee Number: </label>
                      <input type="text" 
                        name='employee_number'
                        className="form-control"
                        value={this.state.employee_number}
                        onChange={this.onChange}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" 
                        value="Register Employee" 
                        className="btn btn-primary"/>
                  </div>
              </form>
          </div>
        </div>
    )
  }
}
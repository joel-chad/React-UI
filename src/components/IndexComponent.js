import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TableRow from "./TableRow";

export default class Index extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/employee")
      .then((response) => {
        this.setState({ employees: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { employees } = this.state;
    const tabRow = employees.length ? (
      this.state.employees.map(function(object, i) {
        return <TableRow obj={object} key={i} />;
      })
    ) : (
      <tr>
        <td>Loading...</td>
      </tr>
    );
    return (
      <div>
      
        <div className="bg-gray-800 p-3 w-full text-xl text-center">
          <nav className="flex justify-between">
            <Link to="/home" className="">Human Resources Dept.</Link>
            <div className="flex flex-row">
              <ul className="float-right flex">
                <li className="px-3">
                  <Link to="/home" className="">Home</Link>
                </li>
                <li className="px-3">
                  <Link to="/create" className="">Create</Link>
                </li>
                <li className="pl-3 pr-24">
                  <Link to="/index" className="">Index</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className='container'>
        <h3 align="center">Employees List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Employee Number</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{tabRow}</tbody>
        </table>
      </div>
      </div>
    );
  }
}

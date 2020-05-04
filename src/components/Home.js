import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    state = {  }
    render() { 
        return ( 

            <div className='text-xl text-center'>
            <div className="bg-gray-800 p-3 w-full">
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
            <div className='w-100 m-auto'>
                <h3 className='container text-xl-center pt-10'>Welcome to the Human Resources Department</h3>
                <span>Click here to 
                    <Link className='text-blue-600 hover:text-red-600' to='/index'> see the employees</Link>
                    </span>
                    </div>
            </div>
         );
    }
}
 
export default Home;
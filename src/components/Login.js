import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = { 
        username: '',
        password: ''
     }

     onChange =(e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    onSubmit=()=>{

    }  

    render() { 
        return ( 
            <div className='container mt-5'>
                <form className='w-auto' onSubmit={this.onSubmit}>
                    <h1 align='center'>Login</h1>
                    <div className="form-group">
                        <label>Username:  </label>
                        <input 
                        type="text"
                        name='username' 
                        className="form-control" 
                        value={this.state.username}
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" 
                        className="form-control"
                        name='password'
                        value={this.state.password}
                        onChange={this.onChange}
                        />
                    </div>
                    <div className='text-center pt-5'>
                    <Link className='bg-gray-900 px-10 py-2 rounded-sm' to='/home'>Login</Link>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default Login;
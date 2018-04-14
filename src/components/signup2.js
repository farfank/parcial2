

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../pages/routes';
import './App.css';
import './sb-admin.css';

class signup extends Component {
  render() {
    return (
        <div class="container">
        <div class="card card-register mx-auto mt-5">
        <div class="card-header">Register an Account</div>
        <div class="card-body">
        <form>

		  <div class="form-group">
            <label for="exampleInputUserName">Username</label>
            <input requiered class="form-control" id="exampleInputUserName" type="text" aria-describedby="usernameHelp" placeholder="Enter username"/>
          </div>
		  
		  <div class="form-group">
            <label for="exampleInputEmail">Email address</label>
            <input class="form-control" id="exampleInputEmai1" type="email" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
		  
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="exampleInputPassword1">Password</label>
                <input class="form-control" id="exampleInputPassword1" type="password" placeholder="Password"/>
              </div>
              <div class="col-md-6">
                <label for="exampleConfirmPassword">Confirm password</label>
                <input class="form-control" id="exampleConfirmPassword" type="password" placeholder="Confirm password"/>
              </div>
            </div>
          </div>
          
          <a class="btn btn-primary btn-block" href="login.html">Register</a>
        </form>
        
        <div class="text-center">
          <a class="d-block small mt-3" href="login.html">Login Page</a>
          <a class="d-block small" href="forgot-password.html">Forgot Password?</a>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default signup;

  
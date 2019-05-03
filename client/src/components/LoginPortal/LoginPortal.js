import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './LoginPortal.css';

class LoginPortal extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/api/user/login', { username, password })
      .then((result) => {
        console.log("on submit" , result);
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({ message: '' });
        this.props.history.push('/home')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }

  render() {
    const { username, password, message } = this.state;
    return (
      <div class="container">
        <div style={{ marginTop: "4rem" }} className="row">
          {message !== '' &&
            <div class="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
          }

      <div className="col s12" style={{ paddingLeft: "11.250px" }}>
        <h4>
          <b>Login</b> below
        </h4>
        <p className="grey-text text-darken-1">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
      
      <form>
          {/* email input */}
          <div className="input-field col s12">
            <input 
              type="text" 
              class="validate" 
              // placeholder="Email address" 
              name="username" 
              value={username} 
              onChange={this.onChange} 
              required
              />
            <label for="inputEmail">Email</label>
          </div>

          {/* password input */}
          <div className="input-field col s12">
            <input 
              type="text" 
              class="validate" 
              // placeholder="Password" 
              name="password" 
              value={password} 
              onChange={this.onChange} 
              required
            />
            <label for="inputPassword">Password</label>
          </div>

          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              type="submit"
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Login
            </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPortal;
 
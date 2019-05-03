import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import '../LoginPortal/LoginPortal.css';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
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

    axios.post('/api/user/register', { username, password })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Register</b> below
            </h4>
            <p className="grey-text text-darken-1">
              Already have an account? <Link to="/">Log in</Link>
            </p>
          </div>
          <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={username}
                  id="username"
                  type="text"
                />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={password}
                  id="password"
                  type="passwprd"
                />
              <label htmlFor="password">Password</label>
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
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>

    );
  }
}

export default Create;

        {/* <form className="form-signin" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">Register</h2>
          <label for="inputEmail" className="sr-only">Email Address</label>
          <input type="email" className="form-control" placeholder="Email Address" name="username" value={username} onChange={this.onChange} required/>
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form> */}
      
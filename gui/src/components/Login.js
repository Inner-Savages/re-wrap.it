import React, { Component } from 'react';
import './../styles/signin.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    fetch("https://re-wrap.it/api/subject/" + this.state.email)
      .then(data => data.json())
      .then((data) => this.props.parent.setState(
        {
          current: "logged",
          login: this.state.email,
          userdata: data.data
        }))
      .catch(error => console.log('error', error));
    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name

    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="text-center">
          <form className="form-signin"  onSubmit={this.handleSubmit}>
           <img className="center" src="./1.png" alt="centered image" width="300" height="300"/>
           <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
           <label htmlFor="inputEmail" className="sr-only">Email address</label>
           <input className="form-control" type="email" name={'email'} placeholder="Your Email" autoFocus=""  required onChange={this.handleChange}/>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-success btn-block" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">Inner Savages &copy; 2020</p>

        </form>
      </div>
    )
  }
}

export {Login}
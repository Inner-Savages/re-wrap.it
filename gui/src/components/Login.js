import React, { Component } from 'react';

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
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
      <div className="box">
        <figure className="avatar">
          <img src="https://placehold.it/128x128"/>
        </figure>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
              <input className="input is-medium" type="email" name={'email'} placeholder="Your Email" autoFocus="" onChange={this.handleChange}/>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input className="input is-medium" type="password" placeholder="Your Password"/>
            </div>
          </div>
          <div className="field">
            <label className="checkbox">
              <input type="checkbox"/>
                Remember me
            </label>
          </div>
          <button className="button is-block is-success is-large is-fullwidth">Login <i className="fa fa-sign-in" aria-hidden="true" /></button>
        </form>
      </div>
          </div>
        </div>
      </div>
    )
  }
}

export {Login}
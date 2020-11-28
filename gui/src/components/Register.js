import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      contact: '',
      address: '',
      latitude: '',
      longitude: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    let formdata = new FormData();
    formdata.append("name", this.state.name);
    formdata.append("address_text", this.state.address);
    formdata.append("address_latitude", this.state.latitude);
    formdata.append("address_longitude", this.state.longitude);
    formdata.append("contact_info", this.state.contact);
    formdata.append("email", this.state.email);

    let requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://re-wrap.it/api/subject/", requestOptions)
      .then(data => data.json())
      .then((data) => this.props.parent.setState(
        {
          current: "logged",
          login: this.state.email,
          userdata: data.data
        }))
      .catch(error => console.log('error', error));
    formdata = new FormData();
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          Name: <input type="text" value={this.state.name} onChange={this.handleChange} name={'name'} className="input is-medium"/>
          Contact: <input type="text" value={this.state.contact} onChange={this.handleChange} name={'contact'} className="input is-medium"/>
          Email: <input type="text" value={this.state.email} onChange={this.handleChange} name={'email'} className="input is-medium"/>
          Address: <input type="text" value={this.state.address} onChange={this.handleChange} name={'address'} className="input is-medium"/>
          Latitude: <input type="text" value={this.state.latitude} onChange={this.handleChange} name={'latitude'} className="input is-medium"/>
          Longitude: <input type="text" value={this.state.longitude} onChange={this.handleChange} name={'longitude'} className="input is-medium"/>
        <input type="submit" value="Register" />
      </form>
    );
  }
}

export {Register}
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
        <main role="main" className="container">
        <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-3 col-form-label">Name and surname/company name</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" id="name" placeholder="Name and surname/company name"
                           value={this.state.name} onChange={this.handleChange} name={'name'}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" id="email" placeholder="Email" value={this.state.email}
                           onChange={this.handleChange} name={'email'}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="address" className="col-sm-3 col-form-label">Address</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" id="address" placeholder="Address"
                           value={this.state.address} onChange={this.handleChange} name={'address'} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="contact" className="col-sm-3 col-form-label">Contact information</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" id="address" placeholder="Contact"
                           value={this.state.contact} onChange={this.handleChange} name={'contact'} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="latitude" className="col-sm-3 col-form-label">Latitude</label>
                <div className="col-sm-9">
                    <input type="number" className="form-control" id="latitude" placeholder="Latitude"
                           value={this.state.latitude} onChange={this.handleChange} name={'latitude'}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="longitude" className="col-sm-3 col-form-label">Longitude</label>
                <div className="col-sm-9">
                    <input type="number" className="form-control" id="longitude" placeholder="Longitude"
                           value={this.state.longitude} onChange={this.handleChange} name={'longitude'}/>
                </div>
            </div>
            <input type="submit" className="btn btn-success" value="Submit"/>
        </form>
        </main>
    );
  }
}

export {Register}
import React, { Component } from 'react';

class AddWanted extends Component {
  render() {
    return (
        <div className="container">
          <div className="py-5 text-center">
            <img className="d-block mx-auto mb-4" src="./images/2b.png" alt="" width="200" height="200"/>
            <h2>Product form</h2>
            <p className="lead">Here you can add few photos, and describe your product.</p>
          </div>
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Example photos of item that you search</span>
                <span className="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">First image</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">ADD</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Second image</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">ADD</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Third image</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">ADD</span>
                </li>
              </ul>
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3"></h4>
              <form className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="productName">Name of the advertisement</label>
                    <input type="text" className="form-control" id="productName" placeholder="" value="" required/>
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="Category">Category</label>
                    <select className="custom-select d-block w-100" id="Category" required>
                      <option value="">Plastic bags</option>
                      <option>Cartons</option>
                      <option>Jars</option>
                      <option>Bubble wrap</option>
                      <option>Others</option>

                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="username">Username</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input type="text" className="form-control" id="username" placeholder="Username" required/>
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address">Adress <span className="text-muted">(Optional)</span></label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St"/>
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address2">Phone number </label>
                  <input type="text" className="form-control" id="address2" placeholder="+48 123 456 789"/>
                </div>

                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="City">City</label>
                    <input type="text" className="form-control" id="City" placeholder="" required/>
                    <div className="invalid-feedback">
                      Please select a valid City.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">State</label>
                    <select className="custom-select d-block w-100" id="state" required>
                      <option value="">Choose...</option>
                      <option>dolnośląskie</option>
                      <option>kujawsko-pomorskie</option>
                      <option>lubelskie</option>
                      <option>lubuskie</option>
                      <option>łódzkie</option>
                      <option>małopolskie</option>
                      <option>mazowieckie</option>
                      <option>opolskie</option>
                      <option>podkarpackie</option>
                      <option>podlaskie</option>
                      <option>pomorskie</option>
                      <option>śląskie</option>
                      <option>świętokrzyskie</option>
                      <option>warmińsko mazurskie</option>
                      <option>wielkopolskie</option>
                      <option>zachodniopomorskie</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">Zip</label>
                    <input type="text" className="form-control" id="zip" placeholder="" required/>
                    <div className="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
                <h4 className="mb-3">Item condition</h4>
                <div className="d-block my-3">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="new-info"/>
                    <label className="custom-control-label" htmlFor="new-info">New</label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="used-info"/>
                    <label className="custom-control-label" htmlFor="used-info">Used</label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="incomplete-info"/>
                    <label className="custom-control-label" htmlFor="incomplete-info">Incomplete</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-name">Quantity</label>
                    <input type="text" className="form-control" id="cc-name" placeholder="" required/>
                    <div className="invalid-feedback">
                      Quantity is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-number">Dimensions</label>
                    <input type="text" className="form-control" id="cc-number" placeholder=""/>
                    <div className="invalid-feedback">
                      Dimensions are not required.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <label htmlFor="cc-expiration">Payment</label>
                    <input type="text" className="form-control" id="cc-expiration" placeholder=""/>
                    <div className="invalid-feedback">
                      Bonus date required
                    </div>
                  </div>
                </div>
                <div className="=row">
                  <div className="col-md-130 mb-230">
                    <label htmlFor="cc-desc">Description</label>
                    <input type="text" className="form-control" id="cc-desc" placeholder=""/>
                  </div>
                </div>
                <hr className="mb-8"/>
                <button className="btn btn-primary btn-lg btn-info" type="submit">Add advertisement</button>
              </form>
            </div>
          </div>
        </div>
    )
  }
}

export {AddWanted}
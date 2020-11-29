import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
        <div className="col">
          <div className="card">
            <img src="./images/box-placeholder.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h3 class="card-title">{this.props.item.item_name}</h3>
              <p className="card-text"></p>
              <div className="text-center">
                <button type="button" className="btn btn-success btn-sm">Book</button>
                <button type="button" className="btn btn-primary btn-sm">More info</button>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Item
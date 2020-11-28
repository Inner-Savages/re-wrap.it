import React, { Component } from 'react';

class Items extends Component {
  render() {
    return (
      <div>
        {this.props.items.map((item, index) => (
          <div key={index}>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.contact_info}</li>
          </div>
        ))}
      </div>
    )
  }
}


export {Items};

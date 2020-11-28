import React, { Component } from 'react';

class Users extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user, index) => (
          <div key={index}>
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>{user.contact_info}</li>
          </div>
        ))}
      </div>
    )
  }
}


export {Users};

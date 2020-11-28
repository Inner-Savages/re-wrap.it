import React, { Component } from 'react';

class Logout extends Component {
  render() {
    if (this.props.parent.state.login !== '') {
      this.props.parent.setState({
        login: '',
        userdata: ''
      })
    }

    return (
      <div>
        Successfully logged out!
      </div>
    )
  }
}

export {Logout}
import React, { Component } from 'react';

class Logged extends Component {
  render() {
    return (
      <div>
        Successfully logged in as {this.props.parent.state.login}!
      </div>
    )
  }
}

export {Logged}
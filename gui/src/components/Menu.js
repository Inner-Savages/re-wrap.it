import React, { Component } from 'react';

class Menu extends Component {
  setUrl(path) {
    this.props.parent.setState({current: path})
    console.log(this.props.parent.state)
  }

  render() {
    return (
      <nav className="navbar has-background-grey-lighter mx-3" role="navigation" aria-label="main navigation">
        <div className="navbar-start">
          <div className="navbar-item" onClick={() => this.setUrl('wanted')}><a className="has-text-link-grey-dark" href="#wanted">Szukam śmieci</a></div>
          <div className="navbar-item" onClick={() => this.setUrl('giveaway')}><a className="has-text-link-grey-dark" href="#giveaway">Chcę pozbyć się śmieci</a></div>
          {this.props.parent.state.login ? (
              <div className="navbar-item" onClick={() => this.setUrl('logout')}><a className="has-text-link-grey-dark" href="#logout">Wyloguj [{this.props.parent.state.login}]</a></div>
            ) : (
              <>
                <div className="navbar-item" onClick={() => this.setUrl('login')}><a className="has-text-link-grey-dark" href="#login">Logowanie</a></div>
                <div className="navbar-item" onClick={() => this.setUrl('register')}><a className="has-text-link-grey-dark" href="#register">Rejestracja</a></div>
              </>
            )
          }
        </div>
        <div className="navbar-end"></div>
      </nav>
    )

  }
}

export {Menu}
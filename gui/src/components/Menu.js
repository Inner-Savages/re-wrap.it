import React, { Component } from 'react';

class Menu extends Component {
  setUrl(path) {
    this.props.parent.setState({current: path})
    console.log(this.props.parent.state)
  }

  render() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-success fixed-top">
          <a className="navbar-brand" href="#">Re-Wrap.it</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                  aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav mr-auto">
                  <li className={"nav-item " + (this.props.parent.state.current === "home" ? ("active"):(""))}>
                      <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className={"nav-item " + (this.props.parent.state.current === "idea" ? ("active"):(""))}>
                      <a className="nav-link" href="#">Idea</a>
                  </li>
                  <li className={"nav-item " + (this.props.parent.state.current === "giveaway" ? ("active"):(""))}>
                      <a className="nav-link" href="#" onClick={() => this.setUrl('giveaway')}>Give</a>
                  </li>
                  <li className={"nav-item " + (this.props.parent.state.current === "wanted" ? ("active"):(""))}>
                      <a className="nav-link" href="#" onClick={() => this.setUrl('wanted')}>Get</a>
                  </li>
              </ul>
              {this.props.parent.state.login ? (
                  <button type="button" className="btn btn-info"
                          onClick={() => this.setUrl('logout')}>Logout {this.props.parent.state.login}</button>
              ) : (
                  <>
                      <button type="button" className="btn btn-info"
                              onClick={() => this.setUrl('login')}>Log in
                      </button>
                      <button type="button" className="btn btn-info"
                              onClick={() => this.setUrl('register')}>Register
                      </button>
                  </>
              )
              }
          </div>
      </nav>
    )

  }
}

export {Menu}
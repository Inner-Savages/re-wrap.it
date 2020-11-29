import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className={'container mb-4'}>
        <div className="level"><span className="level-left is-family-sans-serif is-size-1 has-text-weight-bold is-uppercase title">re-wrap.it</span>
          <h2 className="level-right is-size-2 subtitle">Naszą misją jest drugie życie śmieci</h2></div>
      </header>
    )
  }
}

export {Header}
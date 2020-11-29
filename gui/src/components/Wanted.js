import React, { Component } from 'react';
import Item from './Item'


class Wanted extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: []
    }
  }

  setUrl(path) {
    this.props.parent.setState({current: path})
    console.log(this.props.parent.state)
  }

  componentDidMount() {
    this.getItems()
  }

  getItems = () => {
    fetch("https://re-wrap.it/api/wanted/").then(data => data.json()).then((data) => {
      this.setState({
        items: data.data
      })
    })
  }

  render() {
    return (
        <div className="container">
          <a href="#" onClick={() => this.setUrl('add_wanted')}>
            <img className="center" src="./images/2b.png" alt="centered image" width="300" height="300"/>
          </a>
          <div className="row align-items-start">
            {
              this.state.items.map((item, index) => (
                  <Item item={item} idx={index}/>
              ))
            }
          </div>
        </div>
    )
  }
}

export {Wanted}
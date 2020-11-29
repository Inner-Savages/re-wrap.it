import React, { Component } from 'react';
import Item from "./Item";

class Giveaway extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.getItems()
  }

  getItems = () => {
    fetch("https://re-wrap.it/api/giveaway/").then(data => data.json()).then((data) => {
      this.setState({
        items: data.data
      })
    })
  }

  render() {
    return (
        <div className="container">
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

export {Giveaway}
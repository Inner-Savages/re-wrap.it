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
      <div>
        {
          this.state.items.map((item, index) => (
            <Item item={item} idx={index}/>
          ))
        }
      </div>
    )
  }
}

export {Giveaway}
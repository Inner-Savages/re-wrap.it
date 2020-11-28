import React, { Component } from 'react';
import Item from './Item'


class Wanted extends Component {
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
    fetch("https://re-wrap.it/api/wanted/").then(data => data.json()).then((data) => {
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

export {Wanted}
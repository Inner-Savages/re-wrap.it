import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <article className={"tile is-ancestor mx-4 my-5 is-block"} key={this.props.idx}>
        <div className={'tile notification has-text-centered is-block has-background-grey-light'}>
          <div>Owner: {this.props.item.owner}</div>
          <div>Item Name: {this.props.item.item_name}</div>
          <div>Item Count: {this.props.item.item_count}</div>
          <div>Item Type: {this.props.item.item_type}</div>
          <div>Item Condition: {this.props.item.item_condition}</div>
          <div>What in Exchange: {this.props.item.what_in_exchange}</div>
        </div>
      </article>
    )
  }
}

export default Item
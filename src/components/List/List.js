import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./List.css";

class List extends Component {
  state = {
    items: [
        {id: 'i1', content: 1},
        {id: 'i2', content: 2},
        {id: 'i3', content: 3},
        {id: 'i4', content: 4}
    ],
  };

  addItemHandler = () => {
    this.setState((prevState) => {
      return {
        items: prevState.items.concat({content: Math.floor(Math.random()*100), id: Math.floor(Math.random()* 10000) }),
      };
    });
  };

  removeItemHandler = (id) => {
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((item) => item.id !== id),
      };
    });
  };

  render() {
    const listItems = this.state.items.map((item) => (
      <CSSTransition key={item.id} timeout={300} classNames={{
        enter: '',
        enterActive: 'Add',
        exit: '',
        exitActive: 'Remove'
      }}>
        <li className="ListItem" onClick={() => this.removeItemHandler(item.id)}>
          {item.content}
        </li>
      </CSSTransition>
    ));

    return (
      <div>
        <button className="Button" onClick={this.addItemHandler}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        <TransitionGroup className="List" component="ul">
          {listItems}
        </TransitionGroup>
      </div>
    );
  }
}

export default List;

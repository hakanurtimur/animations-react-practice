import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Transition from "react-transition-group/Transition";

class App extends Component {
  state = {
    modalIsOpen: false,
    boxIsShown: true,
  };

  toggleBox = () => {
    this.setState({ boxIsShown: !this.state.boxIsShown });
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleBox} className="Button">
          Toggle
        </button>
        <br />
        <br />
        <Transition
          in={this.state.boxIsShown}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: "300px",
                height: "300px",
                margin: "auto",
                transition: "opacity 1s ease",
                opacity: state === "entered" || state === "entering" ? 1 : 0,
              }}
            ></div>
          )}
        </Transition>
        <h1>React Animations</h1>


          <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
          <Backdrop show={this.state.modalIsOpen} />


        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;

import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

const modal = (props) => {


    const duration = {
   
        enter: 300,
        exit: 1000,
    }

  return (
    <CSSTransition in={props.show} timeout={duration} mountOnEnter unmountOnExit classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: 'ModalClose'
    }}>

    {state => (

    <div className="Modal">
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
    )}
    </CSSTransition>
  );
};

export default modal;

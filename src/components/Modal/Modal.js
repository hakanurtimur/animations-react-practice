import React from "react";
import { Transition } from "react-transition-group";
import "./Modal.css";

const modal = (props) => {


    const duration = {
   
        enter: 300,
        exit: 1000,
    }

  return (
    <Transition in={props.show} timeout={duration} mountOnEnter unmountOnExit>

    {state => (

    <div className={`Modal ${state === 'entering'  ? 'ModalOpen' : state === 'exiting' ? 'ModalClose' : null}`}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
    )}
    </Transition>
  );
};

export default modal;

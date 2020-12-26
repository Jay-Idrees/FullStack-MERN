import React from "react";
import ReactDOM from "react-dom";
import {CSSTransition} from 'react-transition-group';

import Backdrop from './Backdrop';
import "./Modal.css";

const ModalOverlay=props=>{
const content =(
<div className={`modal ${props.className}`} style={props.style}>
    <header className={`modal__header ${props.headerClass}`}>
    {/* Props.header corrresponds with the header props in the Modal in the PlaceItem.js where it contains props.address */}
    <h2>{props.header}</h2>
    </header>
    {/* Note that here I am enclosing everyting inside the form -including footer so that all the content of the form is handeled in syncronization with OnSubmit */}
    <form onSubmit={props.onSubmit ? props.onSubmit:event=> event.preventDefault()}>
    <div className={`modal__content ${props.contentClass}`}> 
    {props.children}
    </div>
    {/* If you look at the modal inside the PlaceItem.js there we define props called footerClass and ContentClass and we are passing in the actual class names of "Place-item__modal-actions and place-item__modal-content" */}
    <footer className={`modal__footer ${props.footerClass}`}>
    {/* Notice that props.footer here is actually passing a button with an onclick{closeMapHandler} */}
    {props.footer}
    </footer>
    </form>
   
</div>
);

return ReactDOM.createPortal(content, document.getElementById('modal-hook'));

};

const Modal=props=>{
return (
<React.Fragment>
    {props.show && <Backdrop onClick={props.onCancel} />}
    <CSSTransition 
    in={props.show} 
    mountOnEnter 
    unmountOnExit 
    timeout={200} 
    classNames='modal'>
        {/* ...props is forwarding all the props received from Modal to the ModalOverlay component above */}
        <ModalOverlay {...props}/>
    </CSSTransition>
</React.Fragment>
);
};

export default Modal;
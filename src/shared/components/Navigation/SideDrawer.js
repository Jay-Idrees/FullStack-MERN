import React from "react";
import ReactDOM from 'react-dom'
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css"

const SideDrawer=props=>{
const content= (
// This CSSTransition is imported from react-transition-group package
<CSSTransition 
in={props.show} 
timeout={200} 
classNames="slide-in-left"
mountOnEnter
unmountOnExit>
<aside className="side-drawer" onClick={props.onClick}> {props.children}</aside>
</CSSTransition>
);

return ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
}

export default SideDrawer;
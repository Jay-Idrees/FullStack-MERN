import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = props => {
    // This is plugging the backdrop div up ontop of the root and sidedrawer
  return ReactDOM.createPortal(
    //By inserting props.onClick, it will trigger what the onclick in the Mainnavigation-backdrop contains which in this setting is the closeDrawer function- which interns sets the "setdrawerIsopen" state from false to true
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;

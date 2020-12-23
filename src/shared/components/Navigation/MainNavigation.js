import React from "react";
import {Link} from "react-router-dom";

import MainHeader from './MainHeader';
import "./MainNavigation.css";


const MainNavigation=props=>{

return(
    // Props.children will return anything between the <MainHeader></Mainheader> to the MainHeader.js
        <MainHeader>
            <button className="main-navigation__menu-btn">
                <span />
                <span />
                <span />
            </button>
            <h1 className="main-navigation__title">
            <Link to="/"> YourPlaces</Link>
            </h1>
            <nav>
                ...- will insert nav links later
            </nav>
        </MainHeader>

);


};

export default MainNavigation;
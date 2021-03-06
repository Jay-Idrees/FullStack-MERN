import React, {useState}from "react";
import {Link} from "react-router-dom";
import NavLinks from "./NavLinks"
import SideDrawer from "./SideDrawer"
import Backdrop from "../UIElements/Backdrop"


import MainHeader from './MainHeader';
import "./MainNavigation.css";


const MainNavigation=props=>{
    const [drawerIsOpen, setDrawerIsOpen]=useState(false)

    const openDrawerHandler=()=>{
        setDrawerIsOpen(true);
    };

    const closeDrawerHandler=()=>{
        setDrawerIsOpen(false);
    };



return(

    // Can only have ONE root JSX element per component-React/JS Rule if we want to use multiple then we should include React.Fragment
    <React.Fragment>
        {/* Note that the onClick event will be  */}
     {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
    
    <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
            <NavLinks />
        </nav>
    </SideDrawer>
        
    {/*Props.children will return anything between the <MainHeader></Mainheader> to the MainHeader.js */}
        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                <span />
                <span />
                <span />
            </button>
            <h1 className="main-navigation__title">
            <Link to="/"> YourPlaces</Link>
            </h1>
            <nav className="main-navigation__header-nav">
              <NavLinks/>
            </nav>
        </MainHeader>
        </React.Fragment>
);


};

export default MainNavigation;
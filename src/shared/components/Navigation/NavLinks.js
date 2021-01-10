import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";

import  {AuthContext} from '../../components/context/auth-context'
import './NavLinks.css'

const NavLinks=props=>{

    // Here auth is the object that holds the latest context- This line of code is listening to the context. Whenever there is a change in the context the component will be rerendered. And if you hover over the Auth you will notice that it reveals the options/properties available which are the isLoggedIn state and the login and logout functions
    const auth= useContext(AuthContext);

    return <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All Users </NavLink>
            </li>
            {/* This is invoking the isLoggedIn property from auth object which basically uses usContext  */}
            {auth.isLoggedIn && <li>
                <NavLink to="/u1/places"> My Places</NavLink>
            </li>}
            {auth.isLoggedIn &&<li>
                <NavLink to="/places/new">Add Place</NavLink>
            </li>}
            {!auth.isLoggedIn && <li>
                <NavLink to="/auth"> Authenticate </NavLink>
            </li>}

        </ul>

    
};

export default NavLinks
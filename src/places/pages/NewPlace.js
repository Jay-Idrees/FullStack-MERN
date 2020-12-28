import React from 'react';

import Input from "../../shared/FormElements/Input"
import {VALIDATOR_REQUIRE} from "../../shared/util/validators"
import "./NewPlace.css";
const NewPlace=()=>{

    return (<form className="place-form">

        <Input 
        element="input" 
        type="text" 
        label="Title" 
        //The piece of code below passing of VALIDATOR_REQIORE from the validation.js as props. It is basically a function to be applied onto the input valuse from this particular form input 
        validators={[{VALIDATOR_REQUIRE}]} 
        errorText="Please enter a valid title"/>

    </form>);

};

export default NewPlace;
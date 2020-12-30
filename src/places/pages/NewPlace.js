import React from 'react';

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/Button/Button";
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from "../../shared/util/validators"
import {useForm} from '../../shared/hooks/form-hook';
import "./PlaceForm.css";


const NewPlace=()=>{
// Note that this initializes the useReducer function

const [formState, inputHandler]=useForm({
        title:{
            value:"",
            isValid:false
        },
        description:{
            value:'',
            isValid:false
        },
        address:{
            value:'',
            isValid:false
        }
    }, false);
  



    const placeSubmithandler=event=>{
        event.preventDefault();
        console.log(formState.inputs) // send this to the backend

    }


    return (<form className="place-form" onSubmit={placeSubmithandler}>


        <Input 
        // Note that id, element, type, label, validators, errorText, onInput are parameters that can be passed on to the functions
        id='title'
        element="input" 
        type="text" 
        label="Title" 
        //The piece of code below passing of VALIDATOR_REQIRE from the validators.js as props. It is basically a function to be applied onto the input value from this particular form input textbox
        validators={[VALIDATOR_REQUIRE()]} 
        errorText="Please enter a valid title"
        onInput={inputHandler}
        />

        <Input 
        id='description'
        type="textarea" 
        label="Description" 
        //The piece of code below passing of VALIDATOR_REQIRE from the validators.js as props. It is basically a function to be applied onto the input value from this particular form input 
        validators={[VALIDATOR_MINLENGTH(5)]} 
        errorText="Please enter a valid description"
        onInput={inputHandler}
        />

        <Input 
        id='address'
        element='input'
        type="text" 
        label="Address" 
        //The piece of code below passing of VALIDATOR_REQIRE from the validators.js as props. It is basically a function to be applied onto the input value from this particular form input 
        validators={[VALIDATOR_REQUIRE]} 
        errorText="Please enter a valid address"
        onInput={inputHandler}
        />  



        {/* Setting up default button state as diabled when the formState.isValid is false */}
        <Button type="submit" disabled={!formState.isValid}> Add Place</Button>
        

    </form>);

};

export default NewPlace;
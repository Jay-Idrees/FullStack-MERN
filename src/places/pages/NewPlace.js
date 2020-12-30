import React, {useCallback, useReducer} from 'react';

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/Button/Button";
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from "../../shared/util/validators"
import "./PlaceForm.css";

const formReducer=(state, action)=>{
    // Here I am defining cases based on the type of input such as 'text' or 'textarea'
switch (action.type){
    case 'INPUT_CHANGE':
        let formIsValid=true;
        // for each of the states of the component portions if you receive an id (stored in the variable inputId), match the ids for the default state defined in the useReducer function with the id of the component portion (e-g title)
        for (const inputId in state.inputs) {
            if(inputId===action.inputId){
                formIsValid=formIsValid && action.isValid;
            } else {
                formIsValid=formIsValid && state.inputs[inputId].isValid
            }
        }
        return {
            ...state,
            inputs:{
                ...state.inputs,
                // So this line is specifying instructions for individual forminput components. For example [action.inputId] for the 'title' wil be title- so the code is saying 'for input from the textbox with title as id, update the default state by replaceing the current state values from action.value and action.isValid
                [action.inputId]:{value:action.value, isValid:action.isValid}
            },
            // If even one of the individual components of the form 
            isValid:formIsValid
        };
        default:
            return state;
}//switch

};//formReducer

const NewPlace=()=>{

    const [formState, dispatch]=useReducer(formReducer, {
        inputs:{
            title:{
                value:"",
                isValid:false
            },
            // Here I am assigining the default state for the properties of the input form portion with the key of 'description'
            description:{
                value:"",
                isValid:false
            },
// This will check the overall validity of the form
        },
        isValid:false
    });

    const inputHandler=useCallback((id, value, isValid)=>{
        // This titleInputHandler function is invoked onInput and collects id, type, value in textbox and adds isValid to pass on as paramteters for the dispatch 'object' representing the new state for the formReducer. If you look at the NewPlace function, you will notice that formReducer is "new updated state" for the useReducer hook function 
        dispatch({type:'INPUT_CHANGE', value:value, isValid:isValid, inputId:id})
    }, []);

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
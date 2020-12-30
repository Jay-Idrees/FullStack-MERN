import {useCallback, useReducer} from "react";

// Copying the form reducer function form NewPlace.js
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

export const useForm=()=>{
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
    
                address:{
                    value:"",
                    isValid:false
                }
    
    
    // This will check the overall validity of the form
            }, // inputs
            isValid:false
        }); // useReducer
}//NewPlace
}; //useForm
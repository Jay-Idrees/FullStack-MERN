import {useCallback, useReducer} from "react";

//Note that react hooks must be directly called inside the functional components. It cannot be called out inside a loop or fetch/then etc

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
                formIsValid=formIsValid && state.inputs[inputId].isValid;
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

        case 'SET_DATA':
        return {
            inputs: action.inputs,
            isValid:action.formIsValid
        };

        default:
            return state;
}//switch

};//formReducer


// Note that the initialInputs and the initialformValidity are the default state values that are paassed on as parameters to the useForm function
export const useForm=(initialInputs, initialFormValidity)=>{
    //useReducer produces the new state
        const [formState, dispatch]=useReducer(formReducer, {
            // Here I am assigining the default state- initialization logic
            inputs:initialInputs, 
            isValid:initialFormValidity
    
        }); // useReducer

        const inputHandler=useCallback((id, value, isValid)=>{
            // This titleInputHandler function is invoked onInput and collects id, type, value in textbox and adds isValid to pass on as paramteters for the dispatch 'object' representing the new state for the formReducer. If you look at the NewPlace function, you will notice that formReducer is "new updated state" for the useReducer hook function 
            dispatch({
                type:'INPUT_CHANGE', 
                value:value, 
                isValid:isValid, 
                inputId:id});
        }, []);

// Now I am storing the data in a react callBack hook so the DOM does not need to be rerendered again and again in an infinite loop. 
const setFormData=useCallback((inputData, formValidity)=>{

dispatch({
    type:'SET_DATA',
    inputs:inputData,
    formIsValid:formValidity

    }); // dispatch
}, []);// setFormData



        // here I am returning the formState and the dispatched updated state
        return [formState, inputHandler, setFormData];
};// useForm

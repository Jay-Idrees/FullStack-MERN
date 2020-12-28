import React, {useReducer} from "react";

import {validate} from "../util/validators"
import "./Input.css"



const inputReducer=(state, action)=>{
    // Note that here we are assiging a type and val property to action
    switch (action.type){
        case 'CHANGE':
            // The return is asking the retrun a new state
            return{
                // copies the old state object- copies all key value pairs from the old object 
                ...state,
                value:action.val,
                isValid: validate(action.val, action.validators)
            };
            default:
                return state;

    }
};

const Input=props=>{
    // The UseReducer is similar to useState but its unique in that it also has the capabilities of executing a function. We can use array destructuring and the userReducer function can take 2 arguments which in this case are the imput reducer and the initial state values. The function InputReduce when run will update the current state and will execute the function called and then based on then re-render the component 
    // Note that the {} is passing on the initial state. Like in this function I have used a blank value and isValid:false as the default state.- Now in the case Change I am telling that, ok when you notice any change from the default state, run this logic first - which will basically perform input valiation function and based on the result of that function (which in this case is the change in class) will re-render the class of the function 
    const [inputState, dispatch]=useReducer(inputReducer, {value:"", isvalid:false});

const changeHandler=event=>{
    // This is telling that whatever difference in the state you have detected capture that value and then dispatch it with a lable "Change" 
dispatch ({type:'CHANGE', 
            val:event.target.value,
            //Note that these 'validators' are actually props being sent from the new-place component where we called in the Input component
            validators:props.validators
        });

};


    // This onchange function will be triggered whenever there is change in the input


// Select between input vs text area. Note that the values of input and other specidications are passed on in the location where the component is called 
    const element=props.element ==="input" ?( 
    <input 
    id={props.id} 
    //This props.type is coming from the dispatch in the Change handler
    type={props.type} 
    placeholder={props.placeholder}
    // Two way binding for value
    // This is creating the prop.onChange that is storing the CHANGE lable and the latest value of the 
    onChange={changeHandler}
    value={inputState.value}
    />
        ):(
        <textarea 
        id={props.id} 
        rows={props.rows ||3}  
        onChange={changeHandler}
        value={inputState.value}/>
);


    return (
        // Telling the div to use a different class if the input is invalid
    <div className={`form-control ${! inputState.isValid && 'form-control--invalid'}`}>
        <label htmlFor={props.id}>{props.label}</label>
        {element}
        {/* Passing an error using the props if the input is not valid */}
        {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
);

};

export default Input;
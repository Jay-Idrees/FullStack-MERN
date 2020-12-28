import React, {useReducer} from "react";


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
                isValid: true
            };
            default:
                return state;

    }
};

const Input=props=>{
    // The UseReducer is similar to useState but its unique in that it also has the capabilities of executing a function. We can use array destructuring and the userReducer function can take 2 arguments which in this case are the imput reducer and the initial state values. The function InputReduce when run will update the current state and will then rerun the 
    // Note that the {} is passing on the initial state
    const [inputState, dispatch]=useReducer(inputReducer, {value:"", isvalid:false});

const changeHandler=event=>{
dispatch ({type:'CHANGE', val:event.target.value});

};




    // This onchange function will be triggered whenever there is change in the input


// Select between input vs text area. Note that the values of input and other specidications are passed on in the location where the component is called 
    const element=props.element ==="input" ?( 
    <input 
    id={props.id} 
    type={props.type} 
    placeholder={props.placeholder}
    // Two way binding for value
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
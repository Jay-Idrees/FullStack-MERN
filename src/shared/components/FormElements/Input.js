
import React, { useReducer, useEffect } from 'react';

import { validate } from '../../util/validators';
import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true
      }
    }
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isTouched: false,
    isValid: false
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, value, isValid, onInput]);

  const changeHandler = event => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH'
    });
  };

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 5}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${!inputState.isValid && inputState.isTouched &&
        'form-control--invalid'}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;






// // Forms input involve input.js, input.css, newPlace.js where the input form component is rendered and the util/validators.js to check for input validation


// import React, {useReducer, useEffect} from "react";

// import {validate} from "../../util/validators"
// import './Input.css';

// // Note that the useEffect hook is typlically used to run some javascript function when the page is loaded. We can also use this hook to execute another tertirary level function with a change in state and therefore DOM rendering is detected, for example in this case with the require input validation functionality. 

// const inputReducer=(state, action)=>{
//     // Note that here we are assiging a type and val property to action
//     switch (action.type){
//         case 'CHANGE':
//             // The return is asking the retrun a new state
//             return{
//                 // copies the old state object- copies all key value pairs from the old object 
//                 ...state,
//                 value:action.val,
//                 isValid: validate(action.val, action.validators)
//             };
//         case 'TOUCH': {
//             return {
//                 ...state,
//                 isTouched:true
//             };
//         };
//             default:
//                 return state;

//     }
// };

// const Input=props=>{
//     // The UseReducer is similar to useState but its unique in that it also has the capabilities of executing a function. We can use array destructuring and the userReducer function can take 2 arguments which in this case are the imput reducer and the initial state values. The function InputReduce when run will update the current state and will execute the function called and then based on then re-render the component 
//     // Note that the {} is passing on the initial state. Like in this function I have used a blank value and isValid:false as the default state.- Now in the case Change I am telling that, ok when you notice any change from the default state, run this logic first - which will basically perform input valiation function and based on the result of that function (which in this case is the change in class) will re-render the class of the function 
//     const [inputState, dispatch]=useReducer(inputReducer, {
//         value:"", 
//         isTouched:false,
//         isvalid:false
    
// });

// //Since we do not want an infinte loop, therefore another smart way is to use object destructuring to extract and use only what we need from the inputState and the props which is really id, onoutput,  value and isValid

// const {id, onInput}=props; // The oninput prop is setup in the newPlace.js where the input component is planted
// const {value, isValid}=inputState // I am using these objects as they are the markers of change in the state and input and would rightfully trigger to run the useEffect



// useEffect(
//     ()=>{
//         //Note that as I have used object destructring to extract and call in the variables from the React props and inputState objects I do not need to call in props.id or insputState.value or inputState.isValid in can directly call in value, isValidand onInput
//         onInput(id, value, isValid)
//     },[id, value, isValid, onInput] // [] lists the dependenciens. These dependencies are also the trigger for running the useEffect hook. For instance we would list props and the inputState in the dependencies, so that whenever props or the inputstate are changed the useEffect hook will run- Hosever the problem with this approach is that it will create an infinite loop between change and useEffect- which is inefficient. It will be an infinite loop because the change in prop is like a positive feeback system for running the useEffect- which means that It will get locked into a cycle of repeat rendering . In the final code I have used object destructuring to only extract the relevant forms of data which are capturing change
// )



// const changeHandler=event=>{
//     // This is telling that whatever difference in the state you have detected capture that value and then dispatch it with a lable "Change" 
// dispatch ({type:'CHANGE', 
//             val:event.target.value,
//             //Note that these 'validators' are actually props being sent from the new-place component where we called in the Input component
//             validators:props.validators
//         });

// };



// const touchHandler=()=>{
//     dispatch({
//         type:'TOUCH'
//     });
// };




//     // This onchange function will be triggered whenever there is change in the input


// // Select between input vs text area. Note that the values of input and other specidications are passed on in the location where the component is called 
//     const element=props.element ==="input" ?( 
//     <input 
//     id={props.id} 
//     //This props.type is coming from the dispatch in the Change handler
//     type={props.type} 
//     placeholder={props.placeholder}
//     // Two way binding for value
//     // This is creating the prop.onChange that is storing the CHANGE lable and the latest value of the 
//     onChange={changeHandler}
//     // The purpose of adding this blurr is to pass on the touchHandler so that on the initial load of the page, when the user has not event clicked the title text box yet, and the input validation by default gives an input validation error for a missing value.Doing this fixes that issue by creating a "touch case" to the input validation logic is only execute if the user at leasts types in first and then clicks out
//     onBlur={touchHandler}
//     value={inputState.value}
//     />
//         ) : (
//         <textarea 
//         id={props.id} 
//         rows={props.rows || 10}
//         onChange={changeHandler}
//         onBlur={touchHandler}
//         value={inputState.value}
//         />
// );


//     return (
//         // Telling the div to use a different class if the input is invalid
//     <div className={`form-control ${! inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
//         <label htmlFor={props.id}>{props.label}</label>
//         {element}
//         {/* Passing an error using the props if the input is not valid- Basically saying that only show this element when inputState is not valida and when inputState.istouched==true */}
//         {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
//     </div>
// );

// };

// export default Input;
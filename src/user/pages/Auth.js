import React, {useState} from "react";


import Card from "../../shared/components/UIElements/Card"
import Input from '../../shared/components/FormElements/Input'
import Button from "../../shared/components/Button/Button"
import {VALIDATOR_MINLENGTH, VALIDATOR_EMAIL, VALIDATOR_REQUIRE} from "../../shared/util/validators"
import {useForm} from '../../shared/hooks/form-hook'
import "./Auth.css";

const Auth=()=>{

const [isLoginMode, setIsLoginMode]=useState(true);

// The useForm is the custom hook created in the form-hook.js and contains inputHandler and setFormData (coming from the useReducer function)
    const [formState, inputHandler, setFormData]=useForm({
        // This is the initial state
        email: {
            value:"",
            isValid:false
        },
        password:{
            value:"",
            isValid:false
        }
    }, false);

    const authSubmitHandler=event=>{
        event.preventDefault();
        console.log(formState.inputs)
    };

    const switchModeHanler=()=>{
        if (!isLoginMode) {
            setFormData({name:undefined}, 
                formState.inputs.email.isValid &&
                formState.inputs.password.isValid);
        } else {
            setFormData({
                // Else copy the email and password as is and then add a new field called name, setting the default value to blank
                ...formState.inputs,
                name:{
                    value:'',
                    isValid:false
                }
                // Note that here as the overall state of the form is set to blank as the name field is left blank by default and thus is not able to 
            }, false);
        }
        setIsLoginMode(prevMode => !prevMode);
    };

    return(
    
    <Card className='authentication'>
        <h2> Login Required </h2>
        <hr/>
    
    <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
            <Input
            element='input'
            id='name'
            type='text'
            label='Your Name'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a name'
            onInput={inputHandler}
            />
        ) }
        <Input 
        id='email'
        element='input'
        type='email'
        label="E-Mail"
        validators={[VALIDATOR_EMAIL()]}
        errorText="Please enter a valid email address" 
        // Note that this input handler is 
        onInput={inputHandler}
        />

        <Input 
        id='password'
        element='input'
        type='password'
        label="Password"
        validators={[VALIDATOR_MINLENGTH (5)]}
        errorText="Please enter a valid password, atleast 5 characters" 
        onInput={inputHandler}
        />


        <Button type='submit' disabled={!formState.isValid}> {isLoginMode?'Login':'Register'}</Button>

    </form>

          <Button inverse onClick={switchModeHanler} type='submit' disabled={!formState.isValid}> {isLoginMode?'New User':'Login'} </Button>
    </Card>)
};

export default Auth;
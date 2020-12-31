import React from "react";


import Card from "../../shared/components/UIElements/Card"
import Input from '../../shared/components/FormElements/Input'
import Button from "../../shared/components/Button/Button"
import {VALIDATOR_MINLENGTH, VALIDATOR_EMAIL} from "../../shared/util/validators"
import {useForm} from '../../shared/hooks/form-hook'
import "./Auth.css";

const Auth=()=>{

    const [formState, inputHandler]=useForm({
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

    return(
    
    <Card className='authentication'>
        <h2> Login Required </h2>
        <hr/>
    
    <form>
        <Input 
        id='email'
        element='input'
        type='email'
        label="E-Mail"
        validators={[VALIDATOR_EMAIL()]}
        errorText="Please enter a valid email address" 
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

        <Button type='submit' disabled={!formState.isValid}> Login</Button>

    </form>

    </Card>)
};

export default Auth;
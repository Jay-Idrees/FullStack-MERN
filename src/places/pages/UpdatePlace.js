import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/Button/Button';
import './PlaceForm.css';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import {useForm} from "../../shared/hooks/form-hook";
import Card from "../../shared/components/UIElements/Card"
import'./PlaceForm.css'


const DUMMY_PLACES=[ 
    // Using this dummy variable untill the backend is established
    
    // {

    // id:'p1',
    // title:'Empire State building',
    // description:'One of the most famous sky scrapers in the world',
    // imageURL: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=1067&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2016%2F10%2Fempire-state-buildling-colored-lights-EMPIRE1020.jpg',
    // address:'20 W 34th St, New York, NY 10001',
    // location:{
    //     lat:40.7478713,
    //     lng: -73.9865029
    // },
    // creator:'u1'    
    
    // },
        
    
    // {

    //     id:'p2',
    //     title:'Empire State building',
    //     description:'One of the most famous sky scrapers in the world',
    //     imageURL: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=1067&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2016%2F10%2Fempire-state-buildling-colored-lights-EMPIRE1020.jpg',
    //     address:'20 W 34th St, New York, NY 10001',
    //     location:{
    //         lat:40.7478713,
    //         lng: -73.9865029
    //     },
    //     creator:'u2'    
        
    //     }

]

const UpdatePlace=()=>{
    const [isLoading, setIsLoading]=useState(true);
    // Note that the useParams hook has access to the placeId params as it as it matches with how it was defined in app.js under routes
    const placeId=useParams().placeId;


// Note that the react hooks can only be used inside the functional components

    const [formState, inputHandler, setFormData]= useForm({
        title:{
            value:"", // This is coming from the DUMMY_PLACES.find
            isValid:false
    },
        description: {
            value:"",
            isValid: false
        }
    
    }, false);

    const identifiedPlace=DUMMY_PLACES.find(p=>p.id===placeId);
     
            useEffect (()=>{
                if(identifiedPlace) {
                
                setFormData({

                    title:{
                        value: identifiedPlace.title,
                        isValid:true
                    },
                    description:{
                        value:identifiedPlace.description,
                        isValid:true
                    }

                }, true);
            }
                setIsLoading(false);
            }, [setFormData, identifiedPlace]);

        

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
      };
    

    if (!identifiedPlace){
        return(
            <div className="center">
               <Card><h2>Could not find the place</h2></Card> 
            </div>
        );

        }; //if-identifiedPlace

        
        if (isLoading){
            return(
                <div className="center">
                    <h2>Loading</h2>
                </div>
            );
    };


return(
<form className="place-form" onSubmit={placeUpdateSubmitHandler}>
    {/* Title */}
    <Input 
    id="tittle" 
    element="input" 
    type="text" 
    label="Title" 
    validators={[VALIDATOR_REQUIRE()]} 
    errorText="Please enter a valid title"
    onInput={inputHandler}
    // Note that the identified place is a variable drived from the DUMMY_PLACES.find above
    initialValue={formState.inputs.title.value}
    initialValid={formState.inputs.title.isValid}
    />
    {/* Description */}

    <Input 
    id="description" 
    element="textarea" 
    label="Description" 
    validators={[VALIDATOR_MINLENGTH(5)]} 
    errorText="Please enter a valid description"
    onInput={inputHandler}
    initialValue={formState.inputs.description.value}
    initialValid={formState.inputs.description.isValid}
    />

    <Button
    type="submit"
    disabled={!formState.isValid}
    > Update Place</Button>
    
</form>);
};

export default UpdatePlace;
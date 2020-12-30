import React from 'react';
import {useParams} from 'react-router-dom'

import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/Button/Button'
import './PlaceForm.css'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';

const DUMMY_PLACES=[ 
    // Using this dummy variable untill the backend is established
    
    {

    id:'p1',
    title:'Empire State building',
    description:'One of the most famous sky scrapers in the world',
    imageURL: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=1067&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2016%2F10%2Fempire-state-buildling-colored-lights-EMPIRE1020.jpg',
    address:'20 W 34th St, New York, NY 10001',
    location:{
        lat:40.7478713,
        lng: -73.9865029
    },
    creator:'u1'    
    
    },
        
    
    {

        id:'p2',
        title:'Empire State building',
        description:'One of the most famous sky scrapers in the world',
        imageURL: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=1067&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2016%2F10%2Fempire-state-buildling-colored-lights-EMPIRE1020.jpg',
        address:'20 W 34th St, New York, NY 10001',
        location:{
            lat:40.7478713,
            lng: -73.9865029
        },
        creator:'u2'    
        
        }



]


const UpdatePlace=()=>{
    // Note that the useParams hook has access to the placeId params as it as it matches with how it was defined in app.js under routes
const placeId=useParams().placeId;
const identifiedPlace=DUMMY_PLACES.find(p=>p.id===placeId)
if (!identifiedPlace){
    return(
        <div className="center">
            <h2>Could not find the place</h2>
        </div>
    )
};

return <form className="place-form">
    {/* Title */}
    <Input 
    id="tittle" 
    element="input" 
    type="text" 
    label="Title" 
    validators={[VALIDATOR_REQUIRE()]} 
    errorText="Please enter a valid title"
    onInput={()=>{}}
    // Note that the identified place is a variable drived from the DUMMY_PLACES.find above
    value={identifiedPlace.title}
    valid={true}
    />
    {/* Description */}

    <Input 
    id="description" 
    element="textarea" 
    label="Description" 
    validators={[VALIDATOR_MINLENGTH(5)]} 
    errorText="Please enter a valid description"
    onInput={()=>{}}
    value={identifiedPlace.description}
    valid={true}
    />

    <Button
    type="submit"
    disabled={true}
    > Update Place</Button>
    
</form>
};

export default UpdatePlace;
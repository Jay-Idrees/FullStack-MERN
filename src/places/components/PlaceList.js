import React from "react"

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem"
import Button from '../../shared/components/Button/Button'

import "./PlaceList.css"

const PlaceList=props=>{
    if (props.items.length===0){
        return(
        <div className='place-list center'>
            <Card>
                <h2>No Places Found. Maybe create one?</h2>
                <Button to='places/new'>Share Place</Button>
            </Card>
    
        </div>
        );
    };

    return (
        <ul className='place-list'>

            {props.items.map(place=>(
                // See how I have used teh PlaceItem
            <PlaceItem
            // The list below if making these items available for props
            key={place.id}
            id={place.id}
            image={place.imageURL}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
            />)
            )}
        </ul>
    );
};

export default PlaceList;
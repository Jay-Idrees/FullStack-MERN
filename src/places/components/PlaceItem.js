import React from "react";


import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/Button/Button"
import "./PlaceItem.css"

// Passing data into the actual component for use. Item is the real deal that is projected onto placelist
const PlaceItem=props=>{
    return<li className='place-item'>
     <Card className="place-item__content">
        <div className="place-item__image">
            <img src={props.image}  alt={props.title}/>
        </div>
        <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
            <Button> View on Map</Button>
            <Button> Edit </Button>
            <Button> Delete </Button>

        </div>
    </Card>
    </li>
};

export default PlaceItem;
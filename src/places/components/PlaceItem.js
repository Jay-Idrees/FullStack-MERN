import React , {useState} from "react";


import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/Button/Button"
import Modal from"../../shared/components/UIElements/Modal";
import Map from"../../shared/components/UIElements/Map";
import "./PlaceItem.css"

// Passing data into the actual component for use. Item is the real deal that is projected onto placelist
const PlaceItem=props=>{
// This is the section where all the actual values of the props are landing
    const [showMap, setShowMap]=useState(false);
    const openMapHandler=()=>setShowMap(true);
    const closeMapHandler=()=>setShowMap(false)


    return(
    <React.Fragment>
    <Modal 
    show={showMap} 
    onCancel={closeMapHandler} 
    header={props.address} 
    contentClass="place-item__modal-content"
    footerClass="place-item__modal-actions"
    footer={<Button onClick={closeMapHandler}>Close</Button>}
    >
     <div className="map-container">
       <Map center={props.coordinates} zoom={16}/>
         </div>   
    </Modal>
    <li className='place-item'>
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
            <Button inverse onClick={openMapHandler}> View on Map</Button>
            <Button to={`/places/${props.id}`}> Edit </Button>
            <Button danger> Delete </Button>

        </div>
    </Card>
    </li>
    </React.Fragment>
    );
    
};

export default PlaceItem;
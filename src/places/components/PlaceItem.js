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
    const [showConfirmModal, setShowConfirmModal]=useState(false);

    // Functions to handle state
    const openMapHandler=()=>setShowMap(true);
    const closeMapHandler=()=>setShowMap(false)

    // Functions for controling when the delete modal is displayed or disappears
    const showDeleteWarningHandler=()=>setShowConfirmModal(true)
    const cancelDeleteHandler=()=>setShowConfirmModal(false)
    const confirmDeleteHandler=()=>{
        setShowConfirmModal(false);
        console.log('DELETING...');
    };

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
{/* Delete Modal starts here */}
        <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header='Are you Sure? Like Really?' footerClass="place-item__modal-actions" footer={
        <React.Fragment>

        <Button inverse onClick={cancelDeleteHandler}> Cancel</Button>
        <Button danger onClick={confirmDeleteHandler}>Delete</Button>

        </React.Fragment>

        }>
            <p> Do you want to permanently delete this place?</p>
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
            <Button danger onClick={showDeleteWarningHandler}> Delete </Button>

        </div>
    </Card>
    </li>
    </React.Fragment>
    );
    
};

export default PlaceItem;
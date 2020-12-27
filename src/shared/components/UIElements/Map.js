import React, {useRef, useEffect} from 'react';


import './Map.css';

const Map=props=>{

    const mapRef=useRef();

    // Here I am extracting center and zoom from the props so that they are available when the useRef is run

    const {center, zoom}=props;

    useEffect(
        // This hook will execute the function inside {} if there is a change in the state of the array of dependiecies []. If there is nothing in the array of dependencies then the hook will only exexute the function once on loading
        ()=>{    
            const map= new window.google.maps.Map(mapRef.current, {
                // Note that here center is the prop that contains 
            center:center,
            zoom:zoom
        });
    // Note that center is a prop created in PlaceItem under the map container
            new window.google.maps.Marker({position:center, map:map})
        },[center, zoom]
    )




    // By adding className you are just leaving a possibility of customization- no matter you use it or not
    return (
     <div 
    ref={mapRef} 
    className={`map ${props.className}`} 
    style={props.style}>
    </div>
    );
};

export default Map;
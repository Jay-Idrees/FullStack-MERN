import React from "react";
import {useParams} from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES=[ 
    
    
    {

    id:'p1',
    title:'Empire State building',
    description:'One of the most sky scrapers in the world',
    imageURL: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=1067&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2016%2F10%2Fempire-state-buildling-colored-lights-EMPIRE1020.jpg',
    address:'20 W 34th St, New York, NY 10001',
    location:{
        lat:'40.7478713',
        long: '-73.9865029'
    },
    creator:'u1'    
    
    },
        
    
    {

        id:'p2',
        title:'Empire State building',
        description:'One of the most sky scrapers in the world',
        imageURL: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=1067&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2016%2F10%2Fempire-state-buildling-colored-lights-EMPIRE1020.jpg',
        address:'20 W 34th St, New York, NY 10001',
        location:{
            lat:'40.7478713',
            long: '-73.9865029'
        },
        creator:'u2'    
        
        }



]


const UserPlaces=()=>{
  const userId=  useParams().userId;
  const loadedPlaces= DUMMY_PLACES.filter(place=>place.creator===userId)
    return <PlaceList items={loadedPlaces}/>;
};

export default UserPlaces;
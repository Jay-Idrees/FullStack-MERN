import React from "react";
import UserItem from "./UserItem"
import "./UsersList.css"

const UsersList=props=>{

    if (props.items.length===0){

        return(
            <div>
                <h2>No Users found</h2>
            </div>
        );
    } // br close if

    return <ul>
        {/* Note that I hace not set up the mangoDB modal yet, but I am creating this in anticipation of how the userItem shoud look like */}
        {props.items.map (user=>(<UserItem  
        key={user.id} 
        id={user.id} 
        image={user.image} 
        placeCount={user.places} />)
         )}
    </ul>


};

export default UsersList;
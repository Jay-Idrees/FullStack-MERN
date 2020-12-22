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
        {props.items.map (user=>
        {return <userItem />;
         })}
    </ul>


};

export default UsersList;
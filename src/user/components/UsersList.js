import React from "react";

// Note that UserItem is a smaller component compared to UserList and so is imported into the UserList
import Card from "../../shared/components/UIElements/Card"
import UserItem from "./UserItem"
import "./UsersList.css"

const UsersList=props=>{

    if (props.items.length===0){

        return(
            <div>
                <Card>
                <h2>No Users found</h2>
                </Card>
            </div>
        );
    } // br close if

    return <ul className='users-list'>
        {/* Note that I hace not set up the mangoDB modal yet, but I am creating this in anticipation of how the userItem shoud look like */}
        {props.items.map (user=>(
        <UserItem  
        key={user.id} 
        id={user.id} 
        image={user.image} 
        name={user.name} 
        placeCount={user.places} />)
         )}
    </ul>


};

export default UsersList;
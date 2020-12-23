import React from 'react';

import UsersList from "../components/UsersList"




const Users=()=>{

const USERS=[

    {
    id:"u1",
    name:"Jay Idrees",
    image:"https://i1.rgstatic.net/ii/profile.image/272563498647591-1441995610798_Q512/Jay_Idrees.jpg",
    places:3

    }
]


    return <UsersList  items={USERS}/>;
};

export default Users;
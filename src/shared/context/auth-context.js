import {createContext} from 'react';



export const AuthContext=createContext(
    // Whatever is inside is the value of he context
    {isLoggedIn:false,
    
    login:()=>{},
    logout:()=>{}
    
    });

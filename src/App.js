import React, {useState, useCallback} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import Users from  "./user/pages/Users"
import NewPlace from "./places/pages/NewPlace"
import UserPlaces from "./places/pages/UserPlaces"
import MainNavigation from "./shared/components/Navigation/MainNavigation"
import UpdatePlaces from "./places/pages/UpdatePlace"
import Auth from "./user/pages/Auth"
import {AuthContext} from './shared/components/context/auth-context'

const App=()=> {
 const [isLoggedIn, setIsLoggedIn]=useState(false);

 const login=useCallback(()=>{
   setIsLoggedIn(true)
 },[]);

 const logout=useCallback(()=>{
  setIsLoggedIn(false)
},[]);


  return (

// Here whenever the value of the context changes the components/routes will be re-rendered. Basically it is allowing us to use state and bind it to the value
<AuthContext.Provider value={

{
  isLoggedIn:isLoggedIn, 
  login:login,
  logout:logout
}

}>

  <Router>
   
<MainNavigation/>
<main>
   {/* Adding a switch prevents automatic re-routing of path */}
   <Switch>
    {/* Default path to users - You have to enclose the component in the route if you only want to display that particular component */}
          <Route path="/" exact>
            {/*This Users is from the pages users  */}
            <Users/>

          </Route>
{/* Adding places and impoeting the userPlaces page */}
            <Route path="/:userId/places" exact>
              <UserPlaces/>
            </Route>


      {/* Path to places */}

          <Route path="/places/new" exact>
          
          <NewPlace/>

          </Route>


          <Route path="/places/:placeId" exact>
          
          <UpdatePlaces/>

          </Route>

          <Route path="/auth" exact>
          
          <Auth/>

          </Route>


   {/* Redirecting to homepage of something else is typed */}
      <Redirect to="/"/>
    </Switch>
    </main>
  </Router>
  
  </AuthContext.Provider>
  
  ) // return
}; //App

export default App;

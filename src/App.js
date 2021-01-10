import React, {useState, useCallback} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import Users from  "./user/pages/Users"
import NewPlace from "./places/pages/NewPlace"
import UserPlaces from "./places/pages/UserPlaces"
import MainNavigation from "./shared/components/Navigation/MainNavigation"
import UpdatePlace from "./places/pages/UpdatePlace"
import Auth from "./user/pages/Auth"
import {AuthContext} from './shared/context/auth-context'

const App=()=> {
 const [isLoggedIn, setIsLoggedIn]=useState(false);

 const login=useCallback(()=>{
   setIsLoggedIn(true)
 },[]);

 const logout=useCallback(()=>{
  setIsLoggedIn(false)
},[]);

let routes;
  if (isLoggedIn){
    routes=(
      <Switch>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/:userId/places" exact>
        <UserPlaces />
      </Route>
      <Route path="/places/new" exact>
        <NewPlace />
      </Route>
      <Route path="/places/:placeId">
        <UpdatePlace />
      </Route>
      {/* Redirecting to the homepage when  */}
      <Redirect to="/" />
    </Switch>
    );
  } else{
    // These routes are relevant when not logged in
    routes=(

      <Switch>

      <Route path="/" exact>
      {/*This Users is from the pages users  */}
      <Users/>
      </Route>

      <Route path="/:userId/places" exact>
      <UserPlaces/>
      </Route>

      <Route path="/auth" exact>   
          <Auth/>
      </Route>

      <Redirect to='/auth'/>

      </Switch>
    );
  }

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
        <MainNavigation />
        <main>{routes}</main>
      </Router>
  
  
  </AuthContext.Provider>
  
  ) // return
}; //App

export default App;

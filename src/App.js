import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import Users from  "./user/pages/Users"
import NewPlace from "./places/pages/NewPlace"
import UserPlaces from "./places/pages/UserPlaces"
import MainNavigation from "./shared/components/Navigation/MainNavigation"
import UpdatePlaces from "./places/pages/UpdatePlace"

const App=()=> {
  return <Router>
   
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



   {/* Redirecting to homepage of something else is typed */}
      <Redirect to="/"/>
    </Switch>
    </main>
  </Router>
};

export default App;

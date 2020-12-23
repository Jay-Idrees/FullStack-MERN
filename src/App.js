import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Users from  "./user/pages/Users"
import NewPlace from "./places/pages/NewPlace"


const App=()=> {
  return <Router>
    {/* Adding a switch prevents automatic re-routing of path */}
   <Switch>
    {/* Default path to users - You have to enclose the component in the route if you only want to display that particular component */}
          <Route path="/" exact>
            {/*This Users is from the pages users  */}
            <Users/>

          </Route>
      {/* Path to places */}

          <Route path="/places/new" exact>
          
          <NewPlace/>

          </Route>

   {/* Redirecting to homepage of something else is typed */}
      <Redirect to="/"/>
    </Switch>
  </Router>
};

export default App;

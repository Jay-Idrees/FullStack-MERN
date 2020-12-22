import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Users from  "./user/pages/Users"
import NewPlace from "./places/pages/NewPlace"


const App=()=> {
  return <Router>
   <Switch>
    {/* Default path to users */}
          <Route path="/" exact>
            
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

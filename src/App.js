import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Users from  "./user/pages/Users"



const App=()=> {
  return <Router>
    {/* Default path to users */}
    <Route path="/" exact>
      
      <Users/>

    </Route>
      {/* Path to places */}

      <Route path="/places/new" exact>
      
      <Users/>

    </Route>

   {/* Redirecting to homepage of something else is typed */}
      <Redirect to="/"/>

  </Router>
};

export default App;

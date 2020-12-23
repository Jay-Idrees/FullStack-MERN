import React from "react";

import './MainHeader.css';


const MainHeader=props=>{
return( <header className="main-header">
{/* So we can render any component */}
{props.children}


</header>)
};

export default MainHeader
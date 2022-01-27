import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
         
          <NavLink to="/Step1">Step1</NavLink>
          <NavLink to="/Step2">Step2</NavLink>
       </div>
    );
}
 
export default Navigation;
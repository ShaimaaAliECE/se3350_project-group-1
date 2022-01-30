import React from 'react';  //import required libraries
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {    //create constant that will navigate from page to page
    return (
       <div>
         <h1> Home Page</h1>
         <p> Click the start button to begin the merge sort algorithm tutorial </p>
          <NavLink to="/Step1">Start</NavLink>
          <br/>
          <NavLink to="/Level2">Level2</NavLink>
       </div>
    );
}
 
export default Navigation; //export constant
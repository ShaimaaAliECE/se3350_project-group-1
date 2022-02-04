import React from 'react';  //import required libraries
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {    //create constant that will navigate from page to page
    return (
       <div>
         <div>
         <h1 class='topRectangle'> &emsp;Levels<button class='quitButton'> <a href= 'http://localhost:3000' class="noDec"> </a> Quit </button> <button class='analyticsButton'>Analytics</button></h1>
         </div>
         
      <div>
         <p> &emsp;Click the level 1 button to begin the merge sort algorithm tutorial </p>
         &emsp; <NavLink to="/Step1" class="bttn">Level 1</NavLink>
          &emsp; &emsp; 
          <NavLink to="/Level2" class="bttn">Level 2</NavLink>
       </div>

       </div>
    );
}
 
export default Navigation; //export constant
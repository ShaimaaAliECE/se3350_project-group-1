import React from 'react';  //import required libraries
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {    //create constant that will navigate from page to page
    return (
       <div>
         <div>
         <h1 class='topRectangle'> &emsp; Home Page <button class='quitButton'>Quit</button></h1>
         
         </div>
         
      <div>
         <p> &emsp;Click the start button to begin the merge sort algorithm tutorial </p>
         &emsp; <NavLink to="/Step1" class="bttn">Start</NavLink>
          &emsp; &emsp; 
          <NavLink to="/Level2" class="bttn">Level2</NavLink>
       </div>
       </div>
    );
}
 
export default Navigation; //export constant
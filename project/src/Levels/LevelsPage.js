import React from 'react';  //import required libraries
 
import { NavLink } from 'react-router-dom';

const LevelsPage = () => {    //create constant that will navigate from page to page
    return (
       <div>
         <div>
         <h1 class='topRectangle'> &emsp;Levels<button class='quitButton'><a class="noDec" href= 'http://localhost:3000/'> Logout </a></button><button class='analyticsButton'><a class="noDec" href= 'http://localhost:3000/Analytics'> Analytics </a></button></h1>
         </div>
         
      <div>
         <p> &emsp;Click the level 1 button to begin the merge sort algorithm tutorial </p>
         &emsp; <NavLink to="/Step1" class="bttnz">Level 1</NavLink>
          &emsp; &emsp; 
          <NavLink to="/Level2" class="secondButton">Level 2</NavLink>
          <div class="wrap">
        <button class="button"> MergeSort </button>
        <br></br>
        <br></br>
        <br></br>
        <button class="gbutton"> QuickSort &#128274;</button>
        <br></br>
        <br></br>
        <br></br>
        <button class="gbutton">BubbleSort &#128274;</button>
        
        </div>
      
       </div>

       </div>
       
    );
}

export default LevelsPage; //export constant
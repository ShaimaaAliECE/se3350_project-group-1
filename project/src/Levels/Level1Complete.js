import React from 'react';
import { NavLink } from 'react-router-dom';
import Levels from './LevelsPage';

const RetryPage = () => {  //create main page 
    return (
        <div>
        <div>
        <h1 class='topRectangle'> &emsp;Tutorial Compleated!<button class='quitButton'> <NavLink to="/LevelsPage" class="noDec">Quit</NavLink> </button> <button class='analyticsButton'><NavLink to="/Analytics" class="noDec">Analytics</NavLink></button></h1>
         </div>
          <div class="thisText">
              
          &emsp; &emsp; <img id = "pic" src="http://www.clker.com/cliparts/K/N/J/9/5/E/star-md.png"  width="100" height="100" alt="blankStar"/> &emsp; &emsp; 
          <img src="http://www.clker.com/cliparts/K/N/J/9/5/E/star-md.png" width="100" height="100" alt="blankStar"/> &emsp; &emsp; 
          <img src="http://www.clker.com/cliparts/K/N/J/9/5/E/star-md.png" width="100" height="100" alt="blankStar"/>
                

          
<h3> &emsp; &emsp; &emsp; &emsp;You have unlocked Level 2!&emsp; &emsp; &emsp; &emsp;</h3>


       
</div>
        
&emsp;<NavLink to="/Tutorial" class='bttn'> Repeat Tutorial </NavLink>&emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
           <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink>
           
       </div>   
    );
}

export default RetryPage; //export the constant
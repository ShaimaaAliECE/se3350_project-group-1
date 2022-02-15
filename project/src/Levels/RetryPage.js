import React from 'react'; //import required libraries

import {NavLink} from 'react-router-dom';

const RetryPage = () => {  //create main page for step 1
    return (
        <div>
        <div>
         <h1 class='topRectangle'> &emsp;Level 1<button class='quitButton'> <a href= 'http://localhost:3000/LevelsPage' class="noDec"> Quit</a>  </button> <button class='analyticsButton'>Analytics</button></h1>
         </div>
          <h1 class="text">&emsp;Try Again</h1>
          <div class="thisText">


        
&emsp;<NavLink to="/LevelsPage" class='bttn'> Back </NavLink>&emsp; &emsp; &emsp; &emsp;&emsp; &emsp;
           <NavLink to="/Step2" class='bttn' > Next </NavLink> &emsp; &emsp; &emsp; &emsp;&emsp; &emsp;
           <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink>
           
       </div>   
       </div>
    );
}

export default RetryPage; //export the constant


import React from 'react';
import { NavLink } from 'react-router-dom';


const RetryPage = () => {  //create main page 
    return (
        <div>
        <div>
         <h1 class='topRectangle'> &emsp;Tutorial Completed!<button class='quitButton'> <a href= 'http://localhost:3000/LevelsPage' class="noDec"> Quit</a>  </button> <button class='analyticsButton'>Analytics</button></h1>
         </div>
          <div class="thisText">
              
          &emsp; &emsp; <img id = "pic" src="//pngset.com/images/review-star-yellow-star-no-background-symbol-star-symbol-cross-axe-transparent-png-1390703.png"  width="100" height="100" alt="blankStar"/> &emsp; &emsp; 
          <img src="//pngset.com/images/review-star-yellow-star-no-background-symbol-star-symbol-cross-axe-transparent-png-1390703.png" width="100" height="100" alt="blankStar"/> &emsp; &emsp; 
          <img src="//pngset.com/images/review-star-yellow-star-no-background-symbol-star-symbol-cross-axe-transparent-png-1390703.png" width="100" height="100" alt="blankStar"/>
                

          
<h3> &emsp; &emsp; &emsp; &emsp;You have unlocked Level 2!&emsp; &emsp; &emsp; &emsp;</h3>


       
</div>
        
&emsp;<NavLink to="/Tutorial" class='bttn'> Repeat Tutorial </NavLink>&emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
           <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink>
           
       </div>   
    );
}

export default RetryPage; //export the constant
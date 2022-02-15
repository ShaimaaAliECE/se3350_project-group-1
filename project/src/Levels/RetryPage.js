import React from 'react'; //import required libraries

import {NavLink} from 'react-router-dom';

const RetryPage = () => {  //create main page 
    return (
        <div>
        <div>
         <h1 class='topRectangle'> &emsp;Level Failed<button class='quitButton'> <a href= 'http://localhost:3000/LevelsPage' class="noDec"> Quit</a>  </button> <button class='analyticsButton'>Analytics</button></h1>
         </div>
          <div class="thisText">
              
          &emsp; &emsp; <img src="//www.clker.com/cliparts/y/8/W/E/z/N/outlined-star-hi.png"  width="100" height="100" alt="blankStar"/> &emsp; &emsp; <img src="//www.clker.com/cliparts/y/8/W/E/z/N/outlined-star-hi.png" width="100" height="100" alt="blankStar"/> &emsp; &emsp; <img src="//www.clker.com/cliparts/y/8/W/E/z/N/outlined-star-hi.png" width="100" height="100" alt="blankStar"/>
                

          
<h3> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;You made 3 mistakes</h3>
<p> Your Time:  &emsp; &emsp; &emsp; Best Time:   </p>

       
</div>
        
&emsp;<NavLink to="/Level2" class='bttn'> Try Again </NavLink>&emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
           <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink>
           
       </div>   
    );
}

export default RetryPage; //export the constant


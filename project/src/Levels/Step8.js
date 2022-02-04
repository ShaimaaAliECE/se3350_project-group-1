import React from 'react'; //import required libraries

import {NavLink} from 'react-router-dom';

const Step8 = () => {  //create main page for step 1
    return (
        <div>
        <div>
         <h1 class='topRectangle'> &emsp;Level 1<button class='quitButton'><a href= 'http://localhost:3000/LevelsPage' class="noDec"> Quit</a> </button> <button class='analyticsButton'>Analytics</button></h1>
         </div>
           <h1>&emsp;Step 8/8</h1>
          <div class="thisText">
1 &thinsp; 5 &thinsp; 6 &thinsp; 9 &thinsp; 4&emsp; &emsp; &emsp; &emsp;2 &thinsp; 3 &thinsp; 7 &thinsp; 8 &thinsp; 10 <br></br>
&ensp;  &emsp; &ensp;  &ensp; &#8600; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &#8601; <br></br>
&emsp; 1 &thinsp; 2 &thinsp; 3 &thinsp; 4 &thinsp; 5 &thinsp; 6 &thinsp; 7 &thinsp; 8 &thinsp; 9 &thinsp; 10  <br></br>

    </div>
    

<p> <i>&emsp;Step 8: Rejoin last two subsets into final set</i></p>
            &emsp;<NavLink to="/Step7" class="bttn" > Back </NavLink> &emsp;&emsp;
          
           <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink> 
       </div>  

    );
}

export default Step8; //export the constant


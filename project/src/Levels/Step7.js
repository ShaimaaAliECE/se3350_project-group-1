import React from 'react'; //import required libraries

import {NavLink} from 'react-router-dom';

const Step7 = () => {  //create main page for step 1
    return (
        <div>
        <div>
         <h1 class='topRectangle'> &emsp;Level 1<button class='quitButton'><a href= 'http://localhost:3000/LevelsPage' class="noDec"> Quit</a> </button> <button class='analyticsButton'>Analytics</button></h1>
         </div>
          <h1>&emsp;Step 7/8</h1>
          <div class="thisText">
&thinsp; 1  &thinsp;  5  &thinsp;  6  &thinsp; 9  &thinsp; &emsp; &emsp; 3 &thinsp; 4 &thinsp; 7 &thinsp; 8 &emsp;&emsp; 2 &thinsp; 10<br></br>
&ensp;  &emsp; ↓ &emsp; &emsp;  &emsp;  &emsp; &emsp;  &emsp; &#8600;&emsp; &emsp;&emsp;&ensp; &#8601; <br></br>
&thinsp;  1 &thinsp;  5  &thinsp; 6  &thinsp; 9 &emsp; &emsp; &emsp;&thinsp; 2 &thinsp; 3 &thinsp; 4 &thinsp; 7 &thinsp; 8 &thinsp; 10  <br></br>

    </div>

<p> <i>&emsp;Step 7: Rejoin last two subsets into final set</i></p>
&emsp;<NavLink to="/Step6" class="bttn" > Back </NavLink> &emsp;&emsp;
<NavLink to="/Step8" class="bttn"> Next </NavLink> &emsp; &emsp;
           <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink> 
</div>  
    );
}

export default Step7; //export the constant


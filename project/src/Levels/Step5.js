import React from "react";  //import required libraries

import {NavLink} from 'react-router-dom';

const Step5 = () => { //create main page for step 4

    return(
        <div>
        <div>
         <h1 class='topRectangle'> &emsp;Level 1<button class='quitButton'><a href= 'http://localhost:3000/LevelsPage' class="noDec"> Quit</a> </button>  <button class='analyticsButton'><a class="noDec" href= 'http://localhost:3000/Analytics'> Analytics </a></button></h1>
         </div>
            <h1 class="text">&emsp;Step 5/8</h1>
            <div class="thisText">
            &thinsp;1  &emsp; &thinsp; &thinsp; 5 &emsp; &thinsp; &thinsp;6 &emsp;  &thinsp;&thinsp; 9 &emsp; &thinsp; &thinsp;4   &thinsp;&emsp; &thinsp;8 &emsp;  &thinsp; &thinsp; 3  &emsp; &thinsp; &thinsp;7 &emsp;  &thinsp;&thinsp;2 &emsp; &thinsp; &thinsp;10<br></br>
            &thinsp; &thinsp; &#8600;  &thinsp;  &#8601;&thinsp;  &emsp; &emsp; &ensp; &#8600;&thinsp; &#8601; &emsp; &emsp; &ensp;&#8600; &thinsp;&#8601; &thinsp;  &emsp; &emsp; &#8600;  &thinsp;  &#8601; &thinsp;  &emsp;&emsp;&ensp;&#8600;  &thinsp;  &#8601; <br></br>
            &thinsp; &thinsp; 1  &thinsp; &thinsp;5  &emsp; &emsp;&emsp;6 &thinsp; &thinsp;9   &emsp; &emsp;&emsp;4  &thinsp; &thinsp;8  &emsp; &emsp;&ensp; 3   &thinsp;  7 &emsp; &emsp;&emsp;2&emsp;10<br></br>
    </div>

          
            <p> <i>&emsp;Step 5: Rejoin exisiting subsets into individual subsets in chronological order</i></p>
            &emsp;<NavLink to="/Step4" class="bttn" > Back </NavLink> &emsp; &emsp; &emsp; &emsp;&emsp; &emsp;
           <NavLink to="/Step6" class="bttn"> Next </NavLink>&emsp; &emsp; &emsp; &emsp;&emsp; &emsp;
           <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink>
        </div>      
  );
    
}

/*  &emsp; 1 &emsp; 5 <br></br>
            &ensp; &ensp;&ensp;&#8600;&#8601; <br></br>
            &nbsp; &ensp;&ensp;     1  5 <br></br>

            &emsp; 6 &emsp; 9 <br></br>
            &ensp; &ensp;&ensp;&#8600;&#8601; <br></br>
            &nbsp; &ensp;    6  9 <br></br>

            &emsp; 4 &emsp; 8 <br></br>
            &ensp; &ensp;&ensp;&#8600;&#8601; <br></br>
            &nbsp; &ensp; &ensp;   4  8 <br></br>

            &emsp; 3 &emsp; 7 <br></br>
            &ensp; &ensp;&ensp;&#8600;&#8601; <br></br>
            &nbsp; &ensp;    3  7 <br></br>
            
            &emsp; 2 &emsp; 10 <br></br>
            &ensp; &ensp;&ensp;&#8600;&#8601; <br></br>
            &nbsp; &ensp;  2  10 <br></br>
            */
export default Step5; //export the constant


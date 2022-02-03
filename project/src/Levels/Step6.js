import React from "react";  //import required libraries

import {NavLink} from 'react-router-dom';

const Step6 = () => { //create main page for step 6

    return(
        <div>
        <div>
         <h1 class='topRectangle'> &emsp;Level 1<button class='quitButton'>Quit</button> <button class='analyticsButton'>Analytics</button></h1>
         </div>
            <h1>&emsp;Step 6/8</h1>
            <div class="thisText">
            &thinsp; &thinsp; 1  &thinsp; &thinsp;5  &emsp; &emsp;&emsp;6 &thinsp; &thinsp;9   &emsp; &emsp;&emsp;4  &thinsp; &thinsp;8  &emsp; &emsp;&ensp; 3   &thinsp;  7 &emsp; &emsp;&emsp;2  &emsp;10<br></br>
            &thinsp; &thinsp;&thinsp; &thinsp; &#8600; &emsp;&ensp;&emsp;&emsp;&emsp;&#8601;&emsp;&thinsp;&thinsp;&thinsp;&emsp;&emsp;&emsp; &#8600;&emsp;&emsp;&emsp;&emsp; &#8601;  &ensp;&emsp;&emsp;&emsp;&emsp;&thinsp;&thinsp; ↓ <br></br>
            &thinsp; &thinsp; &thinsp; &thinsp; 1  &thinsp; &thinsp;5 &thinsp; 6 &thinsp; &thinsp;9   &emsp; &emsp; &emsp; &emsp;&emsp;3  &thinsp; &thinsp;4  &thinsp; &thinsp; 7 &thinsp; &thinsp;  8 &emsp; &emsp;&emsp;&thinsp; &thinsp;&ensp;2  &emsp;10<br></br>

           </div>
            <p> <i>&emsp;Step 6: Rejoin new subsets in chronological order into 4 element subsets where possible</i></p>
            &emsp;<NavLink to="/Step5" class="bttn" > Back </NavLink> &emsp;&emsp;
           <NavLink to="/Step7" class="bttn"> Next </NavLink> &emsp; &emsp;
           <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink>

        </div>      
  );
    /*
 &ensp;1 &nbsp; 5 &emsp; &ensp; 6 &nbsp; 9 <br></br>
            &emsp; &#8600; &emsp; &emsp; &#8601; <br></br>
            &emsp; &nbsp; 1  5  6  9 <br></br>

            &ensp;4 &nbsp; 8 &emsp; &ensp; 3 &nbsp; 7 <br></br>
            &emsp; &#8600; &emsp; &emsp; &#8601; <br></br>
            &emsp; &nbsp; 3  4  7  8 <br></br>

            &emsp; &ensp; 2 &nbsp;10 <br></br>
            &emsp; &ensp; &nbsp; &#8595; <br></br>
            &emsp; &ensp; 2 &nbsp;10<br></br>

            &emsp;1 &nbsp;5 &nbsp;6 &nbsp;9 <br></br>
            &emsp; &ensp; &nbsp; &#8595; <br></br>
            &emsp;  1   5   6   9 <br></br>

            &emsp; 3 &nbsp;4 &nbsp;7 &nbsp;8 &emsp; &ensp; 2 &nbsp;10<br></br>
            &emsp; &emsp; &ensp; &#8600; &emsp; &emsp; &emsp;&#8601;<br></br>
            &emsp; &emsp; &ensp; 2  3  4  7  8  10<br></br>
    */
}


export default Step6; //export the constant


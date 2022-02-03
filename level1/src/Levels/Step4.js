import React from "react";  //import required libraries

import {NavLink} from 'react-router-dom';

const Step4 = () => { //create main page for step 4

    return(
        <div>
            <h1>&emsp;Step 4/8</h1>
            <div class="thisText">
            &emsp;1 5 &emsp;6 &emsp; &emsp;&emsp;  &thinsp;9  &emsp;4  &emsp; &emsp;&emsp;&emsp;8 3  &emsp; 7 &emsp; &emsp;&emsp;&emsp;2  &emsp;10<br></br>
            &thinsp; &thinsp; &#8601;  &thinsp;  &thinsp; &thinsp; &#8600;  &emsp; &emsp; &ensp; &#8601; &thinsp; &thinsp; &#8600;  &ensp;&emsp;&emsp;&emsp;&emsp; &#8601; &emsp;  &#8600; &ensp;&emsp;&emsp;&emsp; &#8601;  &thinsp;&emsp;  &#8600; <br></br>
            1  &thinsp; &thinsp;5 &emsp;6 &emsp; &emsp;&emsp; 9  &thinsp; &emsp;4  &emsp; &emsp;&emsp;&emsp;8  &thinsp; &thinsp;3   &thinsp;&thinsp; &thinsp;7 &emsp; &emsp;&thinsp;&thinsp;&thinsp;&thinsp;2  &emsp;&emsp;&thinsp;&thinsp;10<br></br>
            </div>
            <p> <i>&emsp;Step 4: Split exisiting subsets into individual subsets</i></p>

           &emsp;<NavLink to="/Step3" class="bttn" > Back </NavLink> &emsp;&emsp;
           <NavLink to="/Step5" class="bttn"> Next </NavLink>
        </div>      
  );
    
}
/*
  &emsp; 1 &emsp; 5 <br></br>
            &ensp; &#8601; &emsp; &nbsp; &#8600; <br></br>
            &nbsp; 1 &emsp; &emsp; &nbsp;  5 <br></br>

            &emsp; 6 <br></br>
            &emsp; &#8595; <br></br>
            &emsp; 6 <br></br>

            &emsp; 9 <br></br>
            &emsp; &#8595; <br></br>
            &emsp; 9 <br></br>

            &emsp; 4 <br></br>
            &emsp; &#8595; <br></br>
            &emsp; 4 <br></br>

            &emsp; 8 &emsp; 3 <br></br>
            &ensp; &#8601; &emsp; &nbsp; &#8600; <br></br>
            &nbsp; 8 &emsp; &emsp; &nbsp;3 <br></br>

            &emsp; 7 <br></br>
            &emsp; &#8595; <br></br>
            &emsp; 7 <br></br>

            &emsp; 2 <br></br>
            &emsp; &#8595; <br></br>
            &emsp; 2 <br></br>

            &emsp; 10 <br></br>
            &emsp; &#8595; <br></br>
            &emsp; 10 <br></br>
*/

export default Step4; //export the constant


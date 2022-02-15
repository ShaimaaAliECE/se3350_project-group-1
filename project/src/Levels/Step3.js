import React from "react";  //import required libraries

import {NavLink} from 'react-router-dom';

const Step3 = () => { //create main page for step 3

    return(
        <div>
        <div>
         <h1 class='topRectangle'> &emsp;Level 1<button class='quitButton'><a href= 'http://localhost:3000/LevelsPage' class="noDec"> Quit</a> </button>  <button class='analyticsButton'><a class="noDec" href= 'http://localhost:3000/Analytics'> Analytics </a></button></h1>
         </div>
            <h1 class="text">&emsp;Step 3/8</h1>
            <div class="thisText">
           
            &emsp;    1 &thinsp; 5 &thinsp; 6 &ensp; &emsp; &emsp;&emsp;&thinsp;&thinsp; 9 &thinsp; 4 &ensp; &emsp; &emsp;&emsp;&emsp;8 &thinsp; 3 &thinsp; 7 &emsp; &emsp;&emsp;&ensp;&ensp;2 &thinsp;10 <br></br>
            &ensp;&thinsp;&thinsp; &#8601; &emsp; &#8600; &ensp;&emsp; &emsp; &ensp; &thinsp; &ensp;&#8601; &ensp; &#8600;  &ensp;&thinsp;&emsp;&emsp;&emsp; &#8601; &emsp;  &#8600; &ensp;&emsp;&emsp;&emsp;&emsp; &#8601; &ensp;  &#8600; <br></br>
            1 &thinsp; 5 &emsp; &ensp;6 &emsp;&ensp; &emsp;&emsp; &ensp;9  &emsp;4  &emsp; &emsp;&ensp;&ensp;8 &thinsp;3  &thinsp;&emsp; 7 &emsp; &emsp;&emsp;&emsp;2  &emsp;&ensp;10<br></br>
        
            </div>
                
            <p> <i>&emsp;Step 3: Split 4 subsets into two more sublists each </i></p>
            
            &emsp;<NavLink to="/Step1" class="bttn" > Back </NavLink> &emsp; &emsp; &emsp; &emsp;&emsp; &emsp;
           <NavLink to="/Step4" class="bttn"> Next </NavLink>&emsp; &emsp; &emsp; &emsp;&emsp; &emsp;
           <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink>
        </div>      
  );
    
  /*
            &emsp;    1  5  6 <br></br>
            &ensp; &#8601; &emsp; &emsp; &#8600; <br></br>
            1  5    &emsp; &emsp;   6 <br></br>
                   
            
            &emsp;  9  4 <br></br>
            &ensp; &#8601; &#8600; <br></br>
            9  &emsp;              4 <br></br>

            &emsp;    8  3  7 <br></br>
            &ensp; &#8601; &emsp; &emsp; &#8600; <br></br>
            8  3   &emsp; &emsp;   7 <br></br>
                   

            &emsp; 2  10<br></br>
            &ensp; &#8601; &#8600; <br></br>
            2  &emsp;              10 <br></br>
            */
}















export default Step3; //export the constant
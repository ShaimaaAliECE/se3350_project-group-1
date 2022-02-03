import React from "react";  //import required libraries

import {NavLink} from 'react-router-dom';

const Step3 = () => { //create main page for step 3

    return(
        <div>
            <h1>&emsp;Step 3/8</h1>
            <div class="thisText">
           
            &emsp;    1  5  6  &emsp; &emsp;&emsp;&emsp;&emsp;9  4  &emsp; &emsp;&emsp;&emsp;&emsp;8 3 7 &emsp; &emsp;&emsp;&emsp;&emsp;2 &emsp;10 <br></br>
            &ensp; &#8601; &emsp;  &#8600; &emsp; &emsp; &emsp; &ensp; &#8601; &#8600;  &ensp;&emsp;&emsp;&emsp;&emsp; &#8601; &emsp;  &#8600; &ensp;&emsp;&emsp;&emsp;&emsp; &#8601; &emsp;  &#8600; <br></br>
            1 5 &emsp;6 &emsp; &emsp;&emsp;&emsp; 9  &emsp;4  &emsp; &emsp;&emsp;&emsp;8 3  &emsp; 7 &emsp; &emsp;&emsp;&emsp;2  &emsp;&emsp;10<br></br>
        
            </div>
                
            <p> <i>&emsp;Step 3: Split 4 subsets into two more sublists each </i></p>
            
            &emsp;<NavLink to="/Step1" class="bttn" > Back </NavLink> &emsp;&emsp;
           <NavLink to="/Step4" class="bttn"> Next </NavLink>
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
import React from "react";  //import required libraries

import {NavLink} from 'react-router-dom';

const Step3 = () => { //create main page for step 3

    return(
        <div>
            <h1>Step 3/7</h1>

           
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
        
                
            <p> Step 3: Split 4 subsets into two more sublists each </p>

            <NavLink to="/Step2" > Back <br></br></NavLink>
           <NavLink to="/Step4" > Next </NavLink>
        </div>      
  );
    
}















export default Step3; //export the constant
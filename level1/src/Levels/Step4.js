import React from "react";  //import required libraries

import {NavLink} from 'react-router-dom';

const Step4 = () => { //create main page for step 4

    return(
        <div>
            <h1>Step 4/7</h1>

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
            
    
            <p> Step 4: Split exisiting subsets into individual subsets</p>

            <NavLink to="/Step3" > Back <br></br></NavLink> 
           <NavLink to="/Step5" > Next </NavLink>
        </div>      
  );
    
}


export default Step4; //export the constant


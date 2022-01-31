import React from "react";  //import required libraries

import {NavLink} from 'react-router-dom';

const Step6 = () => { //create main page for step 6

    return(
        <div>
            <h1>Step 6/7</h1>

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

           
    
            <p> Step 6: Rejoin new subsets into 4 element subsets where possible</p>

            <NavLink to="/Step5" > Back <br></br></NavLink>
           <NavLink to="/Step7" > Next </NavLink>
        </div>      
  );
    
}


export default Step6; //export the constant


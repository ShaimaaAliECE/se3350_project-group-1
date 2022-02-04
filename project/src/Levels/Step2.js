import React from "react";  //import required libraries

import {NavLink} from 'react-router-dom';

const Step2 = () => { //create main page for step 2

    return(
        <div>
        <div>
         <h1 class='topRectangle'> &emsp;Level 1<button class='quitButton'><a href= 'http://localhost:3000/LevelsPage' class="noDec"> Quit</a> </button> <button class='analyticsButton'>Analytics</button></h1>
         </div>
         <h1>&emsp;Step 2/8</h1>
            <div class="thisText">
             &emsp; 1  5  6  9  4 &emsp; &emsp;  &emsp;  &emsp;&emsp; &emsp;8  3  7  2  10 <br></br>
            &ensp; &#8601; &emsp; &emsp; &#8600;&emsp; &emsp; &emsp;&emsp; &emsp; &ensp; &#8601; &emsp; &emsp; &ensp; &#8600; <br></br>
            1  5  6  &emsp; &emsp; 9  4 &emsp;  &emsp;&emsp; &emsp;  8  3  7  &emsp; 2  10   
            </div>    
            <p> <i>&emsp;Step 2: Split new subsets into two more sublists</i></p>

            &emsp;<NavLink to="/Step1" class="bttn" > Back </NavLink> &emsp;&emsp;
           <NavLink to="/Step3" class="bttn"> Next </NavLink> &emsp; &emsp;
           <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink>
        </div>      
  );
    
}


/*
 &emsp; 1  5  6  9  4 <br></br>
            &ensp; &#8601; &emsp; &emsp; &#8600; <br></br>
            1  5  6  &emsp; &emsp; 9  4 <br></br>
                   
            
            &emsp; 8  3  7  2  10 <br></br>
            &ensp; &#8601; &emsp; &emsp; &#8600; <br></br>
            8  3  7  &emsp; 2  10       

 */












export default Step2; //export the constant

/*

<p>  8  3  7  2  10  </p>

<div style="width: 100%;">
            <div style="width: 10%; height: 100px; float: left;"> 
                <Link to="/Step1" > Back </Link> 
            </div>
            <div style="width: 5%; height: 100px; float: right;"> 
                <Link to="/Step3" > Next </Link>
            </div>
            <div style="margin-left: 40%; height: 100px;"> 
                <h1>Step 2/7</h1>
            </div>
        </div>



         <div>
          <h1>Step 2/7</h1>
            <body>
            <div style= "width: 100%;">
                <div style= "width: 50%; height: 100px; float: left;">
                    <p>&ensp; 1  5  6  9  4  </p>  
                    <p> &ensp; &#8601; &emsp; &emsp; &#8600; </p>    
                    <p>  1  5  6 &emsp; &emsp; 9  4</p>   
                </div>
                <div style= "margin-left: 50%; height: 100px;">
                    <p>&ensp; 8  3  7  2  10  </p>  
                    <p> &ensp; &#8601; &emsp; &emsp; &#8600; </p>    
                    <p>  8  3  7 &emsp; &emsp; 2  10</p>   
                </div>
            </div>
            </body>
           
           <p>Step 2: Split new subsets into two more sublists</p>
           <NavLink to="/Step1" > Back </NavLink>
       </div>   
    );

*/
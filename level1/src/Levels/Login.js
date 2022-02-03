import React from 'react';  //import required libraries
 
import { NavLink } from 'react-router-dom';
const Login = () => {    //create constant that will navigate from page to page
    return (
       <div>
         <div>
         <h1 class='topRectangle'> &emsp;Login<button class='quitButton'> <a href= 'http://localhost:3000'> </a> Quit </button> <button class='analyticsButton'>Analytics</button></h1>
         </div>
      <div>
      <text class = 'email'> Email Address: </text>
         &emsp; <input class="inputType1"></input>
          &emsp; &emsp; 
          <text class = 'password'> Password: </text>
          <input class="inputType2"></input>
          &emsp; &emsp; 
          <NavLink to="/LevelsPage" class="loginButton">Login</NavLink>
       </div>

       </div>
    );
}
 
export default Login; //export constant
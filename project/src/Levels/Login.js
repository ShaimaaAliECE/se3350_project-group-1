import React from 'react';  //import required libraries
 
import { NavLink } from 'react-router-dom';
const Login = () => {    //create constant that will navigate from page to page
   let stats=[
      {level:'1',
      attempts:0,
      timesComplete:0,
      bestTime:'N/A',
      totalTime:'00:00'},
      {level:'2',
      attempts:0,
      timesComplete:0,
      bestTime:'00:00',
      totalTime:'00:00'},
      {level:'3',
      attempts:0,
      timesComplete:0,
      bestTime:'00:00',
      totalTime:'00:00'},
      {level:'4',
      attempts:0,
      timesComplete:0,
      bestTime:'00:00',
      totalTime:'00:00'},
      {level:'5',
      attempts:0,
      timesComplete:0,
      bestTime:'00:00',
      totalTime:'00:00'}
    ];
    
    //writes the JSON object to the users local storage
    localStorage.setItem('Analytics', JSON.stringify(stats));
    return (
       <div>
         <div>
         <h1 class='topRectangle'> &emsp;Login<button class='quitButton'> <a href= 'http://localhost:3000'> </a> Quit </button> <button class='analyticsButton'> <a href= 'http://localhost:3000/Analytics' class="noDec"></a>Analytics</button></h1>
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
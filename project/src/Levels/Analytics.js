import React, { useState } from 'react';  //import required libraries
 
import { NavLink } from 'react-router-dom';

//reads form the local storage as a string and parses it to a json object


const Analytics = () => {    //create constant that will navigate from page to page
    let statsString=localStorage.getItem('Analytics');
    let stats=JSON.parse(statsString);
    const [playerData,setPlayerData]=useState(stats);
    
    return (
       <div>
         
            
            <div class="topRectangle">
                <div class="usernameText"> <b>User name</b> <button class='quitButton'><NavLink to="/" class="noDec">Quit</NavLink></button></div>
                
                
            </div>

            <div>
                <table class="minitable">
                    <th class="none"><button class="options">MergeSort</button></th>
                    <th class="none"><button class="options">QuickSort</button></th>
                    <th class="none"><button class="options">BubbleSort</button></th>
                </table>
            </div>

            <div>
                <table class="mainTable">
                    <tr >
                        <th>Levels</th>
                        <th>Attempts</th>
                        <th>Times Complete</th>
                        <th>Best Time</th>
                        <th>Recent Time</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>{""+playerData[0].attempts}</th>
                        <th>{"N/A"}</th>
                        <th>{""+playerData[0].bestTime}</th>
                        <th>{""+playerData[0].totalTime}</th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th>{""+playerData[1].attempts}</th>
                        <th>{""+playerData[1].timesComplete}</th>
                        <th>{""+playerData[1].bestTime}</th>
                        <th>{""+playerData[1].totalTime}</th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th>{""+playerData[2].attempts}</th>
                        <th>{""+playerData[2].timesComplete}</th>
                        <th>{""+playerData[2].bestTime}</th>
                        <th>{""+playerData[2].totalTime}</th>
                    </tr>
                    <tr>
                        <th>4</th>
                        <th>{""+playerData[3].attempts}</th>
                        <th>{""+playerData[3].timesComplete}</th>
                        <th>{""+playerData[3].bestTime}</th>
                        <th>{""+playerData[3].totalTime}</th>
                    </tr>
                    <tr>
                        <th>5</th>
                        <th>{""+playerData[4].attempts}</th>
                        <th>{""+playerData[4].timesComplete}</th>
                        <th>{""+playerData[4].bestTime}</th>
                        <th>{""+playerData[4].totalTime}</th>
                    </tr>
                </table>
            </div>

            <div>
                <button class="levels"><NavLink to="/LevelsPage" class="noDec">Levels</NavLink></button>
            </div> 
        </div>
    );
}
 
export default Analytics; //export constant

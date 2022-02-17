import React from 'react';  //import required libraries
 
import { NavLink } from 'react-router-dom';

const Analytics = (props) => {    //create constant that will navigate from page to page



    return (
       <div>
         
            
            <div class="topRectangle">
                <div class="usernameText"> <b>User name</b></div>
                <button class="quit">Quit</button>
                
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
                        <th>Total Time</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>{""+props.stats[0].attempts}</th>
                        <th>{""+props.stats[0].timesComplete}</th>
                        <th>{""+props.stats[0].bestTime}</th>
                        <th>{""+props.stats[0].totalTime}</th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th>{""+props.stats[1].attempts}</th>
                        <th>{""+props.stats[1].timesComplete}</th>
                        <th>{""+props.stats[1].bestTime}</th>
                        <th>{""+props.stats[1].totalTime}</th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th>{""+props.stats[2].attempts}</th>
                        <th>{""+props.stats[2].timesComplete}</th>
                        <th>{""+props.stats[2].bestTime}</th>
                        <th>{""+props.stats[2].totalTime}</th>
                    </tr>
                    <tr>
                        <th>4</th>
                        <th>{""+props.stats[3].attempts}</th>
                        <th>{""+props.stats[3].timesComplete}</th>
                        <th>{""+props.stats[3].bestTime}</th>
                        <th>{""+props.stats[3].totalTime}</th>
                    </tr>
                    <tr>
                        <th>5</th>
                        <th>{""+props.stats[4].attempts}</th>
                        <th>{""+props.stats[4].timesComplete}</th>
                        <th>{""+props.stats[4].bestTime}</th>
                        <th>{""+props.stats[4].totalTime}</th>
                    </tr>
                </table>
            </div>

            <div>
                <button class="levels">Levels</button>
            </div> 
        </div>
    );
}
 
export default Analytics; //export constant
import React from 'react';  //import required libraries
 
import { NavLink } from 'react-router-dom';

const Analytics = (props) => {    //create constant that will navigate from page to page

//     for (var i = 0; i < data.length; i++)
// {
//     var obj = data[i];
//     console.log(`level: ${obj.level}, ${obj.totalTime}`);
// }

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
                        <th>{props.json}</th>
                        <th>1</th>
                        <th>N/A</th>
                        <th>N/A</th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th>2</th>
                        <th>2</th>
                        <th>1:34</th>
                        <th>3:31</th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>4</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>5</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
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
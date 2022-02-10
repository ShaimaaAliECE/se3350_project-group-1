import React, { useState } from 'react';
import ButtonRow from "../components/ButtonRow.js";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

/////////////////////////////// React Component that is for level 2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 
function CustomSelection() {

const [dataUpper,setDataUpper]=useState(null)
const [dataLower,setDataLower]=useState(null)
const [dataSize,setDataSize]=useState(null)
const [numbers,setArray]=useState(false)

function getUpper(val){
  setDataUpper(val.target.value)
}

function getLower(val){
    setDataLower(val.target.value)
  }
  function getSize(val){
    setDataSize(val.target.value)
  }
function createInfoArray(){
    
      
      
     //do w/ cookies
   let arr = [{dataUpper},{dataLower},{dataSize}]
 cookies.set('info', arr, { path: '/' });

   // a.setArr(arr);
   console.log("test")
}
  //creating an array of button rows
  
  return (<div><div style={{ alignContent: 'centre' }}>
  <div>
    <h1 class='topRectangle'> &emsp;Level 2<button class='quitButton'><a class="noDec" href='http://localhost:3000/LevelsPage'> Quit </a> </button> <button class='analyticsButton'>Analytics</button></h1>
  </div>

  <p >Merge Sort is a divide and conquer algorithm, meaning it splits a larger problem into multiple smaller problems</p>

  Upper Bounds<input type="range" id="points" name="points" min="1" max="100"onChange ={getUpper}></input>{dataUpper}<br></br>
  Lower Bounds<input type="range" id="points" name="points" min="1" max="100"onChange ={getLower}></input>{dataLower}<br></br>
  List Size<input type="range" id="points" name="points" min="2" max="50"onChange ={getSize}></input>{dataSize}<br></br>
  <button type = "submit"onClick={createInfoArray()}>Click me</button>
  </div></div>)
}
export default CustomSelection;

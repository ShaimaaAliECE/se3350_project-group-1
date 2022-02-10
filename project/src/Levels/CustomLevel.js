import React, { useState } from 'react';
import ButtonRow from "../components/ButtonRow.js";
//const info = require("./CustomSelection");
import Cookies from 'universal-cookie';
const cookies = new Cookies();



let instructionArray = [
  "Divide the array down the middle into two parts",
  "Repeat this division until in array is completely divided",
  "Repeat this division until in array is completely divided",
  "Repeat this division until in array is completely divided",
  "Now that the array is in individual units merge the units together",
  "Merge the two closest subarrays so they are in ascending order",
  "Repeat this step for all subarrays until the array is rejoined",
  "Repeat this step for all subarrays until the array is rejoined",
  "Now the elements are sorted in ascending order",

];
function getButtonPlacement(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    res.push([])
    for (let j = 0; j < arr[i].length - 1; j++) {
      count += arr[i][j].length
      res[i].push(count)
    }
  }
  return res
}

function makeLengthEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 != 0) {
      arr[i].push(-1)
    }
  }
  return arr
}
function splitSubArray(arr) {
  let splitArr = []
  for (let i = 0; i < arr.length; i++) {
    let firstHalf = arr[i].splice(0, (arr[i].length / 2))
    let secondHalf = arr[i]
    splitArr.push(firstHalf)
    splitArr.push(secondHalf)
  }
  return (splitArr)
}
function createPairs(arr) {
  let unmergedPairs = []
  for (let i = 0; i < arr.length / 2; i++) { unmergedPairs.push([]) }
  for (let i = 0; i < arr.length; i++) { unmergedPairs[i >> 1].push(arr[i]) }
  return (unmergedPairs)
}
function merge(left, right) {

  let arr = []
  while (left.length && right.length) {
    (left[0] < right[0]) ? arr.push(left.shift()) : arr.push(right.shift())
  }
  return [...arr, ...left, ...right]
}
function removePlaceHolders(arr) {
  let steps = []
  let res = []
  for (let i = 0; i < arr.length; i++) {
    steps.push(arr[i].filter(function (item) { return item !== -1 }))
  }

  for (let i = 0; i < steps.length; i++) {
    if (steps[i] != "") {
      res.push(steps[i])
    }
  }
  return res
}

function addSteps(steps, arr) {
  for (let i = 0; i < arr.length; i++) {
    steps.push([...arr[i]])
  }
  return steps
}
function formatRows(arrayLength, steps) {
  let res = []
  let count = 0
  let rowNum = 0
  res.push([])
  //getting the steps formatted into a 3d array of rows
  for (let i = 0; i < steps.length; i++) {
    res[rowNum].push(steps[i])
    count += steps[i].length
    if (count == arrayLength) {
      res.push([])
      count = 0
      rowNum += 1
    }
  }
  res.pop()
  return (res)
}
function getSteps(arr) {
  let arrayLength = arr.length
  let steps = []
  let numberOfCycles = Math.ceil(Math.log2(arr.length))
  arr = [arr]
  steps = addSteps(steps, arr)
  for (let i = 0; i < numberOfCycles; i++) {
    arr = makeLengthEven(arr)
    arr = splitSubArray(arr)
    steps = addSteps(steps, arr)
  }

  for (let i = 0; i < numberOfCycles; i++) {
    arr = createPairs(arr)
    let tmp = []
    for (let j = 0; j < arr.length; j++) {

      tmp.push(merge(arr[j][0], arr[j][1]))
    }
    arr = tmp
    steps = addSteps(steps, arr)
  }
  steps = removePlaceHolders(steps)
  steps = formatRows(arrayLength, steps)
  return steps

}

let infoArr =(cookies.get('info'))
let upperBounds = parseInt(infoArr[0].dataUpper)
let lowerBounds= parseInt(infoArr[1].dataLower)
let arraySize = parseInt(infoArr[2].dataSize)
let randomNumberArr = []
for (let i = 0; i < arraySize; i++) {
  randomNumberArr.push(Math.floor(Math.random() *(upperBounds-lowerBounds)) + lowerBounds)
}
const randomNumberArray = [...randomNumberArr]
let sortedArray = getSteps(randomNumberArray);
console.log(sortedArray);

//2D array that has the values that the buttons should receive
let correctArray = [];

for (const row of sortedArray) {
  let tempArr = [];
  for (const array of row) {
    for (const element of array) {
      tempArr.push(element);
    }
  }
  correctArray.push(tempArr);
}

//2D array that contains the order in which the buttons have to be pressed to be correct
let correctOrder = []

for (let i = 1; i < correctArray.length; i++) {
  let tempArr = [];
  for (let j = 0; j < correctArray[i].length; j++) {
    let target = correctArray[i][j];
    for (let h = 0; h < correctArray[i].length; h++) {
      if (target === correctArray[i - 1][h]) {
        tempArr.push(h);
        correctArray[i - 1][h] = null;
        break;
      }
    }
  }
  correctOrder.push(tempArr);
}
let buttonPlacement = getButtonPlacement(sortedArray)//button array


//2D array that maps to the button values
let buttonStates = [];
buttonStates.push(sortedArray[0][0]);
let nullArray = [];
for (let j = 0; j < sortedArray[0][0].length; j++) {
  nullArray.push(null);
}
for (let i = 1; i < sortedArray.length; i++) {
  buttonStates.push(nullArray);

}


/////////////////////////////// React Component that is for level 2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 
function CustomLevel() {
  console.log(cookies.get('info')); // Pacman
  // This is now a 2d array that handles the states of all the buttons;
  const [btnStates, updateBtns] = useState(buttonStates);
  const [clicked, updateClick] = useState(0);
  const [instructionsNum, updateInstructions] = useState(0);
  //called when a button is clicked and updates the state of the buttons so that a button
  //in the next row gets the value of the button clicked
  function rowClick(val, index, row) {
    let copy = [...btnStates];
    let copyRow = [...copy[row]]
    copyRow[index] = val;
    copy[row] = copyRow;
    updateBtns(copy);

    //updates how many of the buttons have been clicked so it knows when to change the instructions
    updateClick(clicked + 1);

    //check to see if instructions should change
    if ((clicked + 1) % 10 === 0 && clicked > 1) {
      updateInstructions(instructionsNum + 1);
    }

  }
  /*
  arrayLength = arr.length
  rows = 2*Math.ceil(Math.log2(arrayLength))+2
  for(let i = 0; i <len;i++){
    //maybe include the first and last row outside this loop
     <ButtonRow numbers={btnStates[i]} rowClick={rowClick} row={i+1} length={arrayLength} correctRow={correctOrder[1]} enabled={(clicked >=i*10) ? true : false} spaces={buttonPlacement[1]} ></ButtonRow>
  }
  */

  let arrayLength = correctOrder[0].length
  let rows = 2 * Math.ceil(Math.log2(arrayLength))
  const screen = [];

  
  for (let i = 0; i < rows; i++) {
    screen.push(<ButtonRow numbers={btnStates[i]} rowClick={rowClick} row={i + 1} length={arrayLength} correctRow={correctOrder[i]} enabled={(clicked >= i * arrayLength) ? true : false} spaces={buttonPlacement[i]} ></ButtonRow>)
  }
  screen.push(<ButtonRow numbers={btnStates[rows]} rowClick={rowClick} row={rows + 1} length={arrayLength} correctRow={correctOrder[rows - 1]} enabled={(false) ? true : false} spaces={buttonPlacement[rows]} ></ButtonRow>)
  return (
    <div style={{ alignContent: 'centre' }}>
  
    <div>
      <h1 class='topRectangle'> &emsp;Custom Level<button class='quitButton'><a class="noDec" href='http://localhost:3000/LevelsPage'> Quit </a> </button> <button class='analyticsButton'>Analytics</button></h1>
    </div>

    <p >Merge Sort is a divide and conquer algorithm, meaning it splits a larger problem into multiple smaller problems</p>
    <h3 class="text">{instructionArray[instructionsNum]}</h3>{screen}</div>
  );
  
  /*
  return (
    <div style={{ alignContent: 'centre' }}>
      <div>
        <h1 class='topRectangle'> &emsp;Level 2<button class='quitButton'><a class="noDec" href='http://localhost:3000/LevelsPage'> Quit </a> </button> <button class='analyticsButton'>Analytics</button></h1>
      </div>

      <p >Merge Sort is a divide and conquer algorithm, meaning it splits a larger problem into multiple smaller problems</p>
      <h3 class="text">{instructionArray[instructionsNum]}</h3>

      <ButtonRow numbers={btnStates[0]} rowClick={rowClick} row={1} length={10} correctRow={correctOrder[0]} enabled={true} spaces={buttonPlacement[0]}></ButtonRow>
      <ButtonRow numbers={btnStates[1]} rowClick={rowClick} row={2} length={10} correctRow={correctOrder[1]} enabled={(clicked > 9) ? true : false} spaces={buttonPlacement[1]} ></ButtonRow>
      <ButtonRow numbers={btnStates[2]} rowClick={rowClick} row={3} length={10} correctRow={correctOrder[2]} enabled={(clicked > 19) ? true : false} spaces={buttonPlacement[2]}></ButtonRow>
      <ButtonRow numbers={btnStates[3]} rowClick={rowClick} row={4} length={10} correctRow={correctOrder[3]} enabled={(clicked > 29) ? true : false} spaces={buttonPlacement[3]}></ButtonRow>
      <ButtonRow numbers={btnStates[4]} rowClick={rowClick} row={5} length={10} correctRow={correctOrder[4]} enabled={(clicked > 39) ? true : false} spaces={buttonPlacement[4]}></ButtonRow>
      <ButtonRow numbers={btnStates[5]} rowClick={rowClick} row={6} length={10} correctRow={correctOrder[5]} enabled={(clicked > 49) ? true : false} spaces={buttonPlacement[5]}></ButtonRow>
      <ButtonRow numbers={btnStates[6]} rowClick={rowClick} row={7} length={10} correctRow={correctOrder[6]} enabled={(clicked > 59) ? true : false} spaces={buttonPlacement[6]}></ButtonRow>
      <ButtonRow numbers={btnStates[7]} rowClick={rowClick} row={8} length={10} correctRow={correctOrder[7]} enabled={(clicked > 69) ? true : false} spaces={buttonPlacement[7]}></ButtonRow>
      <ButtonRow numbers={btnStates[8]} rowClick={rowClick} row={9} length={10} correctRow={correctOrder[0]} enabled={(false) ? true : false} spaces={buttonPlacement[8]}></ButtonRow>
    </div>
  );
  */
}

export default CustomLevel;

import ButtonRow from "../components/ButtonRow.js";
import { arr } from "./CustomSelection";
import React, { useState, useEffect } from "react";

let clicker =0;
let level = 6;
function CustomLevel(props) {

  //returns the proper spaces for the button array
  function getButtonPlacement(arr) {
    let res = []
    //counts the items for each row in the array, not including the last value
    for (let i = 0; i < arr.length; i++) {
      let countArray = []
      let count = 0;

      for (let j = 0; j < arr[i].length - 1; j++) {
        count += arr[i][j].length


        countArray.push(count)
      }
      res.push(countArray);
    }
    console.log(res);
    return res
  }
  //adding -1 as a place holder to make the length even for proper division into subarrays
  function makeLengthEven(arr) {
    for (let i = 0; i < arr.length; i++) {
      //if any subarray is odd make it even
      if (arr[i].length % 2 != 0) {
        arr[i].push(-1)
      }
    }
    return arr
  }
  //splits all sub arrays in half
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
  //create pairs of adjancent subarrays to be merged
  function createPairs(arr) {
    let unmergedPairs = []
    //initialize array
    for (let i = 0; i < arr.length / 2; i++) { unmergedPairs.push([]) }
    //push 2 subarrays into 1 array
    for (let i = 0; i < arr.length; i++) { unmergedPairs[i >> 1].push(arr[i]) }
    return (unmergedPairs)
  }
  //merged the 2 pairs into 1 sorted array
  function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
      (left[0] < right[0]) ? arr.push(left.shift()) : arr.push(right.shift())
    }
    return [...arr, ...left, ...right]
  }
  //removing the place holders
  function removePlaceHolders(arr) {
    let steps = []
    let res = []
    //removing the -1s
    for (let i = 0; i < arr.length; i++) {
      steps.push(arr[i].filter(function (item) { return item !== -1 }))
    }
    //removing the empty arrays
    for (let i = 0; i < steps.length; i++) {
      if (steps[i] != "") {
        res.push(steps[i])
      }
    }
    return res
  }
  //adding the step to the steps array
  function addSteps(steps, arr) {
    for (let i = 0; i < arr.length; i++) {
      steps.push([...arr[i]])
    }
    return steps
  }
  //formatting the steps into rows
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
  //getting the steps for an array
  function getSteps(arr) {
    let arrayLength = arr.length
    let steps = []
    //number for cycles for dividing/merging
    let numberOfCycles = Math.ceil(Math.log2(arr.length))
    arr = [arr]
    steps = addSteps(steps, arr)
    //dividing
    for (let i = 0; i < numberOfCycles; i++) {
      arr = makeLengthEven(arr)
      arr = splitSubArray(arr)
      steps = addSteps(steps, arr)
    }
    //merging
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
  //setting the default values that shouldnt have to be used
  let upperBounds = 100;
  let lowerBounds = 1;
  let arraySize = 10;
  //parsing the props
  upperBounds = parseInt(props.getUpper)
  lowerBounds = parseInt(props.getLower)
  arraySize = parseInt(props.getRange)

  //creating the custom array
  let randomNumberArr = []
  for (let i = 0; i < arraySize; i++) {
    randomNumberArr.push(Math.floor(Math.random() * (upperBounds - lowerBounds)) + lowerBounds)
  }
  const randomNumberArray = [...randomNumberArr]
  let sortedArray = getSteps(randomNumberArray);
  console.log(sortedArray);

  //2D array that has the values that the buttons should receive
  let correctArray = [];
  //creating a correct array
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
  //formatting correct order for buttons to be printed
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
  //array for the states of each button
  for (let i = 1; i < sortedArray.length; i++) {
    buttonStates.push(nullArray);

  }

  //function that uses the array of spaces and the number of clicks to determine if
  //the array is  suposed to be split.
  function checkForSplit(splitArray, clicks, rowLength) {
    console.log(splitArray);
    let row = Math.floor(clicks / rowLength) + 1;
    let split = false;

    if (row > 0 && splitArray[row] != undefined) {
      for (let i = 0; i < splitArray[row].length; i++) {
        if (clicks % rowLength == splitArray[row][i]) {
          split = true;
          break;
        }
      }
    }
    //returns whether the split button should be pressed or not
    if (split) {
      return true
    } else {
      return false
    }
  }
  const [constructor, setConstructor] = useState(false);

  // This is now a 2d array that handles the states of all the buttons;
  const [btnStates, updateBtns] = useState(buttonStates);
  const [clicked, updateClick] = useState(0);
  const [splitState, updateSplit] = useState(false);
  //called when a button is clicked and updates the state of the buttons so that a button
  //in the next row gets the value of the button clicked
  function rowClick(val, index, row) {
    let copy = [...btnStates];
    let copyRow = [...copy[row]]
    copyRow[index] = val;
    copy[row] = copyRow;
    updateBtns(copy);

    updateSplit(false);
    //updates how many of the buttons have been clicked so it knows when to change the instructions
    updateClick(clicked + 1);
    clicker++;


  }

  //inactivity

  function inactivity() {

    const idleDurationSecs = 300;    // X number of seconds
    const redirectUrl = '/#/LevelsPage/';  // Redirect idle users to this URL
    let idleTimeout; // variable to hold the timeout, do not modify

    //to redirect to the home page
    function redirect() {
      window.location.href = redirectUrl;
    }

    const resetIdleTimeout = function () {

      // Clears the existing timeout
      if (idleTimeout) clearTimeout(idleTimeout);

      // Set a new idle timeout to load the redirectUrl after idleDurationSecs
      idleTimeout = setTimeout(() => redirect(), idleDurationSecs * 1000);
    };

    // Init on page load
    resetIdleTimeout();


    // Reset the idle timeout on any of the events listed below
    ['click', 'touchstart', 'mousemove'].forEach(evt =>
      document.addEventListener(evt, resetIdleTimeout, false)
    );

  }


  inactivity(); //have this function run when the page loads
  


  let arrayLength = correctOrder[0].length
  let rows = 2 * Math.ceil(Math.log2(arrayLength))
  const screen = [];

  //Split button. Changes the state of split to true.
  screen.push(<button  onClick={()=>{splitState?updateSplit(false):updateSplit(true)}}>{splitState?"Split":"Not Split"}</button>);



  screen.push(<ButtonRow nameLevel={level} total={arraySize*rows} numbers={btnStates[0]} rowClick={rowClick} row={1} length={arrayLength} correctRow={correctOrder[0]} enabled={true} spaces={buttonPlacement[0]} numVisible={arraySize} splitState={splitState} correctSplitState={checkForSplit(buttonPlacement, clicked, arraySize)}></ButtonRow>)
  //pushing all of the rows into screen, they will be made visible when the previous row is filled out
  for (let i = 1; i < rows; i++) {
    screen.push(<ButtonRow nameLevel={level} total={arraySize*rows} numbers={btnStates[i]} rowClick={rowClick} row={i + 1} length={arrayLength} correctRow={correctOrder[i]} enabled={(clicked >= i * arrayLength) ? true : false} spaces={buttonPlacement[i]} numVisible={(clicked >= (i - 1) * arrayLength) ? ((clicked >= (i - 1) * arrayLength + arraySize) ? arraySize : clicked % arraySize) : (0)} splitState={splitState} correctSplitState={checkForSplit(buttonPlacement,clicked,arraySize)}></ButtonRow>)
  }
  //rayLength} correctRow={correctOrder[i]} enabled={(clicked >= i * arrayLength) ? true : false} spaces={buttonPlacement[i]} numVisible={(clicked >= (i - 1) * arrayLength) ? ((clicked >= (i - 1) * arrayLength + arraySize) ? arraySize : clicked % arraySize) : (0)} splitState={splitState} correctSplitState={checkForSplit(buttonPlacement, clicked, arraySize)}></ButtonRow>)
  
  //the final row
  screen.push(<ButtonRow nameLevel={level} total={arraySize*rows} numbers={btnStates[rows]} rowClick={rowClick} row={rows + 1} length={arrayLength} correctRow={correctOrder[rows - 1]} enabled={(false) ? true : false} spaces={buttonPlacement[rows]} numVisible={(clicked >= (rows - 1) * arrayLength) ? ((clicked >= (rows - 1) * arrayLength + arraySize) ? arraySize : clicked % arraySize) : (0)} splitState={splitState} correctSplitState={checkForSplit(buttonPlacement, clicked, arraySize)}></ButtonRow>)


  //timer code
  //put the timer code into the effect hooks so it doesn't require a refresh to start.
  useEffect(() => {
    const clock = document.getElementById("time");
    let time = -1, intervalId;
    function incrementTime() {
      time++;
      clock.textContent =
        ("0" + Math.trunc(time / 60)).slice(-2) +
        ":" + ("0" + (time % 60)).slice(-2);
    }
    incrementTime();
    intervalId = setInterval(incrementTime, 1000);
  }, []);

  //printing the custom level screen
  return (
    <div style={{ alignContent: 'centre' }}>

      <div>
        <h1 class='topRectangle'> &emsp;Custom Level<button class='quitButton'><a class="noDec" href='http://localhost:3000/LevelsPage'> Quit </a> </button> <button class='analyticsButton'>Analytics</button></h1>
      </div>
      <div id="time">00:00</div>

      <p >Custom Level for array of size {arrayLength} between the values {lowerBounds} and {upperBounds}</p>
      {screen}</div>
  );


  }

export default CustomLevel;


import ButtonRow from "../components/ButtonRow.js";
import { arr } from "./CustomSelection";
import React, { useState, useEffect } from "react";

function CustomLevel(props) {



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
  let upperBounds = 100;
  let lowerBounds = 1;
  let arraySize = 10;
  upperBounds = parseInt(props.getUpper)
  lowerBounds = parseInt(props.getLower)
  arraySize = parseInt(props.getRange)


  let randomNumberArr = []
  for (let i = 0; i < arraySize; i++) {
    randomNumberArr.push(Math.floor(Math.random() * (upperBounds - lowerBounds)) + lowerBounds)
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
  const [constructor, setConstructor] = useState(false);

  // This is now a 2d array that handles the states of all the buttons;
  const [btnStates, updateBtns] = useState(buttonStates);
  const [clicked, updateClick] = useState(0);

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


  }

  //inactivity

  function inactivity() {

    const idleDurationSecs = 300;    // X number of seconds
    const redirectUrl = '/#/LevelsPage/';  // Redirect idle users to this URL
    let idleTimeout; // variable to hold the timeout, do not modify

    //to display an alert box before being redirected
    function redirect() {
      window.location.href = redirectUrl;
      alert("Due to inactivity, your session has timed-out");

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


  screen.push(<ButtonRow numbers={btnStates[0]} rowClick={rowClick} row={1} length={arrayLength} correctRow={correctOrder[0]} enabled={true} spaces={buttonPlacement[0]} numVisible={arraySize}></ButtonRow>)

  for (let i = 1; i < rows; i++) {
    screen.push(<ButtonRow numbers={btnStates[i]} rowClick={rowClick} row={i + 1} length={arrayLength} correctRow={correctOrder[i]} enabled={(clicked >= i * arrayLength) ? true : false} spaces={buttonPlacement[i]} numVisible={(clicked >= (i - 1) * arrayLength) ? ((clicked >= (i - 1) * arrayLength + arraySize) ? arraySize : clicked % arraySize) : (0)}></ButtonRow>)
  }
  //the final row
  screen.push(<ButtonRow numbers={btnStates[rows]} rowClick={rowClick} row={rows + 1} length={arrayLength} correctRow={correctOrder[rows - 1]} enabled={(false) ? true : false} spaces={buttonPlacement[rows]} numVisible={(clicked >= (rows - 1) * arrayLength) ? ((clicked >= (rows - 1) * arrayLength + arraySize) ? arraySize : clicked % arraySize) : (0)}></ButtonRow>)


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
  },[]);


  return (
    <div style={{ alignContent: 'centre' }}>

      <div>
        <h1 class='topRectangle'> &emsp;Custom Level<button class='quitButton'><a class="noDec" href='http://localhost:3000/LevelsPage'> Quit </a> </button> <button class='analyticsButton'>Analytics</button></h1>
      </div>
      <div id="time">00:00</div>
      
      <p >Merge Sort is a divide and conquer algorithm, meaning it splits a larger problem into multiple smaller problems</p>
      {screen}</div>
  );


}

export default CustomLevel;

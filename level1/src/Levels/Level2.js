import React, { useState } from 'react';
import ButtonRow from "../components/ButtonRow.js";
import MultiPlayer from './Multiplayer.js';
import CorrectSound from './correct.mp3';
import WrongSound from './wrong.mp3';


let instructionArray=[
  "Instruction 1",
  "Instruction 2",
  "Instruction 3",
  "Instruction 4",
  "Instruction 5",
  "Instruction 6",

];

function merge(left, right) {

  let arr = []
  while (left.length && right.length) {//shifts the numbers depending on value, either to the left or right 
    (left[0] < right[0]) ? arr.push(left.shift()) : arr.push(right.shift())
  }
  return [...arr, ...left, ...right]//returns a merged array
}

function getSteps(arr) {
  let arrayLength = arr.length
  let steps = []
  let numberOfCycles = Math.ceil(Math.log2(arr.length))
  let splitArr = []
  steps.push([...arr])//adding the original add to the steps
  splitArr.push(arr.splice(0, (Math.ceil(arr.length / 2))))
  splitArr.push(arr)
  //does the first half of the merge sort (splitting down the array)
  for (let i = 0; i < numberOfCycles - 1; i++) {//looping for each step of the splitting process until arrays are all in subarrays of size 1
    arr = splitArr
    for (let j = 0; j < arr.length; j++) {
      steps.push([...arr[j]])//adding the splitting steps to the steps array
    }
    splitArr = []
    for (let j = 0; j < arr.length; j++) {
      let subArrayLength = arr[j].length
      if (subArrayLength == 3) { arr[j].push([]) }//turns subArrays of length 3 to subarrays of length 4 with an empty cell to help with merging
      let firstHalf = arr[j].splice(0, (Math.ceil(subArrayLength / 2)))//splitting the array in half
      splitArr.push(firstHalf)//pushing both halfs
      splitArr.push(arr[j])
    }
  }
  let combinedArr = []
  //combining the split arrays
  for (let j = 0; j < splitArr.length; j++) {
    for (let k = 0; k < splitArr[j].length; k++) {
      (splitArr[j][k] == '') ? combinedArr.push([]) : combinedArr.push([splitArr[j][k]])//combining the arrays and removing the empty space values
    }
  }
  for (let i = 0; i < combinedArr.length; i++) {
    if (combinedArr[i] != '') {
      steps.push([...combinedArr[i]])//adding the combined arrays to the steps
    }
  }
  //The second part of merge sort (merging)
  for (let i = 0; i < numberOfCycles; i++) {//loops until all values have been merged
    let unmergedPairs = []
    //initializing array
    for (let j = 0; j < combinedArr.length / 2; j++) { unmergedPairs.push([]) }//initializing array
    for (let j = 0; j < combinedArr.length; j++) { unmergedPairs[j >> 1].push(combinedArr[j]) }//creating pairs of 2 arrays to be merged later on
    combinedArr = []
    let flag = false
    if (arrayLength % 5 == 0 || arrayLength % 3 == 0) {//if statement may not be nessesary if the problem is fixed
      for (let j = 0; j < unmergedPairs.length; j++) {
        //if any values are undefined insert an empty value
        if (!unmergedPairs[j][0]) {
          unmergedPairs[j][0] = []
        }
        if (!unmergedPairs[j][1]) {
          unmergedPairs[j][1] = []
        }
        if (unmergedPairs[j][0].length + unmergedPairs[j][1].length == 3) {//there is a 2,1 size pair in the row
          flag = true
        }
      }
    }
    if (flag) {
      let flaggedArr = []
      for (let j = 0; j < unmergedPairs.length; j++) {
        //set up to merge the pairs of different size and ignore the pairs that are the same size (by merging with [])
        if (unmergedPairs[j][0].length != unmergedPairs[j][1].length) {
          flaggedArr.push(unmergedPairs[j])
        } else {
          flaggedArr.push([unmergedPairs[j][0], []])
          flaggedArr.push([[], unmergedPairs[j][1]])
        }
      }
      unmergedPairs = flaggedArr
    }
    //merging the pairs
    for (let j = 0; j < unmergedPairs.length; j++) {
      let tmp = []
      if (!unmergedPairs[j][0]) {
        tmp = merge([], unmergedPairs[j][1])
      }
      else if (!unmergedPairs[j][1]) {
        tmp = merge(unmergedPairs[j][0], [])
      } else {
        tmp = merge(unmergedPairs[j][0], unmergedPairs[j][1])
      }
      combinedArr.push(tmp)
      steps.push([...tmp])//adding to the steps
    }
  }
  //eliminating empty spots
  let res = []
  for (let i = 0; i < steps.length; i++) {
    res.push([])
    for (let j = 0; j < steps[i].length; j++) {
      let curr = steps[i][j]
      if (curr != '') {
        res[i].push(curr)
      }
    }
  }
  steps = res
  res = []
  let count = 0
  let rowNum = 0
  res.push([])
  //getting the steps formatted into a 3d array of rows
  for (let i = 0; i < steps.length; i++) {
    res[rowNum].push(steps[i])//pushing the steps to each row
    count += steps[i].length
    if (count == arrayLength) {
      res.push([])//initializing the row
      count = 0
      rowNum += 1
    }
  }
  res.pop()//had to be initialized with an extra space so im removing the left over here
  return (res)
}


let randomNumberArr = []
for (let i = 0; i < 10; i++) {
  randomNumberArr.push(Math.floor(Math.random() * 20) + 1)
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
function Level2() {

  // This is now a 2d array that handles the states of all the buttons;
  const [btnStates, updateBtns] = useState(buttonStates);
  const [clicked,updateClick]=useState(0);
  const [instructionsNum, updateInstructions]=useState(0);
  //called when a button is clicked and updates the state of the buttons so that a button
  //in the next row gets the value of the button clicked
  function rowClick(val, index, row) {
    let copy = [...btnStates];
    let copyRow = [...copy[row]]
    copyRow[index] = val;
    copy[row] = copyRow;
    updateBtns(copy);

    //updates how many of the buttons have been clicked so it knows when to change the instructions
    updateClick(clicked+1);

    //check to see if instructions should change
    if((clicked+1)%10===0&&clicked>1){
      updateInstructions(instructionsNum+1);
    }

  }

  return (
    <div style={{ alignContent: 'centre' }}>
      <p>This is level 2</p>

      <h3>{instructionArray[instructionsNum]}</h3>

      <ButtonRow numbers={btnStates[0]} rowClick={rowClick} row={1} length={10} correctRow={correctOrder[0]} spaces={[]}></ButtonRow>
      <ButtonRow numbers={btnStates[1]} rowClick={rowClick} row={2} length={10} correctRow={correctOrder[1]} spaces={[5]} ></ButtonRow>
      <ButtonRow numbers={btnStates[2]} rowClick={rowClick} row={3} length={10} correctRow={correctOrder[2]} spaces={[3, 5, 8]}></ButtonRow>
      <ButtonRow numbers={btnStates[3]} rowClick={rowClick} row={4} length={10} correctRow={correctOrder[3]} spaces={[2, 3, 4, 5, 7, 8, 9]}></ButtonRow>
      <ButtonRow numbers={btnStates[4]} rowClick={rowClick} row={5} length={10} correctRow={correctOrder[4]} spaces={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}></ButtonRow>
      <ButtonRow numbers={btnStates[5]} rowClick={rowClick} row={6} length={10} correctRow={correctOrder[5]} spaces={[2, 3, 4, 5, 7, 8, 9]}></ButtonRow>
      <ButtonRow numbers={btnStates[6]} rowClick={rowClick} row={7} length={10} correctRow={correctOrder[6]} spaces={[3, 5, 8]}></ButtonRow>
      <ButtonRow numbers={btnStates[7]} rowClick={rowClick} row={8} length={10} correctRow={correctOrder[7]} spaces={[5]}></ButtonRow>
      <ButtonRow numbers={btnStates[8]} rowClick={rowClick} row={9} length={10} correctRow={correctOrder[0]} spaces={[]}></ButtonRow>

      <div className="App">
        <MultiPlayer
          urls={[
            CorrectSound,
            WrongSound,
          ]}
        />
      </div>


    </div>
  );
}

export default Level2;

import React, { useState } from 'react';
import ButtonRow from "../components/ButtonRow.js";
import MultiPlayer from './Multiplayer.js';
import CorrectSound from './correct.mp3';
import WrongSound from './wrong.mp3';

function Level2() {
  function merge(left, right) {
  
    let arr = []
    while (left.length && right.length) {
        (left[0] < right[0]) ? arr.push(left.shift()) : arr.push(right.shift())
    }
    return [...arr, ...left, ...right]
}

function getSteps(arr) {
    let arrayLength = arr.length
    let steps = []
    let numberOfCycles = Math.ceil(Math.log2(arr.length))
    let splitArr = []
    steps.push([...arr])
    splitArr.push(arr.splice(0, (Math.ceil(arr.length / 2))))
    splitArr.push(arr)
    //does the first half of the merge sort (splitting down the array)
    for (let i = 0; i < numberOfCycles - 1; i++) {
        arr = splitArr
        for(let j =0; j <arr.length;j++){
            steps.push([...arr[j]])
        }
        splitArr = []
        for (let j = 0; j < arr.length; j++) {
            let subArrayLength = arr[j].length
            if (subArrayLength == 3) { arr[j].push([]) }
            let firstHalf = arr[j].splice(0, (Math.ceil(subArrayLength / 2)))
            splitArr.push(firstHalf)
            splitArr.push(arr[j])
        }
    }
           let combinedArr = []
    //combining the split arrays
    for (let j = 0; j < splitArr.length; j++) {
        for (let k = 0; k < splitArr[j].length; k++) {
            (splitArr[j][k] == '') ? combinedArr.push([]) : combinedArr.push([splitArr[j][k]])
        }
    }
  for(let i =0; i <combinedArr.length;i++){
    if (combinedArr[i]!=''){
            steps.push([...combinedArr[i]])
    }
        }
    //The second part of merge sort (merging)
    for (let i = 0; i < numberOfCycles; i++) {
        let unmergedPairs = []
        //initializing array
        for (let j = 0; j < combinedArr.length / 2; j++) { unmergedPairs.push([]) }
        for (let j = 0; j < combinedArr.length; j++) { unmergedPairs[j >> 1].push(combinedArr[j]) }
        combinedArr = []

        for (let j = 0; j < unmergedPairs.length; j++) {
            //console.log(unmergedPairs[j][0], unmergedPairs[j][1])
            let tmp=[]
            if (!unmergedPairs[j][0]){
            tmp = merge([], unmergedPairs[j][1])
            }
            else if (!unmergedPairs[j][1]){
            tmp = merge(unmergedPairs[j][0], [])
            }else{
                 tmp = merge(unmergedPairs[j][0], unmergedPairs[j][1])
            }
            //console.log(tmp)
            combinedArr.push(tmp)
            steps.push([...tmp])
        }
    }
//3D->2D
    let res =[]
    for(let i = 0;i<steps.length; i++){
        res.push([])
        for(let j = 0; j<steps[i].length;j++){
            let curr = steps[i][j]
            
            if(curr !=''){
             res[i].push(curr)
            }
        }
    }
    steps = res
    res=[]
    let count = 0
    let rowNum =0
    res.push([])
    //getting the steps formatted into a 3d array of rows
    for(let i =0; i <steps.length;i++){
        res[rowNum].push(steps[i])
        count+=steps[i].length
        if(count == arrayLength){
            res.push([])
            count = 0
            rowNum+=1
        }
    }
    res.pop()//had to be initialized with an extra space so im removing the left over here
    return(res)
}
  //const randomNumberArray1  = Array.from({length: 10}, () => Math.floor(Math.random() * 20)+ 1);
let randomNumberArr = []
for(let i =0; i < 10; i++){
  randomNumberArr.push(Math.floor(Math.random()*20)+1)
}
const randomNumberArray = [...randomNumberArr]

const [numbersR1,updateR1]=useState(randomNumberArray)
  //console.log(numbersR1)
//console.log(randomNumberArr)
  const temp = [...numbersR1];
  
  console.log(temp);
  let sortedArray=getSteps(temp);
 //console.log(sortedArray,"test")
 //console.log(sortedArray[0][0][1])
 
 


let buttonStates=[];
buttonStates.push(sortedArray[0][0]);
let nullArray=[];
for(let j =0;j<sortedArray[0][0].length;j++){
    nullArray.push(null);
}
for(let i =1;i<sortedArray.length;i++){
    buttonStates.push(nullArray);
    /*for(const e of sortedArray[i]){
        for(const j of e){
            tempArray.push(j);
        }
    }*/
}

// This is now a 2d array that handles the states of all the buttons;
const [btnStates, updateBtns]=useState(buttonStates);

//called when a button is clicked and updates the state of the buttons so that a button
//in the next row gets the value of the button clicked
function rowClick(val,index,row){
        let copy = [...btnStates];
        let copyRow=[...copy[row]]
        copyRow[index] = val;
        copy[row]=copyRow;
        updateBtns(copy);
        console.log(btnStates);
}

  return (
  <div style={{alignContent:'centre'}}>
    <p>This is level 2</p>

    <ButtonRow numbers={btnStates[0]}  rowClick={rowClick} row={1} length={10} spaces={[]}></ButtonRow>
    <ButtonRow numbers={btnStates[1]}  rowClick={rowClick} row={2} length={10} spaces={[5]}></ButtonRow>
    <ButtonRow numbers={btnStates[2]}  rowClick={rowClick} row={3} length={10} spaces={[2,4,5,7,9,10]}></ButtonRow>
    <ButtonRow numbers={btnStates[3]}  rowClick={rowClick} row={4} length={10} spaces={[1,2,3,4,5,6,7,8,9,10]}></ButtonRow>
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

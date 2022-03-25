import React ,{useState}from 'react';
import CorrectSound from './correct.mp3';
import WrongSound from './wrong.mp3';
import  { Redirect } from 'react-router-dom';
import Done from './done.mp3';
import {newstate} from '../Levels/LevelsPage.js';
import {getstate} from '../Levels/LevelsPage.js';
import changeAnalytics from '../Levels/changeAnalytics';

//do something...


let count=0;
let right=0;
let attempt=0;

function Button(props) {
 
  const [clicked, setClicked]=useState(false);
  const [enabled, setEnabled]=useState(true);
 
  function buttonClick(){

     if(props.nextVal===props.btnId && props.splitState==props.correctSplitState){
      
        var correct = new Audio(CorrectSound);
        correct.play();
        setEnabled(false);
        setClicked(true);
        props.rowClick(props.value);
        right++;
      
      
    }
    
    else if (count===2)
    {
      alert("Last Try!");
      count++;
      FontFaceSetLoadEvent()
      count++;
     
      
    }
    

    else if (count==0||count==1){
      alert("Wrong -Try Again");
      var incorrect = new Audio(WrongSound);
      incorrect.play();
      count++;
      
    }
    if (count===3)
    {
      var wrong2 = new Audio(Done);
      wrong2.play();
      wrong2.onended= function() {
        leave();
        count =0;
        right =0;
    };
    }
    //testing purposes
    console.log(props.lvl);
  
    //checking for level 2 
    if(props.lvl === 2  ){
      
      if (count ===0 && right=== 80){
        attempt++;
        changeAnalytics(2,3,props.timer);
        changeAnalytics(2,4,props.timer);
       leave1();
       count =0;
       right =0;
       if (getstate()<=2)
       {
          newstate(3);
       }
     }
    
      else if (count ===1 && right=== 80){
        attempt++;
        changeAnalytics(2,3,props.timer);
        changeAnalytics(2,4,props.timer);
      leave2();
      count=0;
      right =0;
      if (getstate()<=2)
      {
         newstate(3);
      }
    }
      else if (count ===2 && right=== 80){
        attempt++;
        changeAnalytics(2,3,props.timer);
        changeAnalytics(2,4,props.timer);
      leave3();
      count =0;
      right =0;
      if (getstate()<=2)
      {
         newstate(3);
      }
    } }
//for level3
    if(props.lvl === 3 ){
      
      if (count ===0 && right=== 80){
        changeAnalytics(3,3,props.timer);
        changeAnalytics(3,4,props.timer);
       leave1();
       count =0;
       right =0;
       if (getstate()<=3)
       {
          newstate(4);
       }
     }
      else if (count ===1 && right=== 80){
        changeAnalytics(3,3,props.timer);
        changeAnalytics(3,4,props.timer);
      leave2();
      count=0;
      right =0;
      if (getstate()<=3)
      {
         newstate(4);
      }
    }
      else if (count ===2 && right=== 80){
        changeAnalytics(3,3,props.timer);
        changeAnalytics(3,4,props.timer);
      leave3();
      count =0;
      right =0;
      if (getstate()<=3)
       {
          newstate(4);
       }
    }
  } 


    //checking for level 4
    if(props.lvl === 4){
      
      if (count ===0 && right=== 200){
        changeAnalytics(4,3,props.timer);
        changeAnalytics(4,4,props.timer);
       leave1();
       count =0;
       right =0;
       if (getstate()<=4)
       {
          newstate(5);
       }
     }
      else if (count ===1 && right=== 200){
        changeAnalytics(4,3,props.timer);
        changeAnalytics(4,4,props.timer);
      leave2();
      count=0;
      right =0;
      if (getstate()<=4)
      {
         newstate(5);
      }
    }
      else if (count ===2 && right=== 200){
        changeAnalytics(4,3,props.timer);
        changeAnalytics(4,4,props.timer);
      leave3();
      count =0;
      right =0;
      if (getstate()<=4)
      {
         newstate(5);
      }
    } }

    //checking level 5 
    if(props.lvl === 5){
      
      if (count ===0 && right=== 600){
        changeAnalytics(5,3,props.timer);
        changeAnalytics(5,4,props.timer);
       leave1();
       count =0;
       right =0;
       if (getstate()<=5)
       {
          newstate(6);
       }
     }
      else if (count ===1 && right === 600){
        changeAnalytics(5,3,props.timer);
        changeAnalytics(5,4,props.timer);
      leave2();
      count=0;
      right =0;
      if (getstate()<=5)
      {
         newstate(6);
      }
    }
      else if (count ===2 && right=== 600){
        changeAnalytics(5,3,props.timer);
        changeAnalytics(5,4,props.timer);
      leave3();
      count =0;
      right =0;
      if (getstate()<=5)
      {
         newstate(6);
      }
    } }
   
  }
  
  
  return (
  <button   class={clicked?"bttnCorrect":"bttn2"} onClick={buttonClick} disabled={!enabled || !props.enabled} style={{marginRight:props.padding}}>
     {props.value}
  </button>
  
  );
 
  
function leave(){
  return (
    <button   class={clicked?"bttnCorrect":"bttn2"} onClick={window.location.href = "#/RetryPage/"} disabled={!enabled || !props.enabled} style={{marginRight:props.padding}}>
       {props.value}
    </button>
    
    );
}
function leave1(){
  return (
    <button  class={clicked?"bttnCorrect":"bttn2"} onclick= {keepCount1()} disabled={!enabled || !props.enabled} style={{marginRight:props.padding}}>
       {props.value}
    </button>
    
    );
}
function leave2(){
  return (
    <button  class={clicked?"bttnCorrect":"bttn2"} onclick= {keepCount2()} disabled={!enabled || !props.enabled} style={{marginRight:props.padding}}>
       {props.value}
    </button>
    
    );
}
function leave3(){
  return (
    <button   class={clicked?"bttnCorrect":"bttn2"} onclick= {keepCount3()} disabled={!enabled || !props.enabled} style={{marginRight:props.padding}}>
       {props.value}
    </button>
    
    );
    
}

function changeWindow1(){
  window.location.href = "#/Completed/"
}

function changeWindow2(){
  window.location.href = "#/OneMistake/"
}

function changeWindow3(){
  window.location.href = "#/TwoMistakes"
}

function updateAnalytics(){
  changeAnalytics(props.lvl, 2, 1);
}

function keepCount1(){
  alert("calling keep count 1");
  changeWindow1();
  updateAnalytics();
}

function keepCount2(){
  alert("calling keep count 2");
  changeWindow2();
  updateAnalytics();
}

function keepCount3(){
  alert("calling keep count 3");
  changeWindow3();
  updateAnalytics();
}


}

export default Button; 
import React ,{useState}from 'react';
import CorrectSound from './correct.mp3';
import WrongSound from './wrong.mp3';
import  { Redirect } from 'react-router-dom';
import Done from './done.mp3';
import {newstate} from '../Levels/LevelsPage.js';
import {getstate} from '../Levels/LevelsPage.js';
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
    console.log(props.ttl);
    //checking for level 2 
    if(props.lvl === 2  ){
      
      if (count ===0 && right=== 80){
        attempt++;
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
       leave1();
       count =0;
       right =0;
       if (getstate()<=3)
       {
          newstate(4);
       }
     }
      else if (count ===1 && right=== 80){
      leave2();
      count=0;
      right =0;
      if (getstate()<=3)
      {
         newstate(4);
      }
    }
      else if (count ===2 && right=== 80){
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
       leave1();
       count =0;
       right =0;
       if (getstate()<=4)
       {
          newstate(5);
       }
     }
      else if (count ===1 && right=== 200){
      leave2();
      count=0;
      right =0;
      if (getstate()<=4)
      {
         newstate(5);
      }
    }
      else if (count ===2 && right=== 200){
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
       leave1();
       count =0;
       right =0;
       if (getstate()<=5)
       {
          newstate(6);
       }
     }
      else if (count ===1 && right === 600){
      leave2();
      count=0;
      right =0;
      if (getstate()<=5)
      {
         newstate(6);
      }
    }
      else if (count ===2 && right=== 600){
      leave3();
      count =0;
      right =0;
      if (getstate()<=5)
      {
         newstate(6);
      }
    } }

    //checking for custom level 
    if(props.lvl === 6){
      
      if (count ===0 && right=== props.ttl){
       leave1();
       count =0;
       right =0;
       if (getstate()<=5)
       {
          newstate(6);
       }
     }
      else if (count ===1 && right === props.ttl){
      leave2();
      count=0;
      right =0;
      if (getstate()<=5)
      {
         newstate(6);
      }
    }
      else if (count ===2 && right=== props.ttl){
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
    <button  class={clicked?"bttnCorrect":"bttn2"} onClick={window.location.href = "#/Completed/"} disabled={!enabled || !props.enabled} style={{marginRight:props.padding}}>
       {props.value}
    </button>
    
    );
}
function leave2(){
  return (
    <button  class={clicked?"bttnCorrect":"bttn2"} onClick={window.location.href = "#/OneMistake/"} disabled={!enabled || !props.enabled} style={{marginRight:props.padding}}>
       {props.value}
    </button>
    
    );
}
function leave3(){
  return (
    <button   class={clicked?"bttnCorrect":"bttn2"} onClick={window.location.href = "#/TwoMistakes"} disabled={!enabled || !props.enabled} style={{marginRight:props.padding}}>
       {props.value}
    </button>
    
    );
    
}


}

export default Button; 
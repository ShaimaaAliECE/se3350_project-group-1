import React ,{useState}from 'react';
import CorrectSound from './correct.mp3';
import WrongSound from './wrong.mp3';
import  { Redirect } from 'react-router-dom'
import Done from './done.mp3'
//do something...


let count=0;
function Button(props) {
 
  const [clicked, setClicked]=useState(false);
  const [enabled, setEnabled]=useState(true);
 
  function buttonClick(){
    if (count==2)
    {
      alert("Last Try!");
    count++;
 FontFaceSetLoadEvent()
 count++;
     
      
    }
   else if (count==3)
    {
     
      var wrong2 = new Audio(Done);
      wrong2.play();
      wrong2.onended= function() {
        leave();
    };
    }

    else if(props.nextVal===props.btnId){
      var correct = new Audio(CorrectSound);
      correct.play();
      setEnabled(false);
      setClicked(true);
      props.rowClick(props.value);
    }


    else{
      alert("Wrong -Try Again");
      var incorrect = new Audio(WrongSound);
      incorrect.play();
      count++;
    }
   
      

  }
 
  return (
  <button   class={clicked?"bttnCorrect":"bttn2"} onClick={buttonClick} disabled={!enabled || !props.enabled} style={{marginRight:props.padding}}>
     {props.value}
  </button>
  
  );

function leave(){
  return (
    <button   class={clicked?"bttnCorrect":"bttn2"} onClick={window.location.href = "/RetryPage"} disabled={!enabled || !props.enabled} style={{marginRight:props.padding}}>
       {props.value}
    </button>
    
    );
}}
export default Button; 
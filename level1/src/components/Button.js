import React ,{useState}from 'react';

function Button(props) {
  
  const [clicked, setClicked]=useState(false);
  const [enabled, setEnabled]=useState(true);
    
  function buttonClick(){
      setEnabled(false);
      setClicked(true);
      props.rowClick(props.value);
      
  }
  
  return (
  <button   onClick={buttonClick} disabled={!enabled}>
     {props.value}
  </button>
  );
}

export default Button;
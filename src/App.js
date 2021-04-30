import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {

  function useHightlight(newColor, newState){
    const[colour,setColour]= useState(newColor);
    const[state,setState]=useState(newState);

    useEffect(()=>{
      state? setColour('yellow') : setColour('');
      console.log(colour);
      console.log(state);
    },[state])

    return (
      <>
      <div style={{display:'flex',margin:'20px'}}>
        <button onClick={()=>setState(!state)}>
        {!state ? "ON" : "OFF"}</button>
      </div>
      <div style={{width:'40px',background:colour,margin:'20px'}}>=^.^=</div>
      </>
    );
  }

  const off = useHightlight('',false);
  const on = useHightlight('',true);

  return(
    <div style={{display:'flex'}}>
      <div class="lightcat">
        Turn on the cat {off}
      </div>
      <div class="lightcat">
        Turn off the cat {on}
      </div>
    </div>
  )
  
}



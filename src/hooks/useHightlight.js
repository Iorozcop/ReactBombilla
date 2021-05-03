import React,{useState,useEffect} from "react";

export default function useHightlight(newColor, newState){
    const[colour,setColour]= useState(newColor);
    const[state,setState]=useState(newState);

    useEffect(()=>{
      state ? setColour('yellow') : setColour('');
    },[state])

    return (
      <div>
        Turn {!state ? "on" : "off"} the cat
        <div style={{display:'flex',margin:'20px'}}>
          <button onClick={()=>setState(!state)}>
          {!state ? "ON" : "OFF"}</button>
        </div>
        <div style={{width:'40px',background:colour,margin:'20px'}}>=^.^=</div>
      </div>
    );
  }
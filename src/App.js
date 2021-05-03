import React from "react";
import useHightlight from "./hooks/useHightlight"
import "./style.css";

export default function App() {

  const off = useHightlight('',false);
  const on = useHightlight('',true);

  return(
    <div style={{display:'flex'}}>
      <div class="lightcat">
        {off}
      </div>
      <div class="lightcat">
        {on}
      </div>
    </div>
  )
}



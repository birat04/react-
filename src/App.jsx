import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);

  function onClickHandler() {
    setCount(count + 1);
  }

  return (
    <div>
      <button id="btn" onClick={onClickHandler}>
        Counter: {count}
      </button>
    </div>
  );
function Button(props){
  return <button onClick={props.onClick}>{props.children}</button>
}  
}
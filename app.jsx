import React from "react";

function App() {
    const [count,setCount] = React.useState(0);

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
function Button(props){
    function onButtonClick(){
        props.onClickFunction(props.incrementValue);
    }
    return(
        <button onClick={onButtonClick}>+{props.incrementValue}</button>
    )
}
export default App;
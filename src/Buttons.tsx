import React from 'react';
import './App.css';

type PropsNumber = {
    addCounter: () => void
    reset: () => void
    counter: number
    maxCounterValue: number
}



function Button(props: PropsNumber ) {
    return (
        <div>
            <button className={"buttonInc"} onClick={props.addCounter} disabled={props.maxCounterValue === props.counter} >inc</button>
            <button className={"buttonIReset"} onClick={props.reset} disabled={props.counter === 0}>reset</button>
        </div>
    )
}


// <div>
//     {data}
// </div>
// <button onClick = { () => { setData(data+1)}}>+</button>
// <button onClick={ () => { setData(data-1)}}>-</button>

export default Button;
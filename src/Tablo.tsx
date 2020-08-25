import React from 'react';

type PropsTablo = {
    counter: number
    maxCounterValue: number
    startCounterValue: number


}


function Tablo(props: PropsTablo) {


    return (
        <div className={"tablo-number"}>
            <span className={props.maxCounterValue === props.counter ? "limit" : ""}>{props.startCounterValue < 0 || props.startCounterValue >= props.maxCounterValue ? 'Error' : props.counter}</span>
        </div>
    )
}


export default Tablo;

import React, {ChangeEvent, useState} from 'react';
import './App.css';

type CounterType = {
    getStartValue: (value: number) => void
    getMaxValue: (value: number) => void
    setCountValue: () => void
    startCounterValue: number
    maxCounterValue: number
    setCounterText: () => void
}


export const Counter = (props: CounterType) => {
    const [startValue, setStartValue] = useState(0)
    const [MaxValue, setMaxValue] = useState(5)


    const getStartValueInput = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.currentTarget.value))
        props.getStartValue(Number(e.currentTarget.value))
        props.setCounterText()
    }


    const getMaxValueInput = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
        props.getMaxValue(Number(e.currentTarget.value))
        props.setCounterText()
    }

    let MaxValueInput = MaxValue < 0 || startValue >= MaxValue ? 'error' : ''
    let StartValueInput = startValue < 0 || startValue >= MaxValue ? 'error' : ''
    const disableBtn = startValue < 0 || startValue >= MaxValue


    return (
        <div className={"App-counter"}>
            <div className={"tablo"}>
                <div className={"tablo-items"}>
                    <span className={"tablo-name"}>max value:</span>

                    <input className={MaxValueInput} type={'number'} value={props.maxCounterValue} onChange={getMaxValueInput}/>

                </div>
                <div className={"tablo-items"}>
                    <span className={"tablo-name"}>start value:</span>

                    <input className={StartValueInput} type={'number'} value={props.startCounterValue} onChange={getStartValueInput}/>

                </div>
            </div>
            <div className={"button-wrapper"}>
                <button disabled={disableBtn} className={"buttonInc"} onClick={props.setCountValue}>SET</button>
            </div>
        </div>

    )
}


import React, {useState} from 'react';
import './App.css';
import Tablo from "./Tablo";
import Button from "./Buttons";
import {Counter} from './Counter';

function App() {
    let [counter, setCounter] = useState<any>(0)
    let [maxCounterValue, setMaxCounterValue] = useState(5)
    let [startCounterValue, setStartCounterValue] = useState(0)


    function addCounter() {
        if (counter < maxCounterValue) {

            let newNumber = counter + 1;
            setCounter(newNumber)
        }
    }

    function reset() {
        setCounter(0)

    }

    const setCounterText = () => {
        setCounter('Enter press set')
    }

    const setCountValue = () => {
        setCounter(startCounterValue)
    }

    const getStartValue = (startCounterValue: number) => {
        setStartCounterValue(startCounterValue)
    }
    const getMaxValue = (maxCounterValue: number) => {
        setMaxCounterValue(maxCounterValue)
    }

    return (

        <div className="App">
            <div className={"App-wrapper"}>
                <Counter
                    getStartValue={getStartValue}
                    getMaxValue={getMaxValue}
                    setCountValue={setCountValue}
                    maxCounterValue={maxCounterValue}
                    startCounterValue={startCounterValue}
                    setCounterText={setCounterText}

                />
                <div className={"App-counter"}>
                    <div className={"tablo"}>
                        <Tablo counter={counter}
                               maxCounterValue={maxCounterValue}
                               startCounterValue={startCounterValue}

                               />
                    </div>
                    <div className={"button-wrapper"}>
                        <Button addCounter={addCounter}
                                reset={reset}
                                maxCounterValue={maxCounterValue}
                                counter={counter}/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default App;

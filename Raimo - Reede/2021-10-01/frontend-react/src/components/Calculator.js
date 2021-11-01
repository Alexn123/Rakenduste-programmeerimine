import React, { useState } from 'react';
function Calculator(){

    const[show, setShow] = useState(false)

    const hideCalculator = () => {
        if(show == false){
            setShow(true) 
        } else {
            setShow(false)
        }
    }

    const[counter, setCounter] = useState(0)

    const addNumber = () => {
        setCounter(counter + 1)
    }

    const remNumber = () => {
        setCounter(counter - 1)
    }

    const doubleNumber = () =>{
        setCounter(counter * 2)
    }

    const divideNumber = () =>{
        setCounter(counter / 2)
    }

    const resetNumber = () =>{
        setCounter(0)
    }

    // const Kalkulaator = () => {
    //         <div className="kalkulaator">
    //             <h1>Odav kalkulaator</h1>
    //             <p>Number on: {counter}</p>
    //             <button onClick={addNumber}>Liida 1</button>
    //             <button onClick={remNumber}>Lahuta 1</button>
    //             <button onClick={doubleNumber}>Kahekordista number</button>
    //             <button onClick={divideNumber}>jaga number pooleks</button>
    //             <button onClick={resetNumber}>Reseti number</button>
    //         </div>
    // }

    return(
        <div>
            <button onClick={hideCalculator}>{show ? 'peida kalkulaator' : 'näita kalkulaatorit'}</button>
            {show && 
            <div className="kalkulaator">
                <h1>Odav kalkulaator</h1>
                <p>Number on: {counter}</p>
                <button onClick={addNumber}>Liida 1</button>
                <button onClick={remNumber}>Lahuta 1</button>
                <button onClick={doubleNumber}>Kahekordista number</button>
                <button onClick={divideNumber}>jaga number pooleks</button>
                <button onClick={resetNumber}>Reseti number</button>
            </div>}
        </div>
    )
}

export default Calculator;


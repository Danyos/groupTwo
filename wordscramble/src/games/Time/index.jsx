import {useEffect, useReducer, useState} from "react";
import {initalstate, WordReducers} from "../../reducer/WordScrambleReducer";

const Time = ({time,settime,settimeEnd}) => {
    useEffect(() => {

        const interval = setInterval(() => {
            settime()

        }, 1000);
        if (time === 0) {
            settimeEnd("refresh")
        }


        return () => {

            clearInterval(interval);
        };
    }, [time]);


    return (
        <>
            <h2>i'm {time} component</h2>
        </>
    )
}

export default Time
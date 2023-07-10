import Print from "./Print";
import Filed from "./Input";
import {useCallback, useEffect, useReducer} from "react";
import {initalstate, WordReducers} from "../reducer/WordScrambleReducer";
import Time from "./Time";

const Games=()=>{
    const [reducer,dispatch]=useReducer(WordReducers,initalstate)
useEffect(()=>{
    dispatch({
        type:"RandomItem"
    })
},[])
const setmytime=useCallback(()=>{
    dispatch({
        type:"time"
    })
},[])
    const setEndtime=useCallback((res)=>{
    dispatch({
        type:"setEndtime",
        payload:res
    })
},[])

    return(
        <>
            {/*{console.log(reducer)}*/}
            <h2>success {reducer.score.success}</h2>
            <h2>worning {reducer.score.worning}</h2>
            <h2>refresh {reducer.score.refresh}</h2>
            <h2>Count {reducer.count}</h2>
            <h2>Count {JSON.stringify(reducer.word)}</h2>
            <Print  word={reducer.word[reducer.count]} />
            {reducer.word[reducer.count]?<Time time={reducer.time} settime={setmytime} settimeEnd={setEndtime} />
           :"Avart jamanki" }
            <Filed  getData={setEndtime}/>

        </>
    )
}

export default Games
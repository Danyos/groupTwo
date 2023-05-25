import Page3 from "./Page3";
import {useReducer, useState} from "react";
import CounteReducer, {initalstate} from "../Reducer/counter";

function Page2() {
    let [state,dispatch]=useReducer(CounteReducer,initalstate)
        let [mycount,setmycount]=useState(1)
    return (
        <div className="App">
            <h2> {state.count}</h2>
            <input type="text" defaultValue={mycount} onChange={(e)=>{
                setmycount(e.target.value)
            }}/>
            <button onClick={()=>dispatch({
                type:'decrement',
                payload: {
                        step: +mycount

                    }
            })}>-</button>

            <button onClick={()=>dispatch({
                type:'increment',
                payload: {
                    step: +mycount

                    }
            })}>+</button>


            <Page3 />
        </div>
    );
}

export default Page2;
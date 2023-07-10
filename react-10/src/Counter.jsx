import {memo, useRef} from "react";

const Counter=memo(()=>{
    const count=useRef(0)
    count.current++
    return (
        <>
            <h2>Counter: {count.current}</h2>
        </>
    )
})
export default Counter
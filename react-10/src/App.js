import Input from "./Input";
import {useCallback, useMemo, useRef, useState} from "react";

function App() {

    const count = useRef(0)
    count.current++

    let [color, setColor] = useState('red')
    let [myInput, setMyInput] = useState('')
    let [myInput2, setMyInput2] = useState('')

    const onColor = useCallback((res) => {
        setColor(res)
    }, [])
const myinfo=useMemo(()=>{
    return myInput2
},[myInput2])
    return (

        <>
            <h6>{myInput}</h6>
            <h2 style={{color: color}}>App: {count.current}</h2>
            <Input title={myinfo} result={{name:"Davo",surname:"Davtyan"}} changeColor={onColor}/>
            <span>App</span>
            <input type="text" value={myInput} onChange={
                (e) =>
                    setMyInput(e.target.value)
            }/>
            <br/>
            <span>Input</span>
            <input type="text" value={myInput2} onChange={
                (e) =>
                    setMyInput2(e.target.value)
            }/>


        </>
    )
}

export default App
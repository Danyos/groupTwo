import {useEffect, useState} from "react";

const Main = () => {
    let [state, setState] = useState(4)
    let [state2, setState2] = useState(20)
    useEffect(() => {
            let data=localStorage['counter']
        if (data) {
             data = JSON.parse(data)
            setState(data.x)
            setState2(data.y)
        } else {
            localStorage['counter'] = JSON.stringify({
                x: state,
                y: state2
            })
        }
            return () => {
                console.log('this page Well mount')
            }
        }
    ,
        []
    )
        useEffect(() => {

            localStorage['counter'] = JSON.stringify({
                x: state,
                y: state2
            })
            console.log('this page update')
        }, [state])

        function handelIncrment() {
            setState(state + 1)
            setState2(state2 + 1)
        }

        function handelDecrument() {
            setState(state - 1)
            setState2(state2 + 1)
        }

        return (
            <>
                <h2>{state}</h2>
                <h2>{state2}</h2>
                <button onClick={handelDecrument}>-</button>
                <button onClick={handelIncrment}>+</button>
            </>
        )
    }
    export default Main
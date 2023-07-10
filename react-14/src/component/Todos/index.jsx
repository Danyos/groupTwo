import {useCallback, useEffect, useReducer, useState} from "react";
import TodoReducer, {apiTodoUrl, initialState} from "../../Reducer/TodoList";
import TableTodos from "./Table";
import Add from "./feacture/Add";
import {Fetch_error, Fetch_Success, TodosAdd} from "../../Reducer/TodoFeactureName";

const TodoList = () => {
    const [state, dispatch] = useReducer(TodoReducer, initialState)
    useEffect(() => {
        fetch(apiTodoUrl)
            .then(data => data.json())
            .then(res => {
                dispatch({
                    type: Fetch_Success,
                    payload: res
                })


            }).catch(err => {
            dispatch({
                type: Fetch_error,
                payload: err.message
            })
        })
    }, [])
    const [showAdd,setShowAdd]=useState(true)

    const hanndleCalback=useCallback((res)=>{
        dispatch({
            type:TodosAdd,
            payload:res
        })
    },[])

    const {loading, tasks, error} = state

    if (error) {
        return <div>{error}</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    function handdleAddShow(){
        setShowAdd(!showAdd)
    }
    return (
        <>

            <h2>Todo List</h2>
            <button onClick={handdleAddShow}>{showAdd?'X':'+'}</button>
            {showAdd&&<Add sendData={hanndleCalback}/>}
            <TableTodos />
            {
                tasks.length ?
                <ul>
                    {
                        tasks.map(data => (
                            <li key={data.id} onClick={()=>{
                                dispatch({
                                    type:"DeleteItem",
                                    payload:data.id
                                })
                            }}>{data.name}</li>
                        ))
                    }
                </ul>:(
                    <div>
                        <h2>Mard chka</h2>
                    </div>
                    )

            }

        </>

    )

}


export default TodoList
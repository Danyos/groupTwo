import {useEffect, useState} from "react";

const TodosIndex = () => {
    let [state, setState] = useState({
        item: [],
        loading: true,
        error: null,
    })
    let [dID,setdId]=useState(null)

    useEffect(()=>{
    setTimeout(()=>{
        if(dID){
            let s=false
            if(s){
                setState({
                    ...state,
                    loading: false,
                    item: state.item.filter(res=>res.id!==dID)
                })
            }else{
                setState({
                    error: "Server Error or 404",
                    loading: true,
                    item:[]
                })


            }

        }
    },1000)

    },[dID])

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(json => setState({
                    error: null,
                    loading: false,
                    item: [...json]
                })).catch((err) => {
                setState({
                    error: err.message,
                    loading: true,
                    item: []
                })
            })
        }, 1000)
    }, [])
    if (state.error) {
        return <>{state.error}</>
    }

    function handleDelete(id) {
        setState({
            ...state,
           loading: true,
        })
        setdId(id)


    }

    return (

        <>

            <h2>Todos</h2>

            <ul>
                {
                    !state.loading ? state.item.map(res => (
                        <li key={res.id}>{res.id} {res.title}
                            <button onClick={() => handleDelete(res.id)}>X</button>


                        </li>
                    )) : "Loading"
                }
            </ul>


        </>
    )
}

export default TodosIndex
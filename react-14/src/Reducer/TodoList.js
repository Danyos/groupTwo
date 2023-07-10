import {DeleteItem, Fetch_error, Fetch_Success, TodosAdd} from "./TodoFeactureName";

export const apiTodoUrl = 'https://jsonplaceholder.typicode.com/users'
export const initialState = {
    loading: true,
    tasks: [],
    error: null
}

const TodoReducer = (state, action) => {
    if (action.type === Fetch_Success) {
        return (
            {
                loading: false,
                tasks: action.payload,
                error: null
            }
        )
    } else if (action.type === Fetch_error) {
        return (
            {
                loading: true,
                tasks: [],
                error: action.payload
            }
        )
    } else if (action.type === TodosAdd) {
        console.log(action.payload)
        return (
            {

                ...state,

                tasks: [...state.tasks,{
                    id:new Date().getTime(),
                    name:action.payload
                }]
            }
        )


    } else if (action.type === DeleteItem) {
        let item = state.tasks.filter(res => res.id !== action.payload);


        return (
            {
                loading: false,
                tasks: item,
                error: null
            }
        )


    }
    return state


}
export default TodoReducer
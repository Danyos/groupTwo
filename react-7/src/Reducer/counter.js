export const initalstate={
    count:0
}

const CounteReducer=(state,action)=>{
    console.log(action)
        if(action.type==='decrement'){
            return {count:state.count-action.payload.step}
        }else if(action.type==='increment'){
            return {count:state.count+action.payload.step}
        }
    return state
}
export default CounteReducer
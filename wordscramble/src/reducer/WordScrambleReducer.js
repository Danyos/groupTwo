const initialTime=10
export const initalstate={
    word:['apple','kiwi','mango','banana','orange'],
    score:{
        success:0,
        worning:0,
        refresh:0
    },
    time:initialTime,
    count:0,
}


export const WordReducers=(state,action)=>{
    if(action.type==='RandomItem'){
        return {
            ...state,
            word: state.word.sort(()=>Math.random() - 0.5)
        }
    }else if(action.type==='time') {
        return {
            ...state,
            time: state.time - 1,
        }
    }else if(action.type==='setEndtime'){
        return {
            ...state,
            score:{
                ...state.score,
                [action.payload]:state.score[action.payload]+1
            },
            time: initialTime,
            count: state.count+1
        }
    }
    return state
}
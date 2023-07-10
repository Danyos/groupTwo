import {uploadImg} from "./ResumeFeactureName";

export const initalState={
    caverInfo:{
        cover:'',
        name:''
    }
}

export const ResumeReducer= (state,action)=>{
    if(action.type===uploadImg){
        return {
            ...state,
            caverInfo: {
                ...state.caverInfo,
                cover: action.payload.img
            }
        }
    }

    return state
}


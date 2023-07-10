export const uploadImg="uploadImg"
export const uploadimgfunc=function (res){
    return {
        type:uploadImg,
        payload:{
            img:res
        }
    }
}
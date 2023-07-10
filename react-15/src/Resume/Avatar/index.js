import imagesuploadIcon from  './img/cv-profile.svg'
import imagesupload from  './img/Image 20.jpg'
import {useEffect, useReducer, useRef, useState} from "react";
import {initalState, ResumeReducer} from "../../Reducer/Resume";
import {uploadImg, uploadimgfunc} from "../../Reducer/ResumeFeactureName";
const AvatarIndex=()=>{
    let imginput=useRef(null)
    function clickupdlad(){
        imginput.current.click()
    }
    const [resme,despatch]=useReducer(ResumeReducer,initalState)
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            despatch(uploadimgfunc(event.target.result))
        };
        reader.readAsDataURL(file);
    };
    return(
        <>
         <div className='AvatarIndex'>
             <h2>Avatar index</h2>
             <div className='uploadimages'>
                 {
                     resme.caverInfo.cover?(
                       <img src={resme.caverInfo.cover} className="imagesCover"/>
                     ):(
                         <img src={imagesuploadIcon} alt=""/>
                     )
                 }
                 <div className={"upImg"}>
                     <span onClick={clickupdlad}>upload images</span>
                     <input type="file" ref={imginput} accept="image/*" onChange={handleImageUpload} hidden/>
                 </div>
                 {resme.caverInfo.cover&&(
                     <div className={"RemoveImg"} onClick={()=>{
                         despatch(uploadimgfunc(''))
                     }}>
                         x
                     </div>

                 )}
             </div>
         </div>
        </>
    )
}

export default AvatarIndex
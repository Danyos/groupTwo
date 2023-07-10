import AvatarIndex from "./Avatar";
import AvatarInfo from "./CoverInfo";

const ResumeIndex=()=>{
    return(
        <>
            <h2 className='t-center'>Resume index</h2>
            <div className={"avatar"}>
                <AvatarIndex />
                <AvatarInfo />
            </div>
        </>
    )
}

export default ResumeIndex
import ReadingModal from "./Read";

const Cindex=({name,id,url})=>(

    <>
        {
            name==='read'?(
                <ReadingModal url={url} id={id}/>
            ) :name==='edit'?(
                "edit"
            ):name==='delete'?(
                "delete"
            ):""
        }



    </>
)
export  default Cindex
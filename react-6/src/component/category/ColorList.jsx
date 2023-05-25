import * as React from "react";
import {colorList, ThisColorItem} from "../../infoBlock";

const ColorList=({giveId})=>{
    let [myid,setmyid] = React.useState('all')
    return(
        <>
            <ul className="colorOptions">
                <li><b>COLOR</b></li>
                {
                    colorList.map(res=>(
                        <li key={res.id}
                        onClick={()=>{
                            setmyid(res.id)
                            giveId(res.id)
                        } } 
                        
                        ><a href="#" className={myid===res.id?'catActive':''}>{res.title} <span>(<ThisColorItem id={res.id} />)</span></a></li>
                    ))
                }



            </ul>
        </>
    )
}

export default ColorList
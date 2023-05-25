import {AllItem, category, ThisCatItem} from "../../infoBlock";
import * as React from "react";
import {useState} from "react";

export default function CategoryList({giveId}) {
    let [myid,setmyid] = useState('all')

    return (
        <ul className="categoryOptions">
            <li><h2>CATEGORIES</h2></li>
            <li
                onClick={()=>{
                    setmyid('all')
                    giveId('all')
                } }
            >
                <a href="#" className={myid==='all'?'catActive':''}>All  <span>(<AllItem />)</span></a>
            </li>
            {
                category.map(res =>(

                    <li key={res.id} onClick={()=>{
                        setmyid(res.id)
                        giveId(res.id)
                    } } >
                        <a href="#" className={myid===res.id?'catActive':''}>{res.name}  <span>(<ThisCatItem id={res.id} type='length' />)</span></a>
                    </li>

                ))
            }

        </ul>
    )
}
import {useEffect, useState} from "react";
import Tindex from "./thead/Tindex";
import Bindex from "./tbody/Bindex";

function Table({url,config}) {
    const confVal=Object.values(config)
    const confkey=Object.keys(config)
    const confEntrise=Object.entries(config)

    let [item,setitem]=useState(null)
    let [itemHead,setitemHead]=useState(null)

    useEffect(()=>{

        fetch(url)
            .then(response => response.json())
            .then(json =>{
                setitem(json)

               let keys= Object.keys(json[0])
                setitemHead(keys.length>4?keys.slice(0,4):keys)
            } )

    },[])


    return (
        <>
            {
                itemHead&&itemHead?(
                    <table border={1} className={'table'}>
                        <Tindex bar={itemHead} confVal={confVal} />
                        <Bindex bar={itemHead} item={item} confEntrise={confEntrise} url={url} config={config} />
                    </table>
                )
                :
                (
                    <h2>Loading...</h2>
                )
            }
        </>
    );
}

export default Table;

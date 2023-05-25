import CategoryList from "../category/List";
import PriceRange from "../category/PriceRange";
import ColorList from "../category/ColorList";
import * as React from "react";
import {useEffect, useState} from "react";
import { defoultPriceMinMax } from "../../infoBlock";

const FilterIndex =({giveFilter})=>{
    let [FilterItem,setFilterItem] = useState({
        category:"all",
        price:defoultPriceMinMax,
        ColorList:'all'
    })
    useEffect(()=>{
        giveFilter(FilterItem)
    },[FilterItem])
    return (
        <>
            <p>
                {JSON.stringify(FilterItem)}
            </p>
            <br/>
            <br/>
            <br/>
            <CategoryList giveId={(res)=>{
                setFilterItem({
                    ...FilterItem,
                    category:res,
                })

            }
            } />
            <PriceRange giveId={(res)=>{
                setFilterItem({
                    ...FilterItem,
                    price:res,
                })

            }}/>
            <ColorList giveId={(res)=>{
                setFilterItem({
                    ...FilterItem,
                    ColorList:res,
                })

            }}/>

        </>
    )
}


export  default FilterIndex
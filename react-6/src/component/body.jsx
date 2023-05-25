import * as React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MainItems from "./Items/MainItems";
import {useEffect, useState} from "react";
import {productBlock} from "../infoBlock";
import FilterIndex from "./Filter/FilterIndex";

function Body() {
    const [items, setItems] = useState(null);
    let [filter, setfilter] = useState(null)
    //
    useEffect(() => {
        console.log(filter);
        if (filter) {
            setItems(productBlock.filter(function(res2){
                return(
                    ((filter.category === 'all') ? true : res2.category_id === filter.category)
                    && (parseFloat(res2.price)>=filter.price[0] && parseFloat(res2.price)<=filter.price[1])
                    && ((filter.ColorList === 'all') ? true : res2.color_id === filter.ColorList)
                )
            }))
        }

    }, [filter])

    return (
        <>
            <div className="body_contain">
                <div className="body_info">
                    <div className="body_box">
                        <div className="category">
                            <FilterIndex giveFilter={(res) => setfilter(res)}/>
                        </div>
                        <div className="shopItems">
                            <div className="showing_box">
                                <form className='optionForm' action="">
                                    <select className='options' id="sorting" name="sorting">
                                        <option value="volvo">Default sorting</option>
                                        <option value="saab">Sort by popularity</option>
                                        <option value="fiat">Sort by average rating</option>
                                        <option value="audi">Sort by newness</option>
                                        <option value="fiat">Sort by price: low to high</option>
                                        <option value="audi">Sort by price: high to low</option>
                                    </select>
                                </form>
                                <div className='showingBtn'>
                                    <h2>Showing 1–9 of 15 results</h2>
                                    <button className='menu'><MenuIcon sx={{fontSize: 35}}/></button>
                                    <button className='list'><ListAltIcon sx={{fontSize: 35}}/></button>


                                </div>
                            </div>

                            <MainItems items={items}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Body;
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { defoultPriceMinMax } from "../../infoBlock";


const PriceRange = ({giveId}) => {
    function valuetext(value) {
        return `${value}°C`;
    }
    const [value, setValue] =useState(defoultPriceMinMax);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        giveId(newValue)
    };
    return (
        <>
            <div className="range_box">
                <div className='rangeTitle'>
                    <h2>FILTER </h2>
                </div>
                <Box sx={{width: 200}}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min={defoultPriceMinMax[0]}
                        step={50}
                        max={defoultPriceMinMax[1]}
                    />
                </Box>
                <div className='range_price'>
                    <p>PRICE: $<span>{value[0]}</span></p>
                    <p>- $<span>{value[1]}</span></p>
                </div>
            </div>
        </>
    )
}

export default PriceRange
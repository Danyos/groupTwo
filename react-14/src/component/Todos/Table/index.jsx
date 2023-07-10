import TheadTodos from "./Thead";
import TbodyTodos from "./Tbody";

import {useState} from "react";
import Add from "../feacture/Add";

const TableTodos=()=>{

    const langg=[
        {
            id:1,
            name:"armenia",
            code:'am',
            flag:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAEVJREFUSIljYBgFAw0YbzCo/6elBUy0NHzUAqIAo4d5K00jmWWHtD4tzR8GcUBzC1hCJU7R1ALG/zMER4uKYW7BKBh4AAAU/gkDfdJWGwAAAABJRU5ErkJggg==\n',
        },
        {
            id:2,
            name:"Russsia",
            code:'ru',
            flag:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAMAAAD0WI85AAAAG1BMVEXZABLyqAAAM6DRARVmIW0ANKMALqRwZGjppAMfynHbAAAAdElEQVR4nO3PgRGCAAwAsQqC7j8xa/yVZIPMAAAAAAAAvMy5xHyXmGuJOZYQqRGpEakRqRGpEakRqRGpEakRqRGpEakRqRGp2RO5l5jfEvNfYj5LiNSI1IjUiNSI1IjUiNSI1IjUiNSI1IjUiNSI1IjUrIk82p9hqRtG93gAAAAASUVORK5CYII=',
        },
        {
            id:3,
            name:"Eng",
            code:'en',
            flag:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAMAAAD0WI85AAAAG1BMVEXZABLyqAAAM6DRARVmIW0ANKMALqRwZGjppAMfynHbAAAAdElEQVR4nO3PgRGCAAwAsQqC7j8xa/yVZIPMAAAAAAAAvMy5xHyXmGuJOZYQqRGpEakRqRGpEakRqRGpEakRqRGpEakRqRGp2RO5l5jfEvNfYj5LiNSI1IjUiNSI1IjUiNSI1IjUiNSI1IjUiNSI1IjUrIk82p9hqRtG93gAAAAASUVORK5CYII=',
        },
    ]

    return (
        <>
                <ul>
                    {
                        langg.map(lang=>(
                            <li key={lang.id}>
                                <img src={lang.flag} alt=""/>
                                <span>{lang.name}</span>
                            </li>
                        ))
                    }

                </ul>

            <h2>Table List</h2>

            <table>
                <TheadTodos />
                <TbodyTodos />
            </table>

        </>
    )
}
export default TableTodos
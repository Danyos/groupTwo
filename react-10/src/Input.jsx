import './App.css'
import {memo, useEffect, useRef, useState} from "react";
import Counter from "./Counter";

const Input= memo(({title,changeColor,result})=> {

    console.log(title)

    // const divRef=useRef(null)
    // function heanddlerBtn(){
    //     console.log(divRef.current.value)
    // }
    const count=useRef(0)
    count.current++
    const RefInput={
        FirstName:useRef(null),
        LastName:useRef(null),
        Email:useRef(null),
        gender:useRef(null),
        password:useRef(null),
        cpsw:useRef(null),
    }

    let [users, setusers]=useState([]);
    useEffect(()=>{
        if(localStorage['user']){
            setusers(JSON.parse(localStorage['user']))
        }

    },[])
    function handdleSubmit(e){
        e.preventDefault()
        let takeData={
            'FirstName':title??null,
            'LastName':result.surname??null,
            'Email':null,
            'gender':null,
            'password':null,
            'cpsw':null,
        }
        console.log(takeData)
        for (const takeDataKey in takeData) {
            takeData[takeDataKey]=e.target.elements[takeDataKey].value
            if(takeData[takeDataKey].length===0){
                RefInput[takeDataKey].current.innerHTML="Worning "+takeDataKey
            }else{
                RefInput[takeDataKey].current.innerHTML=""

            }
        }

        if(takeData.cpsw===takeData.password && takeData.password.length>2){
            delete takeData.cpsw
            takeData.id=new Date().getTime()
            setusers([
                ...users,
                takeData
            ])
            localStorage['user']=JSON.stringify(users)
        }else{
            console.log("sxal")
        }


    }

    return (
        <>
            {/*<input ref={divRef} />*/}
            {/*<button onClick={heanddlerBtn}>click</button>*/}
            <h2>Input:{ count.current}</h2>
            <h6>{title}</h6>
<Counter />
            <form onSubmit={handdleSubmit}>
                <div>
                    <label htmlFor="nameId">FirstName</label>
                    <input type="text" id='nameId' name='FirstName'/>
                    <span ref={RefInput.FirstName}></span>
                </div>
                <div>
                    <label htmlFor="LastId">LastName</label>
                    <input type="text" id='LastId' name='LastName'/>
                    <span ref={RefInput.LastName}></span>
                </div>
                <div>
                    <label htmlFor="EmailId">Email</label>
                    <input type="email" id='EmailId' name='Email'/>
                    <span ref={RefInput.Email}></span>
                </div>
                <div>
                    <label htmlFor="men">Men</label>
                    <input type="radio" id='men' defaultChecked name='gender' value='man'/>
                    <label htmlFor="Girl">Girl</label>
                    <input type="radio" id='Girl' name='gender' value='Girl'/>
                    <span ref={RefInput.gender}></span>
                </div>

                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" id='password' name='password'/>
                    <span ref={RefInput.password}></span>
                </div>
                <div>
                    <label htmlFor="cpsw">Confirm password</label>
                    <input type="password" id='cpsw' name='cpsw'/>
                    <span ref={RefInput.cpsw}></span>
                </div>
                <div>
                    <button>Register</button>
                </div>

            </form>

        <button onClick={()=>changeColor(`green`)}>App color change</button>
        </>
    );
})

export default Input;
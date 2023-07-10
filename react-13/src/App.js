import logo from './logo.svg';
import './App.css';
import Main from "./Main";
import {useState} from "react";
import TodosIndex from "./Todos/Index";

function App() {
    // let [Mstate,setMstate]=useState(true)


  return (
    <div className="App">
    <TodosIndex />





        {/*{Mstate&&<Main />}*/}
        {/*<button onClick={()=>{*/}
        {/*    setMstate(!Mstate)*/}
        {/*}}>X</button>*/}
    </div>
  );
}

export default App;

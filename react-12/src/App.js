import './App.css';
import {useRef} from "react";
import ExampleComponent from "./ExampleComponent";
import Example2Component from "./Example2Component";

function App() {
    let mytitle = useRef(null)

    function hanndleTurn(turn) {
        mytitle.current.setAttribute('class', `title ${turn}`)

    }

    return (
        <div className="App">
            <h1 className="title t-center" ref={mytitle}>barev</h1>
            <button onClick={() => hanndleTurn('t-left')}>Left</button>
            <button onClick={() => hanndleTurn('t-center')}>Center</button>
            <button onClick={() => hanndleTurn('t-right')}>Right</button>

            {/*<ExampleComponent/>*/}
            <Example2Component/>
        </div>
    );
}

export default App;

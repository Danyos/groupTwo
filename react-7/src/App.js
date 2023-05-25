import './App.css';
import Page1 from "./page/Page1";
import {InfoContext} from "./createContext";

function App() {
  return (
    <div className="App">
        <InfoContext.Provider  value={{
            title:"number",
            color:'red'
        }}>
            <Page1/>
        </InfoContext.Provider >

    </div>
  );
}

export default App;

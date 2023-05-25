import Page2 from "./Page2";
import {useContext} from "react";
import {InfoContext} from "../createContext";

function Page1() {
    const {title}=useContext(InfoContext)
    return (
        <div className="App">
            <h2> {title} 1</h2>
            <Page2 />
        </div>
    );
}

export default Page1;
import {useContext} from "react";
import {InfoContext} from "../createContext";

function Page4() {
    const {title}=useContext(InfoContext)
    return (
        <div className="App">
            <h2>{title} 4</h2>
        </div>
    );
}

export default Page4;
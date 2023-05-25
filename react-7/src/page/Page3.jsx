import Page4 from "./Page4";
import {InfoContext} from "../createContext";

function Page3() {
    return (
        <div className="App">
            <InfoContext.Consumer>
                {
                    ({title,color})=>(
                       <>
                           <h2 style={{color:color}}>{title} 3</h2>

                       </>
                    )
                }

            </InfoContext.Consumer>

            <Page4 />
        </div>
    );
}

export default Page3;
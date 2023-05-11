
import './App.css';
import Heading from "./component/Heading";
import BoxItem from "./component/Box";

function App() {
    const info=['ԱՌԱՔԱՆՈՒՆ','ՀԵՏԵՎԵԼ','Մուտքագրեք']
    return (
        <div className="App">
            <div>
                <Heading
                title={" ԱՌԱՔԱՆՈՒՆ"}
                sloganStart={"ՀԵՏԵՎԵԼ"}
                desc={" Մուտքագրեք բեռնակրման համարը՝ առաքման ընթացքին հետևելու համար։\n"}
                />
                <input type="text"/>
                <button>search</button>
            </div>

            <div>
                <Heading
                    title="ԱՄԵՆԱԹԱՐՄ ՆՅՈՒԹԵՐԸ ՄԵՐ ԲԼՈԳԻՑ"
                    sloganEnd={"ԲԼՈԳԻՑ"}
                    url={'https://google.com'}
                    desc="Մենք հավաքել ենք ամենատարբեր հետաքրքիր նյութերը, որոնք կլինեն Ձեր ուղեկիցը օնլայն գնումների աշխարհում"
                />
                <div className="row">
                    {
                        info.map((res,index)=>(
                            <BoxItem  key={index}  title={res}/>
                        ))
                    }


                </div>



            </div>
            <div>


                <Heading
                    title="ԻՆՉՊԵՍ ՕԳՏՎԵԼ"
                    desc="Ինչպե՞ս կատարել օնլայն գնումներ և ստանալ Հայաստանում արագ և ապահով"
                />
                <div className="row">
                  <BoxItem title={"ԻՆՉՊԵՍ 4"}/>
                  <BoxItem title={"ԻՆՉՊԵՍ 5"}/>
                  <BoxItem title={"ԻՆՉՊԵՍ 6"}/>

                </div>
            </div>
        </div>
    );
}

export default App;

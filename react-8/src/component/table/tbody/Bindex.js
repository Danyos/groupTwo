import Cindex from "../configuration/CIndex";

function Bindex({bar,item,confEntrise,url}) {
    console.log(confEntrise)
    return (
            <tbody>
            {
                item&& item.map(res=>(
                    <tr key={res.id} >
                        {
                            bar.map((headName,i)=>(
                                <td key={i}>
                                    {res[headName]}
                                </td>
                            ))
                        }
                        <td>
                            {
                                confEntrise.map((res2,i)=>(
                                    res2[1]?(
                                        <Cindex key={i} id={res.id} url={url}  name={res2[0]}/>
                                    ):''
                                ))

                            }
                        </td>
                    </tr>
                ))
            }

            </tbody>
    );
}

export default Bindex;
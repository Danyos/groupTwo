import {useEffect, useState} from "react";
import  './App.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditModal from "./EditMoad";
function App() {
    let [user,setuser]=useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(json=>json.json()).then((res)=>{
            setuser(res)
        })
    },[])

    let [editId,seteditId]=useState(null)

function handleEditclick(id){
    seteditId(id)
}


    return (
        <>

            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>config</th>
                    </tr>

                </thead>
                <tbody>
                {
                    user&&user.map(res=>(
                        <tr key={res.id}>
                            <td>{res.id}</td>
                            <td>{res.name}</td>
                            <td className='config'>
                                <span><DeleteIcon /></span>
                                <span onClick={()=>handleEditclick(res.id)}><EditIcon  /></span>
                            </td>
                        </tr>
                    ))
                }

                </tbody>
            </table>

            <EditModal confId={editId}  getup={
                function (res){
                    setuser(user.map(res2=>{
                        if(res2.id===editId){
                            res2.name=res

                        }

                        return res2
                    }))
                }
            }/>
        </>
    );
}

export default App;
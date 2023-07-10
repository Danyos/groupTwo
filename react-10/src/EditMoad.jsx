import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useEffect, useState} from "react";
import {TextField} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function EditModal({confId,getup}) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [user, setuser] = useState({
        name: ''
    });

    function handleupdate() {
    if(user.name.length>3){
        getup(user.name)
        handleClose()
        setuser({
            name: ''
        })
    }
    }

    useEffect(() => {

        setOpen(!!confId)
        if (confId) {
            fetch('https://jsonplaceholder.typicode.com/users/' + confId)
                .then(json => json.json()).then((res) => {
                setuser(res)
            })
        }
    }, [confId])


    return (
        <div>
            {
                user && (
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <input value={user.name}
                                   onChange={(e) => (
                                       setuser({
                                           ...user,
                                           name: e.target.value
                                       })
                                   )


                                   }/>

                            <button onClick={handleupdate}>Update</button>
                        </Box>
                    </Modal>
                )
            }

        </div>
    );
}
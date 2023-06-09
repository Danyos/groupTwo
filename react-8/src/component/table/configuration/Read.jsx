import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";

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

export default function ReadingModal({id,url}) {

    let [infoVal, setinfoVal]=useState(null)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(()=>{
        if(open){
            fetch(`${url}/${id}`)
                .then(response => response.json())
                .then(datas=>{
                    setinfoVal(Object.values(datas))
                })
        }
    },[open])
    return (

        <div>
            <Button onClick={handleOpen}>Reading</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {
                                infoVal && (
                                    infoVal.map((res,i)=>(
                                        <div key={i}>
                                          <span>
                                              {(typeof res==='string' || typeof res==='number') && res}
                                          </span>
                                        </div>
                                    ))

                                )
                            }

                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

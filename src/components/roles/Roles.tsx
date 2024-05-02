import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Input } from 'antd';
import style from './Roles.module.scss'
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';



export default  function Roles(){
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };


    return (
        <React.Fragment>
        <Button  onClick={handleOpen} variant="contained">New Role</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <div className={style.modalBody}>
            <div className={style.innerContent}>

                <div className={style.header}>
                    <h4 id="child-modal-title">Add role</h4>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </div>

                <label>Name</label>
                <Input />
                <Button style={{marginTop: '1em'}}>Add Role</Button>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
}   
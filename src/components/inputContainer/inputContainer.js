import { Collapse } from '@mui/material';
import React from 'react';
import InputCard from '../inputCard/InputCard';
import { useState } from 'react';
import "./styles.scss";

function InputContainer({type , listId}) {
    const [open, setOpen] = useState(false);
    return (
        <div className='input-container'>
            <Collapse in={open}>
                <InputCard type={type} setOpen={setOpen} listId={listId}/>
            </Collapse>
            <Collapse in={!open}>
                <div className='input-content'>
                    <button onClick={()=>setOpen(prev => !prev)}>
                        {type==="card" ? "+ Add card" : "Add List"}
                    </button>
                </div>
            </Collapse>
        </div>
    )
}

export default InputContainer
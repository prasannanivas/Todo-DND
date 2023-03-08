import { Delete, DeleteOutlineRounded } from '@mui/icons-material';
import { TextareaAutosize } from '@mui/material';
import React, { useContext, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd';
import storeAPI from '../../utils/storeAPI';
import "./styles.scss";

function Card({card , index, listId}) {

    const [open, setOpen] = useState(false);
    const [newTitle, setNewTitle] = useState(card.title);

    const {removeCard, updateCard} = useContext(storeAPI);

    const handleOnBlur = () => {
        setOpen(prev=>!prev);
    }
    return (
    <Draggable draggableId={card.id} index={index} >
        {
            (provided)=>(
                <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                >
                    <div className='card-content'>
                        {open? ( <TextareaAutosize 
                                    type="text" 
                                    value={newTitle} 
                                    className="input-card-title" 
                                    onChange={e=>setNewTitle(e.target.value)}
                                    onKeyDown = {e=>{
                                        if(e.key === "Enter"){
                                            handleOnBlur()
                                        }
                                        return
                                    }}
                                    autoFocus
                                    onBlur={handleOnBlur}
                                /> ) : (<div onClick={()=>setOpen(prev=>!prev)} className="card-title-container">
                                        <p>{card.title}</p>
                                        <button onClick={()=>{
                                            removeCard(index, listId, card.id);
                                        }}>
                                             <DeleteOutlineRounded />
                                        </button>
                                     </div>)
                        }
                    </div>
                </div>
            )
        }
    </Draggable>
  )
}

export default Card;
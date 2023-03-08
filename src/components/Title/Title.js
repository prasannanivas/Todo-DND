import { MoreVert } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import ClickOutComponent from 'react-onclickout';
import storeAPI from '../../utils/storeAPI';
import "./styles.scss";

function Title({title, listId}) {

    const [open, setOpen] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [newTitle, setNewTitle] = useState(title);


    const {updateListTitle, deleteList} = useContext(storeAPI)


    const handleOnBlur = () => {

        updateListTitle(newTitle, listId)
        setOpen(prev=> !prev);
    }

  return (
    <>
        {open? (
            <div>
                <input 
                    type = "text"
                    className='input-title'
                    value={newTitle}
                    onChange={(e)=> setNewTitle(e.target.value)}
                    onBlur={handleOnBlur}
                    onKeyDown={(e)=>{
                        if(e.key === "Enter"){
                            handleOnBlur();
                        }
                        return
                    }}
                />
            </div>
        ):(
            <div className='editable-title-container'>
                <h2 onClick={()=>setOpen(prev=>!prev)} className='editable-title'>{newTitle}</h2>
                <button className='list-button' onClick={()=>setOpenOptions(prev=>!prev)}>
                    <MoreVert/>
                </button>
                {
                    openOptions && (
                        <ClickOutComponent onClickOut={(e)=>{
                            setOpenOptions(prev => !prev);
                        }}>
                            <ul className='menu-card'>
                                <li onClick={()=>{
                                    deleteList(listId);
                                    setOpenOptions(prev => !prev);
                                }}>Delete List</li>
                                <li onClick={()=>{
                                    setOpenOptions(prev => !prev);
                                }}>Edit List</li>
                            </ul>
                        </ClickOutComponent>
                    )
                }
            </div>
        )
        }
    </>
  )
}

export default Title
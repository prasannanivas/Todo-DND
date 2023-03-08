import React from 'react'
import { Bookmark } from '@mui/icons-material'
import "./styles.scss"


const index = () => {
  return (
    <nav>
        <div className='container'>
            <Bookmark />
            <h2>Todo-board</h2>
        </div>
    </nav>
  )
}

export default index
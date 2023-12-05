import {useState} from 'react'
import './Todo.css'
const List = ({name}) => {
    const[line, setLine]= useState(false)
    const taskCompleted=()=>{
        setLine(true)
    }
  return (
    <div className='item'>
        <p  onClick={taskCompleted} className='name' style={{textDecoration:line?'line-through':null}}>{name}</p>
    </div>
  )
}

export default List
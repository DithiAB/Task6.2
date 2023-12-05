import  { useState } from 'react'
import List from './List'
import './Todo.css'
const Todo = () => {
    const[data, setData]= useState('')
    const[item, setItem]= useState([])
    const[toggle, setToggle]= useState(true)
    const[edit, setEdit]= useState(null)
    const[newItem, setNewItem]= useState([])
   
    const addItem=()=>{
        if(!data){
            console.log('enter data')
      
        }
        else{
            const allData= {id: new Date().getTime().toString(), name:data}
            setItem([...item,allData])
            setData('')
        }
      
    }
   


    const addNewItem=()=>{
        if(!newItem){
            console.log('enter data')
        }else if(newItem && !toggle){
            setItem(
                item.map((elem)=>{
                    if(elem.id===edit){
                        return{...elem, name:newItem}
                    }
                    return elem;
                })
            )
            setToggle(true) 
            setEdit(null)
            setNewItem('')
        }
        
    }
    const cancelItem=()=>{
        if(!newItem){
            console.log('enter data')
        }else if(newItem && !toggle){
            setItem(
                item.map((elem)=>{
                    if(elem.id===edit){
                        return{...elem, name:newItem}
                    }
                    return elem;
                })
            )
        }
         else{
            setItem([...item,newItem])
            setData('') 
        }
         setToggle(true) 
         setNewItem('')
    }


    const deleteItem=(index)=>{
        const filteredItem=item.filter((elem)=>{
            return index!==elem.id;
        })
        setItem(filteredItem)
    }
   
   
    const editItem=(id)=>{
        
        let newEditItem= newItem.find((elem)=>{
            return elem.id===id
        })
        
        setToggle(false)
        setNewItem(newEditItem)
        setEdit(id)
    }
  
     

  return (
    <div className='main'>
        <h2>Todo List</h2>
        <div className='add'>
        <div className='input-section'>
        <input 
        type="text"
        placeholder='New Todo'
        value={data}
        onChange={(e)=>setData(e.target.value)}
        />
        </div>
        <button className='addtodo' onClick={addItem}><span style={{fontSize:'10px'}}>ADD TODO</span></button>
        </div>
        <div className='todolist'>
            {item.map((elem)=>{
                 return <div key={elem.id} className='list'>
                <List name={elem.name}/>
                <div className='icon'>
                <span className='pen'style={{color:"wheat", marginTop:"25px"}} ><i onClick={()=>editItem(elem.id)} className="fa-solid fa-pencil"></i></span>
                <span style={{color:"wheat", marginTop:"25px"}} onClick={()=>deleteItem(elem.id)}><i className="fa-solid fa-trash-can"></i></span>
                </div>
               </div>

            })}
           
        </div>
        {toggle ? null: 
        <div className='add'>
        <div className='input-section'>
           
        <input 
        type="text"
        placeholder='Edit current Todo Item'
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        />
       
        </div>
                  
         <button className='save' onClick={addNewItem}><span style={{fontSize:'10px'}}>SAVE</span></button>
        <button className='cancel' onClick={cancelItem}><span  style={{fontSize:'10px'}}>CANCEL</span></button>
      
        </div>
    }  
    </div>
  )
}


export default Todo;
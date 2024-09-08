import React, { useState } from 'react'

function NewTask({work}) {
  const [task,setTask]=useState("")
  return (
    <div className='input' >
    <input placeholder="Enter The Task"
    value={task}onChange={(e)=>setTask(e.target.value)}
    /> 
    <button className='Add' onClick={()=>{
work(task)
setTask("")
}

} >+</button> 
    </div>
  )
}

export default NewTask

import React from 'react'
import { useState } from 'react'
function ColorChanger({i,changeColor,initialcolor}) {
 
  return (
    <>
    
   <div className="boaed"  
  style={{backgroundColor: changeColor}}
  onClick={changeColor}
    >{i}
    </div>   
    
    </>
  )
}

export default ColorChanger

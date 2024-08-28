
import { useState } from 'react'
import './App.css'
import ColorChanger from './Components/ColorChanger'
import Temperature from './Components/Temperature'

function App() {
  const [initialcolor,setChangeColor]=useState(
    Array(9).fill("red")
  )
 

const[enteredinput,setEnteredinput]=useState("")
const[error,setError]=useState()
const handleError=(val)=>{
  if(val>=0 && val<9){
    setError("")
}
else{

  setError("Please enter a valid number between 0 and 9")
 
}
}
const changeColor=(index)=>{
 const val=parseInt(enteredinput)
setChangeColor(prevcolor=>{
  const newColors=[...prevcolor]
  newColors[val]="yellow"
  console.log(newColors)
  return newColors;
})
    
  }
  return (
    <>
<div className="inputandbtn">
<input value={enteredinput} onChange={(e)=>setEnteredinput(e.target.value)}type="number" />
{
error?

<p>{error}</p>:null
}
<button onClick={(e,i)=>{
  handleError(enteredinput)
  changeColor(i)
}
}
>Color Me</button>
<button onClick={()=>{
  setChangeColor( Array(9).fill("red"))
}}>Clear Me</button>
</div>

<div className="main-div">
 {
initialcolor.map(( color,i)=>{
    return <ColorChanger key={i}  i={i}enteredinput={enteredinput}  initialcolor={initialcolor} changeColor={color} />
  })
 
 }

</div>
<h3>{changeColor}</h3>
    </>
  )
}
export default App

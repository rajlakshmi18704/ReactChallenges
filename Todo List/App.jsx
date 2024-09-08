import { useState } from 'react'

import './App.css'
import GroceryList from './Components/GroceryList'
import NewTask from './NewTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>ToDO LIST</h1>
   
     <div className='items'>
   
     <GroceryList/>
    </div>
    </>
   
  )
}

export default App

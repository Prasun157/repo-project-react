import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input1 , setinput] = useState("")
  const [radiotoggle, settoggle]= useState("This here is the para")
  

  return (
    
    <div>
      <div id="l1"><h2>Current no. {count}</h2>
      <button onClick={() => {setCount(count+1)}}>click here for Increment </button>
      
      <button onClick={() => {setCount(count-1)}}>click here for Decrement </button>
      </div>
      <div id="l1">
        <h2>Input is {input1}</h2>
        <input type="text"   onChange={(e) => setinput(e.target.value)}/>
        
      </div>

      <div id="l1">
        <p >{radiotoggle}</p>
        <input type="checkbox" onChange={() => {settoggle("")}} value={true} />
        click here to hide
        
       
        

      </div>
      
    </div>
  )
}

export default App

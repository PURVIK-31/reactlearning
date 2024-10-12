import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div> press here to increase the counter by one : 
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={()=> setCount(0)}>reset</button>
     </div>
    </>
  )
}

export default App

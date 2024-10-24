import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Function to increment the count
  const increase = () => {
    setCount(count + 1); // Use the setter function to update the state
  }

  return (
    <>
      <h1>The count value increases by 1: {count}</h1>
      <button onClick={increase}>Increase Count</button>
    </>
  )
}

export default App;

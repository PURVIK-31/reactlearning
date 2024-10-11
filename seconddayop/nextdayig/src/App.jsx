import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
const arr = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div>
      {arr.map((value)=> <h1>arr value is {value}</h1>)}
    </div>
  )   
}

export default App

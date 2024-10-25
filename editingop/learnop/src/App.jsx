import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
export default function App() {
  const [count, countupdate] = useState(0) 
  function update(){
    countupdate(count+1)
  }
  return (
 <h1> hi there buddies </h1>
  )
}
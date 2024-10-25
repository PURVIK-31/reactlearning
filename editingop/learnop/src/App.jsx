import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
export default function App() {
const handlesubmit = (event)=>{
event.preventDefault();
}
const name = useRef(null)
const age = useRef(null)
  return (
  <>
  <div className='m-4 p-3'>
   <form action="" onSubmit={handlesubmit}>
    <input ref={name} type="text" placeholder="Enter your name" />
    <input ref={age} type="text" placeholder="Enter your age" />
    <input type="submit" />
   </form>
   </div>
 </>
  )
}

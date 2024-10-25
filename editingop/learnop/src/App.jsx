import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
export default function App() {
const handlesubmit = (event)=>{
event.preventDefault();
console.log(name.current.value,age.current.value);
console.log("this concluded the first way of form handling through useref hook in react !")
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

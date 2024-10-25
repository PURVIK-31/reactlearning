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
    <h1 className="text-3xl font-bold bg-gray-700 flex-shrink">
yohohohohho the state is  {count}
<button className='m-3 bg-slate-100' onClick={update}> click guruji </button>
    </h1>
  )
}
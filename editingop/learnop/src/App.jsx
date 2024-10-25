import React, { useState } from 'react'

function App() {
  const [val,setval] = useState({name:"", email:""})
  return (
    <div className='m-4 p-7'>
      <form action="" onSubmit={(e)=> {
        e.preventDefault()
        console.log(val)
      }}>
        <input onChange={(e)=>setval({...val,name :e.target.value})} type="text" placeholder= 'WRITE HERE !' />
        <input onChange={(e)=>setval({...val,email :e.target.value})} type="email" placeholder= 'WRITE  mail HERE !' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App

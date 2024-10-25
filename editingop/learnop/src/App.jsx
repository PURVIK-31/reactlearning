import React, { useState } from 'react'

function App() {
  const [val,setval] = useState({name:""})
  return (
    <div className='m-4 p-7'>
      <form action="" onSubmit={(e)=>{
        e.preventDefault()
        console.log(val)
      }}>
        <input onChange={(e)=>setval({name :e.target.value})} type="text" placeholder= 'LIKH YHA MERE BHAI !' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App

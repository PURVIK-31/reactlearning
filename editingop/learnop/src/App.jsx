import React, { useState } from 'react'

function App() {
  const [val,setval] = useState({name:""})
  return (
    <div className='m-4 p-7'>
      <form action="">
        <input onChange={(e)=>{console.log(e.target.value)}} type="text" placeholder= 'LIKH YHA MERE BHAI !' />
      </form>
    </div>
  )
}

export default App

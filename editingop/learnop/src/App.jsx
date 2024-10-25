import React from 'react'
import { useForm } from 'react-hook-form'

function App() {
  const {register, handleSubmit}= useForm()
  return (
    <div className='m-6 p-5 bg-slate-200'>
      <form action="" onSubmit={handleSubmit(data=>console.log(data))}>
        <input {...register("name")}type="text" placeholder='ENTER NAME HERE' />
        <input {...register("email")} type="text" placeholder='ENTER EMAIL HERE' />
        <input type='submit'/>
      </form>
    </div>
  )
}

export default App

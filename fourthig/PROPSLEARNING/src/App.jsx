import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import navbar from "./components/navbar";


function App() {
  let {name,updtaename} = useState("phoe");
  updtaename("phoegod");

let variablee= "phoe";
let inputgiven = document.querySelector(input)
  return (
    <>
     hi there 
     <div>
      return <h1> the name of the god is : {updtaename(inputgiven)} </h1>
      </div> 
      <navbar />
    </>
  )
}

export default App

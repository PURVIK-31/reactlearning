import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from '../components/Card.jsx'
import './App.css'
function App() {
  const data = [{
    name: "phoe",
    age: 23,
    gender: "male",
  },
  {
    name: "loml",
    age: 23,
    gender: "female",
  }]


  return (
    <>
  <Card />
  
  </>
  )
}

export default App

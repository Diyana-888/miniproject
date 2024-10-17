import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import Bmi from './Components/Bmi'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='log' element={<Login/>}/>
      <Route path='bmi' element={<Bmi/>}/>
    </Routes>
      
      
    </>
  )
}

export default App

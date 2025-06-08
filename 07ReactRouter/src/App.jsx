import { useState } from 'react'

import './App.css'
import { Routes,Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Login from './Components/Login'

function App() {


  return (
   <>
   <div className='parnetcontainer'>
   <Header/>
   <div className='container'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/aboutUS' element={<AboutUs/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </div>
    </div>
   </>
  )
}

export default App

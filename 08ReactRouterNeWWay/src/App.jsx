import { useState } from 'react'

import './App.css'

import Rootlayout from './Components/RootLayout'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Login from './Components/Login'
import Contact from './Components/Contact'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
function App() {
  const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}> {/* Wrap child routes inside Rootlayout */}
    <Route index element={<Home />} />  {/* Default route */}
    {/* <Route path='/home' element={<Home />} /> */}
    <Route path="aboutus" element={<AboutUs />} />
    <Route path="contact" element={<Contact />} />
    <Route path="login" element={<Login />} />
  </Route>
  )

  )
  return (

   <>
  
      <RouterProvider  router={router} />
   </>
  )
}

export default App

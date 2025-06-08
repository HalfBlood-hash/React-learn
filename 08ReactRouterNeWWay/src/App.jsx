import { useState } from 'react'

import './App.css'

import Rootlayout from './Components/RootLayout'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Login from './Components/Login'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
function App() {
  const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}> {/* Wrap child routes inside Rootlayout */}
    <Route index element={<Home />} />  {/* Default route */}
    <Route path="aboutUS" element={<AboutUs />} />
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

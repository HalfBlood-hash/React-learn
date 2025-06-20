import { useState } from 'react'

import './App.css'

import Rootlayout from './Components/RootLayout'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Login from './Components/Login'
import ContactInfo from './Components/ContactInfo'
import ContactForm from './Components/ContantForm'
import ContactLayout from './Components/ContactLayout'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import NotFound from './Components/NotFound'
import JobsLayout from './Components/jobsLayout'
import Jobs, { jobloader } from './Components/Jobs'
import JobDetails, { JobDetailsLoader } from './Components/JobDetails'
import JobError from './Components/JobError'

function App() {
  const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}> {/* Wrap child routes inside Rootlayout */}
    <Route index element={<Home />} />  {/* Default route */}
    {/* <Route path='/home' element={<Home />} /> */}
    <Route path="aboutus" element={<AboutUs />} />
    <Route path="contact" element={<ContactLayout />} >
      <Route path='info' element={<ContactInfo/>} />
      <Route path='form' element={<ContactForm/>} />
    </Route>
    <Route path="login" element={<Login />} />
    <Route path='jobs' element={<JobsLayout/>} >
    <Route index element={<Jobs/>}  loader={jobloader} />
    <Route path=':id' element={<JobDetails/>} loader={JobDetailsLoader} errorElement={<JobError/>} />
    </Route>
    <Route path='*' element={<NotFound/>}/>
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

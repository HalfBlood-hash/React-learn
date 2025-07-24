
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider   } from 'react-router-dom'
import './App.css'
import { About, Home, Login, SignUp } from './Pages/page'
import RouterLayout from './Layout/RouterLayout'

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route  path='/' element={<RouterLayout/>} >
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/sign' element={<SignUp/>}/>
      </Route>
  ))
  return (
    <>
     <RouterProvider  router={router} />
    </>
  )
}

export default App

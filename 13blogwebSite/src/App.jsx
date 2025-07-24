
import { useEffect, useState } from 'react'
import './App.css'
import {login,logout} from "./Reduxslice/authSlice"
import {useDispatch} from "react-redux"
import  authServices from "./appwrite/auth"
import { Header,Footer } from './components/indes'
function App() {
  const [loading,setLoading]=useState(false);
  const dispatch=useDispatch()
  useEffect(()=>{
    authServices.getCurrentUser()
    .then((userData)=>{
      console.log(userData)
      if(userData)
      {
        console.log("ok")
        dispatch(login(userData))
      }
      else{
        console.log("satyam")
        // dispatch(logout())
      }
    })
    .finally(()=>setLoading(false));

  },[])
  return !loading? (
    <>
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        {/* TODO:  <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
    </>
  ):null
}

export default App

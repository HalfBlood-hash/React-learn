import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Level1Form from './components/level1Form'
import Level2Form from './components/Level2Form'
import Level3Form from './components/Level3Form'
import Level4form from './components/Level4Form'
function App() {
  
  const[formdata,setformdata]=useState({})
  const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(formdata)
  }
  const handleChange=(e)=>{
     
      setformdata({...formdata ,[e.target.name]:e.target.value})
  }
  return (
    <>
     
     
      <div className='divhain'>
      <Level1Form/> 

      </div>
      <div className='divhain'>
      <Level2Form handleChange={handleChange} handleSubmit={handleSubmit} formdata={formdata} label="name"   />  
      </div>
      <Level3Form/>
      <div className='divhain'>

      </div>
      <div className='divhain'>

      </div>
      <div className='divhain'>
      <Level4form/>
      </div>
    </>
  )
}

export default App

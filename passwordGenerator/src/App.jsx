import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [characterAllowed,setCharacterAllowed]=useState(false)
  const [password,setPassword]=useState('')

  const generatorPassword=useCallback(()=>{
    let pass=""
    let str="QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjkloiuytrewq"
    if(numberAllowed) {
      str+=1234567890
    }
    if(characterAllowed) {
      str+=",./[]{}*&^%$#@!"
    }
    for(let i=0;i<length;i++)
    {
      let randomIndex=Math.floor(Math.random()*str.length)
      pass+=str.charAt(randomIndex);
    }
    setPassword(pass)
  },[numberAllowed,characterAllowed,length,setPassword])

  const passRef=useRef(null)
  const copyClickBoard=useCallback(()=>{
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0,3)  //to select on paticular range
    window.navigator.clipboard.writeText(password)
  },[password])
useEffect(()=>{
  generatorPassword()
},[length,numberAllowed,characterAllowed,generatorPassword])

  return (
    <>
      
        <div className='w-full px-4 bg-black text-white py-6'>
         <h1 className='text-4xl text-center mb-4'>Password Generator</h1>
         <input type="text" placeholder='password' className='rounded p-1 text-black'value={password} ref={passRef} readOnly/>
         <button className='bg-blue-600 py-1 rounded px-2' onClick={copyClickBoard}>copy</button>
         <div className='my-6'>
          <input type="range" 
          name="" id="" 
          min={6}
          max={20}
          
          className='cursor-pointer mx-1' 
          onChange={(e)=>{setLength(e.target.value)}} />
          <label className='mx-2'>Length {length}</label>
          <input type='checkbox' onChange={()=>{setNumberAllowed((prev)=>!prev)}}  id='number' defaultChecked={numberAllowed} />
          <label className='mx-2' htmlFor='number'>Number</label>
          <input type='checkbox' onChange={()=>{setCharacterAllowed((prev)=>!prev)}} id='character' defaultChecked={characterAllowed} />
          <label className='mx-2' htmlFor='character'>Special Character</label>
          </div>
         </div> 
    </>
  )
}

export default App

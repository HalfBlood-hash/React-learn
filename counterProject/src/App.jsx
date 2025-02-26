import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] =useState(10)
  const incCounter=()=>{
    if(counter>19)
    {
      counter=20
    }
    else
    {
      counter++;
    }
    setCounter(counter);
    // console.log(counter)
  }
  const descCounter=()=>{
    if(counter<1)
      {
        counter=0
      }
      else
      {
        counter--;
      }
    setCounter(counter--);
    // console.log(counter)
  }

  return (
    <>
    <h1>Chai aur react {counter} </h1>
    <button onClick={incCounter}>Increase Conter</button>
    <button  onClick={descCounter}>Decrease Counter</button>
      
     
    </>
  )
}

export default App

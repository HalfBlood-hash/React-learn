import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div style={{backgroundColor:color}} className='w-screen h-screen'>
        <div>
          <button onClick={()=>setColor("red")}  >RED</button>
          <button onClick={()=>setColor("blue")}  >Blue</button>
          <button onClick={()=>setColor("green")}  >Green</button>
        </div>
      </div>
    </>
  )
}

export default App

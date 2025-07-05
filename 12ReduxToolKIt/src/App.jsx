import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Componets/AddTodo'
import Todos from './Componets/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h2>React Redux Toolkit</h2>
   <Todos/>
   <AddTodo/>
   </>
  )
}

export default App

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
  
   const [theme,setTheme]=useState("light")
   const themeMode = theme; // ✅ Add this
   const darkTheme=()=>{
      setTheme("dark");
   }
   const lightTheme=()=>{
    setTheme("light");
   }

   useEffect(()=>{
      document.querySelector('html').classList.remove("light","dark")
      document.querySelector('html').classList.add(theme);
   },[theme])
  return (
    <>

    <ThemeProvider  value={{themeMode,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/*card component8*/}
            <Card/>
          </div>
        </div>
      </div>
      </ThemeProvider>
    </>
  )
}

export default App

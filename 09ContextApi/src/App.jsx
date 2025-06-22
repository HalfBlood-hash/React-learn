import './App.css'
import Profile from './Components/Profile'
import Login from './Components/Login'
import UserContextProvider from './Context/User/UserContextProvider'
function App() {


  return (
   <UserContextProvider>
   
   <h3>This is context api</h3>
   <Login/>
   <Profile/>
   </UserContextProvider>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [city1 ,setCity]=useState([])
  const [count, setCount] = useState(0)

  let papaarray=[
    {name:"pakistan",city:["laohare", "kacrhi"]},
    {
      name:"bangldes", city:["dhaka","chikkgaon"]}
  ]
  const handleFunction=(e)=>{
    let cityarray
    console.log("hleldfslk");
    console.log(e.target.value);
    let country=e.target.value;
    cityarray=papaarray.find((item)=>
      item.name===country
  )
  // return country?country.city:[]
  setCity(cityarray.city)
  console.log(cityarray.city)
}


  return (
    <>
        <select onChange={handleFunction}>
          <option>country</option>
          {
              papaarray.map((beta,index)=>(
                <option key={index}>{beta.name}</option>
              ))
            }
        </select>
      
        <select>
          <option value="">cities</option>
          {
           city1.map((cities,index)=>(
              <option key={index}>{cities}</option>
            ))
          }
        </select>
    </>
  )
}

export default App

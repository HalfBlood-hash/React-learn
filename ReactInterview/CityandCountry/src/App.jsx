import { useState } from 'react';
import './App.css';

function App() {
  const [city1, setCity] = useState([]);
  const [area,setArea]=useState([]);

  const papaarray = [
    { name: "pakistan", city: ["lahore", "karachi"] ,area:["sindh","baloch"]},
    { name: "bangladesh", city: ["dhaka", "chittagong"] ,area:["upper","costal"]}
  ];

  const handleFunction = (e) => {
    console.log("hleldfslk");
    console.log(e.target.value);
    
    let country = e.target.value;
    let cityarray = papaarray.find((city) => city.name === country);
    let areasArray=papaarray.find((area)=>area.name===country)
    console.log(areasArray)
    console.log(cityarray)
    if(areasArray)
    {
      setArea(areasArray.area)
    }
    else{
      setArea([])
    }
    if (cityarray) {
      setCity(cityarray.city);
    } else {
      setCity([]); // Reset the cities if no match is found
    }
  };

  return (
    <>
      <p>Hello</p>
      <select onChange={handleFunction}>
        <option>country</option>
        {papaarray.map((beta, index) => (
          <option key={index}>{beta.name}</option>
        ))}
      </select>

      <select>
        <option value="">cities</option>
        {city1.map((cities, index) => (
          <option key={index}>{cities}</option>
        ))}
      </select>
      <select>
        <option value="">Select area</option>
          {
            area.map((areas,index)=>(
            <option key={index  }>{areas}</option>
            ))
          }
      </select>
    </>
  );
}

export default App;

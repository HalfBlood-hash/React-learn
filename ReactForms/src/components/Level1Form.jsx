
import React,{ useState} from 'react'

export default function Level1Form()
{
    const[formdata,setformdata]=useState({})
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
    }
    const handleChange=(e)=>{
       
        setformdata({...formdata ,[e.target.name]:e.target.value})
    }
    return(
        <>
        <form onSubmit={handleSubmit} className='mt-7'>

        
        <div>
            <label htmlFor="name">Name</label>
            <input name='name' placeholder='name' type='text' onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="age">Age</label>
            <input name='age' placeholder='age' type='number' onChange={handleChange}/>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
        </form>
        </>
    )
}
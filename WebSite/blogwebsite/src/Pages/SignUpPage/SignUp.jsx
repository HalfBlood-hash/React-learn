
import React, { useState } from 'react'
import { Container,Input,Button } from '../../Component/component'

export default function SignUp() {
  const [fname,setFname]=useState('')
  const [lname,setLname]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    const formData={
      fname,lname,email,password
    }
    console.log(formData)
    
  }
  return (
    
    <Container>
        <form onSubmit={handleSubmit}> 
            <Input  
             type='text' name="fname" value={fname} onChange={(e)=>setFname(e.target.value)} placeholder='First Name'
            /><br></br>
            <Input  
             type='text' name="lname" value={lname} onChange={(e)=>setLname(e.target.value)} placeholder='Last Name'
            /><br></br>
             <Input  type='email' placeholder='email' value={email} name="email"
                onChange={(e) => setEmail(e.target.value)} /><br></br>
             <Input  type='password' placeholder='password' value={password} name="password"
                onChange={(e) => setPassword(e.target.value)} /><br></br>
                <Button label='Sign up' size='medium' backgroundColor='blue' />
        </form>
    </Container>
  )
}

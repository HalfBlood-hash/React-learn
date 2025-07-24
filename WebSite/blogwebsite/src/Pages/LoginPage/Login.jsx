

import React, { useState } from 'react'
import { Button, Container,Input } from '../../Component/component'

export default function Login() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    const loginFormdata={
      name,
      email
    }
      console.log(name);
      console.log(email);
      console.log(loginFormdata);
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
      <Input  type='text' placeholder='Name' value={name}  name="name"
      onChange={(e) => setName(e.target.value)} /><br></br>
      <Input  type='email' placeholder='email' value={email} name="email"
      onChange={(e) => setEmail(e.target.value)} /><br></br>
      <Button label='Login' size='medium' backgroundColor='blue' />
      </form>
    </Container>
  )
}

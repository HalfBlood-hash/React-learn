

import React from 'react'
import './Navbar.css'
import {NavLink} from "react-router-dom"
import Container from '../Contanier/Container'

export default function Navbar() {
  return (
    <Container>
    
        <nav className='nav'>
            <div className="navbar">
            <div>
                <ul>
            <NavLink to='/'><li>Satyam Blog</li></NavLink>  
            </ul>
            </div>
            <ul>
            
            <NavLink to='/about'><li>About us</li></NavLink>
            <NavLink to='/login'><li>Login</li></NavLink>
            <NavLink to='/sign'><li>Sign Up</li></NavLink>
            </ul>
            </div>
        </nav>
    </Container>
  )
}

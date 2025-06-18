


import {NavLink,useNavigate} from 'react-router-dom'


export default function Header() {
    const navigate=useNavigate();
    return (
        <>
        <nav className='navbar'>
            
            <ul>
                <NavLink to='/home' ><li>Home</li></NavLink>
                <NavLink to='/aboutus' ><li>About Us</li></NavLink>
                <NavLink to='/login' > <li>Login</li></NavLink>
            </ul>
            <button onClick={()=>navigate('/aboutus')} >Get Start</button>
        </nav>
        </>              
                            
    );
}





import {Link,} from 'react-router-dom'


export default function Header() {
    return (
       
        <>
        <nav className='navbar'>
            
            <ul>
                <Link to='/home' ><li>Home</li></Link>
                <Link to='/aboutus' ><li>About Us</li></Link>
                <Link to='/login' > <li>Login</li></Link>
            </ul>
            <button>Get Start</button>
        </nav>
        </>              
                            
    );
}


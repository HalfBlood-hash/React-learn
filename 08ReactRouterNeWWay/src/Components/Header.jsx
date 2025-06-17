import {Link,NavLink} from 'react-router-dom'

export default function Header()
{
    return (
        <>
        <nav className="navbar">
            <ul>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/aboutus' ><li>About Us</li></NavLink>
                <NavLink to='/login' ><li>Login</li></NavLink>
                {/* Here Link tag donot add active class but navlink add */}
                {/* <Link to='/'><li>Home</li></Link>
                <Link to='/aboutus' ><li>About Us</li></Link>
                <Link to='/login' ><li>Login</li></Link> */}
            </ul>
            <button>Get Start</button>
        </nav>
        </>
    )
}
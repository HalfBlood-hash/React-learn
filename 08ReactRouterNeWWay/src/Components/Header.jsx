import {Link,NavLink,useNavigate} from 'react-router-dom'

export default function Header()
{
    const navigate=useNavigate();
    return (
        <>
        <nav className="navbar">
            <ul>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/aboutus' ><li>About Us</li></NavLink>
                <NavLink to='/contact' ><li>Contact Us</li></NavLink>
                <NavLink to='/login' ><li>Login</li></NavLink>
                <NavLink to='/jobs' ><li>Jobs</li></NavLink>
                {/* Here Link tag donot add active class but navlink add */}
                {/* <Link to='/'><li>Home</li></Link>
                <Link to='/aboutus' ><li>About Us</li></Link>
                <Link to='/login' ><li>Login</li></Link> */}
            </ul>
            <button onClick={()=>navigate('/aboutus',{replace:true})} >Get Start</button>
           

        </nav>
        </>
    )
}
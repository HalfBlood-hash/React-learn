import { useNavigate } from "react-router-dom"


export default function Contact()
{

const navigate=useNavigate()
    return (
        <>
        <h1>This is contact Us</h1>
        <div className="contact-button">
            <button onClick={()=>navigate('info')} className="b1">Contact Info</button>
            <button onClick={()=>navigate('form')} className="b1">Contact Form</button>
        </div>
        </>
    )
}
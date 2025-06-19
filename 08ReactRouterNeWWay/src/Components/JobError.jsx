

import React from "react"
import { useNavigate, useRouteError } from "react-router-dom"

export default function JobError()
{
        const error=useRouteError();
        const navigate =useNavigate();

    return (
        <>
       <h2>Error page</h2>
      <p>Status: {error.status}</p>
      <p>{error.statusText}</p>
        <button onClick={()=>navigate('/')}>Go to Homepage</button>
        </>
    )
}
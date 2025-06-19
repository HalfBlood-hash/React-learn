

import React from "react"
import { useLoaderData ,Link} from "react-router-dom"

export default function Jobs()
{
    const jobsData=useLoaderData();


    return(

        <>
        <div className="jobs" >
        {
            jobsData.map((job)=>{
                return <Link to={job.id.toString() } key={job.id}>
                <p>{job.title}</p>
                <p>{job.location}</p>
                </Link>
            })
        }
        </div>
        </>
    )
}

export const jobloader=async()=>{

        const res =await fetch("http://localhost:5000/jobs")
        return res.json()
}
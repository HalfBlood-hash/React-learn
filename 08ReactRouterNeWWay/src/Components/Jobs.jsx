

import React from "react"
import { useLoaderData ,Link} from "react-router-dom"

export default function Jobs()
{
    const jobsData=useLoaderData();


    return(

        <>
        <div className="jobs">
        {
            jobsData.map((job)=>{
                return <Link>
                <h4>Tittle:{job.title}</h4>
                <h5>Location:{job.location}</h5>
                <h6>Salary{job.react}</h6>
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
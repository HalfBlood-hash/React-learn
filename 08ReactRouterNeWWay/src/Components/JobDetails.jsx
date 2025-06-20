

import React from "react"
import { useLoaderData, useParams } from "react-router-dom"

export default function JobDetails(){
        const JobDetailsData=useLoaderData();

    return (
        <>
        <h2>Job Details</h2>
        <p><b>Job Title:</b>{JobDetailsData.title}</p>
        <p><b>Job Salary:</b>{JobDetailsData.react}</p>
        <p><b>Job Location:</b>{JobDetailsData.location}</p>
        <p><b>Job Location:</b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, quam et voluptates ut distinctio minima quod voluptatibus voluptatum, velit, dolorem aperiam. Consequatur non dicta voluptas voluptates id voluptatem totam libero!</p>

        <button cl> Apply Now</button>

       
        </>
    )
}

export const JobDetailsLoader=async({params})=>{
    const {id}=params;
    const res=await fetch("http://localhost:5000/jobs/"+id);
    return res.json();
}
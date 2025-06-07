

import React, { useState } from "react";
import Level4ChildForm from "./Level4ChildForm";

export default function Level4Form()
{
    const [formData,setFormData]=useState({})
    const currencylist=[
        
    ]
    const  handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    }
    const handleChange=(e)=>{

    }
    return (
        <>
        <p>this form level4f4orm</p>
        <Level4ChildForm label={label} formdata={formData} currencylist={currencylist} handleChange={handleChange}/>
        </>
    )
}

import React, { useState,useEffect } from "react";


export default function Level3Form()
{
    const[formData,setFormData]=useState({})
    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(formData)
        // console.log(formData.food[0])
    }
    const handleradioChange=(e)=>{
        console.log(e.target.value)
        console.log(e.target.name)
        setFormData({...formData,[e.target.name]:e.target.value})
        console.log(formData)
    }
    
    const handleCheckbox = (e) => {
        const { name, value, checked } = e.target;
     
        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: checked
                    ? [...(prevState[name] || []), value] // Add checked value
                    : prevState[name].filter(item => item !== value), // Remove unchecked value
            };
        });
    };
    useEffect(() => {
        console.log("Final Updated Form Data:", formData);
    }, [formData]);
    return (
        <>
        <form action="" onSubmit={onSubmit}>
        <div className="mb-4">
            <label className="pr-2" htmlFor="gender">Gender</label>
            <label className="mr-4">Male
            <input  type="radio" name="gender" value="male" onChange={handleradioChange}/></label>
            <label className="mr-4">Female
            <input  type="radio" name="gender" value="female"  onChange={handleradioChange} /></label>
        </div>
        <div className="mt-4">
            <label htmlFor="">Food Prefrence</label>
            <label htmlFor="" className="ml-4">Veg 
                <input type="checkbox" name="food" id="" value="veg"  onChange={handleCheckbox}/>
            </label>
            <label htmlFor="" className="ml-4">Non Veg 
                <input type="checkbox" name="food" id="" value="nonveg" onChange={handleCheckbox} />
            </label>
            <label htmlFor="" className="ml-4">Egg Veg 
                <input type="checkbox" name="food" id="" value="eggveg" onChange={handleCheckbox} />
            </label>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
        </form>
        </>
    )
}
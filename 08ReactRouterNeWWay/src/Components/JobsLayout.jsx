
import React from "react";
import { Outlet } from "react-router-dom";



export default function JobsLayout()
{
    return (
        <>
        <h2>Jobs opening</h2>
        <p>Here is the list of Jobs opening</p>
        <Outlet/>
        </>
    )
}
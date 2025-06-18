
import React from "react"
import { Outlet } from "react-router-dom"
import Contact from "./Contact"

export default function ContactLayout()
{
    return (
        <>
        <Contact/>
        <Outlet/>
        </>
    )
}

import React from "react"
import { useContext } from "react"
import userContextProvider from "../Context/User/UserContextProvider"
import userContext from "../Context/User/userContext"
export default function Profile()
{
    const {user}=useContext(userContext)

    if(!user) return <div>Please login</div>
    return (
        <>
            <div className="profileDiv">Welcome :{user.username}</div>
        </>
)
}
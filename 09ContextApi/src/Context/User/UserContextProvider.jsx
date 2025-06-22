

import React from 'react'
import { useState } from 'react'

import UserContext from './userContext'

export default function UserContextProvider({children}){
    const[user,setUser]=useState();
    return (
        <>  
        <UserContext.Provider value={{user ,setUser}}>
        {children}
        </UserContext.Provider>
        </>
    )

}
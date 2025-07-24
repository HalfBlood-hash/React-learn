

import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar/Navbar'
export default function RouterLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

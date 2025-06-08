

import {Outlet} from 'react-router-dom'
import Header from '../Components/Header'
export default function Rootlayout(){

    return (
        <>
        <Header/>
        <div className="container">
        <Outlet/>
        </div>
        </>
    )
}
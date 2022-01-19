import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Logout from '../components/SingleComponents/Logout'
import Login from '../pages/Login'

function PublicRouter() {
    return (
        <Routes>
                        <Route path="/login" element={<Login/>}/>
        </Routes> 
    )
}

export default PublicRouter

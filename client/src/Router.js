import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './pages/user/LandingPage'
import Login from './pages/user/Login'
import Signup from "./pages/user/Signup"
import Home from "./pages/user/Home"
import Company from './pages/company/CreateCompany'
import AuthContext from './context/UserAuthContext'

function Router() {

    const { loggedIn } = useContext(AuthContext)
    console.log(loggedIn)

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                {loggedIn === false && (
                    <>
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/login' element={<Login />} />
                    </>
                )}
                {loggedIn === true && (
                    <>
                        <Route path='/home' element={<Home />} />
                    </>
                )}
                <Route path='/company' element={<Company />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
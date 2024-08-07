import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './pages/user/LandingPage'
import Login from './pages/user/Login'
import Signup from "./pages/user/Signup"
import Home from "./pages/user/Home"
import CreateCompany from './pages/company/CreateCompany'
import CompanyDashboard from "./pages/company/CompanyDashboard"
import AuthContext from './context/UserAuthContext'
import CompanyContext from './context/CompanyAuthContext'
import CreateService from './pages/company/CreateService'
import MyProfile from './pages/user/MyProfile'
import CarWashServices from './pages/user/CarWashServices'
import CreateAgendamento from './pages/user/CreateAgendamento'
import Schedule from './pages/user/Schedule'

function Router() {

    const { loggedIn } = useContext(AuthContext)
    console.log("User logged: " + loggedIn)

    const { ownCompany } = useContext(CompanyContext)
    console.log("Company: " + ownCompany)

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
                        <Route path='/myprofile' element={<MyProfile />} />
                        <Route path='/carwashservices' element={<CarWashServices />} />
                        <Route path='/agendarservicos' element={<CreateAgendamento />} />
                        <Route path='/agenda' element={<Schedule />} />

                        {ownCompany === false && (
                            <>
                                <Route path='/createcompany' element={<CreateCompany />} />
                            </>
                        )}

                        {ownCompany === true && (
                            <>
                                <Route path='/createservice' element={<CreateService />} />
                                <Route path='/companydashboard' element={<CompanyDashboard />} />
                            </>
                        )}

                    </>
                )}


            </Routes>
        </BrowserRouter>
    )
}

export default Router
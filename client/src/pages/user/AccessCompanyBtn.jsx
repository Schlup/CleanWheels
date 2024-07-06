import React from 'react'
import { useNavigate } from 'react-router-dom'

function AccessCompanyBtn() {

    const navigate = useNavigate()

    async function goTo() {
        navigate("/companydashboard")
    }

    return (
        <button onClick={goTo} className='bg-purple-700 py-1 px-6 rounded-lg text-white'>
            Acessar Empresa
        </button>
    )
}

export default AccessCompanyBtn
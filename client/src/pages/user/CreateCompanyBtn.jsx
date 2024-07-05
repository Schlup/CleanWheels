import React from 'react'
import { useNavigate } from "react-router-dom";

function CreateCompanyBtn() {

    const navigate = useNavigate()

    async function goTo() {
        navigate("/company")
    }

    return (
        <button onClick={goTo} className='bg-purple-700 py-1 px-6 rounded-lg text-white'>
            Registrar Empresa
        </button>
    )
}

export default CreateCompanyBtn
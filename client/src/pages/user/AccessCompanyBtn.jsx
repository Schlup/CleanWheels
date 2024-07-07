import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CompanyContext from '../../context/CompanyAuthContext';
import AuthContext from '../../context/UserAuthContext';

function AccessCompanyBtn() {

    const navigate = useNavigate()
    const { getLoggedIn } = useContext(AuthContext);
    const { getOwnCompany } = useContext(CompanyContext)

    async function goTo() {
        await getLoggedIn()
        await getOwnCompany()
        navigate("/companydashboard")
    }

    return (
        <button onClick={goTo} className='bg-purple-700 py-1 px-6 rounded-lg text-white'>
            Acessar Empresa
        </button>
    )
}

export default AccessCompanyBtn
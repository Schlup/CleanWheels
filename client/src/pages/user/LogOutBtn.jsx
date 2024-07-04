import React, { useContext } from 'react'
import axios from 'axios'
import AuthContext from '../../context/UserAuthContext';
import { useNavigate } from "react-router-dom";

function LogOutBtn() {

    const navigate = useNavigate()
    const { getLoggedIn } = useContext(AuthContext);

    async function logOut() {
        await axios.get("http://localhost:3025/auth/logout")
        await getLoggedIn();
        navigate('/')
    }

    return (
        <button onClick={logOut} className='bg-red-700 py-1 px-6 rounded-lg text-white'>
            Logout
        </button>
    )
}

export default LogOutBtn
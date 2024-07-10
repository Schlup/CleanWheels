import React, { useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import CompanyContext from '../../context/CompanyAuthContext';

function LogOutBtn() {
  const navigate = useNavigate();
  const { getLoggedIn } = useContext(AuthContext);
  const { getOwnCompany } = useContext(CompanyContext);

  async function logOut() {
    await axios.get('http://localhost:3025/auth/logout');
    await getLoggedIn();
    await getOwnCompany();
    navigate('/');
  }

  return (
    <button
      onClick={logOut}
      className="active:scale-[.98] hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-gray-700 hover:bg-gray-950 text-white text-lg font-bold"
    >
      Logout
    </button>
  );
}

export default LogOutBtn;

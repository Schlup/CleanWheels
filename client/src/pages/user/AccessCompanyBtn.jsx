import React from 'react';
import { useNavigate } from 'react-router-dom';

function AccessCompanyBtn() {
  const navigate = useNavigate();

  async function goTo() {
    navigate('/companydashboard');
  }

  return (
    <button
      onClick={goTo}
      className="active:scale-[.98] hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-indigo-700 hover:bg-indigo-950 text-white text-lg font-bold"
    >
      Acessar Empresa
    </button>
  );
}

export default AccessCompanyBtn;

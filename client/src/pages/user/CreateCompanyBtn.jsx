import React from 'react';
import { useNavigate } from 'react-router-dom';

function CreateCompanyBtn() {
  const navigate = useNavigate();

  async function goTo() {
    navigate('/createcompany');
  }

  return (
    <button
      onClick={goTo}
      className="active:scale-[.98] hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-indigo-700 hover:bg-indigo-950 text-white text-lg font-bold"
    >
      Registrar Empresa
    </button>
  );
}

export default CreateCompanyBtn;

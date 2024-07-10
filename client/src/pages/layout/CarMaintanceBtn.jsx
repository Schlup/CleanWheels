import React from 'react';
import { useNavigate } from 'react-router-dom';

function CarMaintanceBtn() {
  const navigate = useNavigate();

  async function goTo() {
    navigate('/Home');
  }

  return (
    <button
      onClick={goTo}
      className="active:scale-[.98] hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-indigo-700 hover:bg-indigo-950 text-white text-lg font-bold"
    >
      Manutenção
    </button>
  );
}

export default CarMaintanceBtn;

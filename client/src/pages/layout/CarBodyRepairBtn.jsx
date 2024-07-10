import React from 'react';
import { useNavigate } from 'react-router-dom';
import carWrapImage from '../../images/funilaria-de-carro.jpg';

function CarBodyRepairBtn() {
  const navigate = useNavigate();

  async function goTo() {
    navigate('/Home');
  }

  return (
    <button
      onClick={goTo}
      className="bg-cover bg-center active:scale-[.98] hover:scale-[1.01] ease-in-out py-3 text-black text-lg font-bold"
    >
      <img className="rounded-xl max-w-24 min-h-16 max-h-20" src={carWrapImage} alt="revisao-de-carro" />
      Funilária
    </button>
  );
}

export default CarBodyRepairBtn;

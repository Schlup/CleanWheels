import React from 'react';
import { useNavigate } from 'react-router-dom';
import carWashImage from '../../images/lavacao-de-carro.jpg';

function CarWashBtn() {
  const navigate = useNavigate();

  async function goTo() {
    navigate('/carwashservices');
  }

  return (
    <button
      onClick={goTo}
      className="active:scale-[.98] hover:scale-[1.01] ease-in-out py-3 text-black text-lg font-bold"
    >
      <img className="rounded-xl max-w-24 min-h-16 max-h-20" src={carWashImage} alt="lavacao-de-carro" />
      Lavação
    </button>
  );
}

export default CarWashBtn;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import carPolishingImage from '../../images/polimento-de-carro.jpg';

function CarPolishingBtn() {
  const navigate = useNavigate();

  async function goTo() {
    navigate('/Home');
  }

  return (
    <button
      onClick={goTo}
      className="grid justify-items-center active:scale-[.98] hover:scale-[1.01] ease-in-out py-3 text-black text-lg font-bold"
    >
      <img className="rounded-xl max-w-24 min-h-16 max-h-20" src={carPolishingImage} alt="polimento-de-carro" />
      Polimento
    </button>
  );
}

export default CarPolishingBtn;

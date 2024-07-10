import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginBtn() {
  const navigate = useNavigate();

  async function goTo() {
    navigate('/login');
  }

  return (
    <button
      onClick={goTo}
      className="w-24 active:scale-[.98] hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-indigo-700 hover:bg-indigo-950 text-white text-lg font-bold"
    >
      Login
    </button>
  );
}

export default LoginBtn;

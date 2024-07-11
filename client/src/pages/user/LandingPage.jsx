import React from 'react';
import LoginBtn from '../layout/LoginBtn';
import SignupBtn from '../layout/SignupBtn';
import landingPageImage from '../../images/landing-page.jpg';

function LandingPage() {
  return (
    <main className="relative">
      <nav className="grid grid-cols-12 px-48 py-12 bg-black relative z-10">
        <div className="grid col-span-10 text-white text-3xl">Clean Wheel</div>
        <div className="col-span-1 mx-2">
          <SignupBtn />
        </div>
        <div className="col-span-1 mx-2">
          <LoginBtn />
        </div>
      </nav>
      <div className="grid grid-cols-12 relative">
        <div
          className="col-span-6 px-80 py-60 absolute bg-cover w-fit"
          style={{ backgroundImage: `url(${landingPageImage})` }}
        >
          <div className="backdrop-opacity-25 backdrop-invert bg-white/10">
            <h1 className="p-5 text-6xl">
              NÓS <span className="text-indigo-600">GERENCIAMOS</span> SEUS
              SERVIÇOS
            </h1>
            <h2 className="mt-12 px-5 text-3xl">
              Por que escolher o Clean Wheel?
            </h2>
            <p className="px-5 py-1 text-xl ">
              Escolher o Clean Wheel é optar pela excelência no gerenciamento de
              serviços para empresas especializadas em cuidados automotivos. Com
              uma plataforma robusta e intuitiva, o Clean Wheel simplifica a
              gestão de lavação, polimento, envelopamento, revisão, manutenção,
              funilaria e pintura, proporcionando eficiência e controle total
              das operações.
            </p>
          </div>
          <button className="bg-indigo-700 hover:bg-indigo-950 py-2 px-12 text-white rounded-xl mt-4">
            Saiba mais
          </button>
        </div>
      </div>
      <footer className="bg-black p-8 bottom-0 fixed w-screen text-white text-center">
        © Copyright 2024 Clean Wheel Group.
      </footer>
    </main>
  );
}

export default LandingPage;

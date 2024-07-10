import React from 'react';
import Nav from '../layout/Nav';
import CarWashBtn from '../layout/CarWashBtn';
import CarPolishingBtn from '../layout/CarPolishingBtn';
import CarWrapBtn from '../layout/CarWrapBtn';
import CarCheckupBtn from '../layout/CarCheckupBtn';
import CarMaintanceBtn from '../layout/CarMaintanceBtn';
import CarBodyRepairBtn from '../layout/CarBodyRepairBtn';

function Home() {

  return (
    <div className="grid grid-cols-12 w-full h-screen">
      <div className="col-span-2">
        <Nav />
      </div>
      <div className="col-span-10 items-center justify-center lg:w-1/2">
        <div className="bg-white px-10 py-20 rounded-3xl">
          <h1 className="text-5xl font-semibold">Promoções</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Aproveite agora as melhores promoções por tempo limitado!
          </p>
        </div>
        <div className="bg-white px-10 py-20 rounded-3xl">
          <h1 className="text-5xl font-semibold">Agende seu serviço</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">Categorias</p>
          <CarWashBtn />
          <CarPolishingBtn />
          <CarWrapBtn />
          <CarCheckupBtn />
          <CarMaintanceBtn />
          <CarBodyRepairBtn />
        </div>
        <div className="bg-white px-10 py-20 rounded-3xl">
          <h1 className="text-5xl font-semibold">Prestadores de serviço</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Famosos no Clean Wheel
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

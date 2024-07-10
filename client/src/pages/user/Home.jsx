import React, { useEffect, useState } from 'react';
import Nav from '../layout/Nav';
import CarWashBtn from '../layout/CarWashBtn';
import CarPolishingBtn from '../layout/CarPolishingBtn';
import CarWrapBtn from '../layout/CarWrapBtn';
import CarCheckupBtn from '../layout/CarCheckupBtn';

import axios from 'axios';

function Home() {
  const [allServices, setAllServices] = useState(null)
  const [allAgendamentos, setAllAgendamentos] = useState([])

  const getImage = async () => {
    const result = await axios.get('http://localhost:3025/service/getServices');
    console.log(result);
    setAllServices(result.data.data);
  };

  const getAgendamento = async () => {
    try {
      const companies = await axios.get("http://localhost:3025/company/getCompanies");
      console.log(companies);
      setAllAgendamentos(Array.isArray(companies.data) ? companies.data : []);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  useEffect(() => {
    getAgendamento()
  }, [])

  useEffect(() => {
    getImage();
  }, []);

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
        </div>
        <div>
          {allServices === null
            ? ''
            : allServices.map((data) => {
              return (
                <img
                  src={require(`../images/${data.image}`)}
                  alt=""
                  key={require(`../images/${data.image}`)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;

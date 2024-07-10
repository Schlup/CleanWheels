import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../layout/Nav';

function CarWashServices() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getAgendamento = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3025/company/getCompanies',
        );
        console.log('API Response:', response.data);
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    getAgendamento();
  }, []);

  return (
    <div className="grid grid-cols-12 w-full h-screen">
      <div className="col-span-2">
        <Nav />
      </div>
      <div className="col-span-10 items-center justify-center">
        <div className="bg-white px-10 py-20 rounded-3xl">
          <h1 className="text-5xl font-semibold">Lavações</h1>
          <div className="my-10 grid grid-flow-col gap-10 min-w-fit">
            {companies.length > 0 ? (
              companies.map((company) => (
                <div key={company._id}>
                  <div className="flex border-8 border-gray-400 bg-gray-400 rounded-xl">
                    <img
                      src={require(`../imagesCompany/${company.image}`)}
                      alt=""
                      key={require(`../imagesCompany/${company.image}`)}
                      className="rounded-xl"
                      height={250}
                      width={250}
                    />
                    <div className='grid grid-flow-row m-2 p-2'>
                      <h2 className="">Nome: {company.name}</h2>
                      <h2 className="">Fone: {company.phone}</h2>
                      <h2 className="">Endereço: {company.adress}</h2>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No companies found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarWashServices;

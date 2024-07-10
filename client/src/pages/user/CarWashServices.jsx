import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AgendamentoBtn from '../layout/AgendamentoBtn';

function CarWashServices() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getAgendamento = async () => {
      try {
        const response = await axios.get('http://localhost:3025/company/getCompanies');
        console.log('API Response:', response.data);
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    getAgendamento();
  }, []);

  return (
    <div>
      <h2>CarWash Services</h2>
      <div>
        {companies.length > 0 ? (
          companies.map((company) => (
            <div key={company._id}>
              <div className="bg-slate-400">

                <img src={require(`../imagesCompany/${company.image}`)} alt='' key={require(`../imagesCompany/${company.image}`)} className=""
                  height={250}
                  width={250}
                />

                <h2 className=''>Nome: {company.name}</h2>
                <h2 className=''>Fone: {company.phone}</h2>
                <h2 className=''>Endereço: {company.adress}</h2>
                <AgendamentoBtn company={company._id} />

              </div>
            </div>
          ))
        ) : (
          <p>No companies found</p>
        )}
      </div>
    </div>
  );
}

export default CarWashServices;

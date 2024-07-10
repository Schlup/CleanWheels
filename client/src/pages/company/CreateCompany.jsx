import React, { useState } from 'react';
import axios from 'axios';
import Nav from '../layout/Nav';

function CreateCompany() {
  const [companyName, setCompanyName] = useState('');
  const [companyType, setCompanyType] = useState(['']);
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [companyCnpj, setCompanyCpnj] = useState('');
  const [companyAdress, setCompanyAdress] = useState('');
  const [companyEmployees, setCompanyEmployees] = useState(['']);
  const [companyImage, setCompanyImage] = useState(null);

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:3025/company/signup',
        {
          name: companyName,
          serviceType: companyType,
          email: companyEmail,
          phone: companyPhone,
          cnpj: companyCnpj,
          adress: companyAdress,
          employees: companyEmployees,
          image: companyImage,
        },
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
      );
      console.log('Uploaded!');
      console.log(companyImage);
    } catch (err) {
      console.log(err);
    }
  }

  function handleFileUpload(e) {
    setCompanyImage(e.target.files[0]);
  }

  return (
    <div className="grid grid-cols-12 w-full h-screen">
      <div className="col-span-2">
        <Nav />
      </div>
      <div className="col-span-10 items-center justify-center lg:w-1/2 overflow-hidden">
        <div className="bg-white px-10 py-20 rounded-3xl">
          <h1 className="text-5xl font-semibold">Registrar empresa</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Por favor insira os dados da empresa
          </p>
          <div className="mt-2">
            <form method="POST" encType="multipart/form-data">
              <label className="text-lg font-medium" htmlFor="">
                Nome
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-indigo-950"
                placeholder="Insira o nome da empresa"
                name="name"
                id="name"
                type="text"
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <label className="text-lg font-medium" htmlFor="">
                Email
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-indigo-950"
                placeholder="Insira o e-mail da empresa"
                name="email"
                id="email"
                type="email"
                onChange={(e) => setCompanyEmail(e.target.value)}
              />
              <label className="text-lg font-medium" htmlFor="">
                Telefone
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-indigo-950"
                placeholder="Insira o telefone da empresa"
                name="phone"
                id="phone"
                type="text"
                onChange={(e) => setCompanyPhone(e.target.value)}
              />
              <label className="text-lg font-medium" htmlFor="">
                CNPJ
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-indigo-950"
                placeholder="Insira o CNPJ da empresa"
                name="cnpj"
                id="cnpj"
                type="text"
                onChange={(e) => setCompanyCpnj(e.target.value)}
              />
              <label className="text-lg font-medium" htmlFor="">
                Endereço
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-indigo-950"
                placeholder="Insira o endereço da empresa"
                name="adress"
                id="adress"
                type="text"
                onChange={(e) => setCompanyAdress(e.target.value)}
              />
              <label className="text-lg font-medium" htmlFor="">
                Serviços prestados
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-indigo-950"
                placeholder="Insira os serviços prestados pela empresa"
                name="serviceType"
                id="serviceType"
                type="text"
                onChange={(e) => setCompanyType(e.target.value)}
              />
              <label className="text-lg font-medium" htmlFor="">
                Funcionários
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-indigo-950"
                placeholder="Insira os funcionários da empresa"
                name="employees"
                id="employees"
                type="text"
                onChange={(e) => setCompanyEmployees(e.target.value)}
              />

              <label className="text-lg font-medium" htmlFor="">
                Imagem
              </label>
              <input
                className="w-full p-3 mt-1"
                type="file"
                name="companyImage"
                id="companyUpload"
                accept="image/* "
                onChange={handleFileUpload}
              />
              <div className="mt-8 flex flex-col gap-y-4">
                <button
                  className="active:scale-[.98] hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-indigo-700 hover:bg-indigo-950 text-white text-lg font-bold"
                  onClick={submit}
                >
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCompany;

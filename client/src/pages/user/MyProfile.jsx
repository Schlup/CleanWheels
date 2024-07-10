import React, { useContext } from 'react';
import Nav from '../layout/Nav';
import CreateCompanyBtn from './CreateCompanyBtn';
import AccessCompanyBtn from './AccessCompanyBtn';
import LogOutBtn from './LogOutBtn';
import CompanyContext from "../../context/CompanyAuthContext";

function MyProfile() {
  const { ownCompany } = useContext(CompanyContext);
  console.log("Company: " + ownCompany);

  return (
    <div className="grid grid-cols-12 w-full h-screen">
      <div className="col-span-2">
        <Nav />
      </div>
      <div className="col-span-10 items-center justify-center lg:w-1/2">
        <div className="bg-white px-10 py-20 rounded-3xl">
          <h1 className="text-5xl font-semibold">Meu perfil</h1>
          <div className="mt-2">
            <form method="POST">
              <label className="text-lg font-medium">Nome</label>
              <input
                name="name"
                id="name"
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-indigo-950"
                placeholder=""
              />
            </form>
            <form method="POST">
              <label className="text-lg font-medium">Sobrenome</label>
              <input
                name="lastname"
                id="lastnamename"
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-indigo-950"
                placeholder=""
              />
            </form>
            <form method="POST">
              <label className="text-lg font-medium">CPF</label>
              <input
                name="cpf"
                id="cpf"
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-indigo-950"
                placeholder=""
              />
            </form>
            <form method="POST">
              <label className="text-lg font-medium">Email</label>
              <input
                name="email"
                id="email"
                type="email"
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-indigo-950"
                placeholder=""
              />
            </form>
            <form method="POST">
              <label className="text-lg font-medium">Telefone</label>
              <input
                name="phone"
                id="phone"
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-indigo-950"
                placeholder=""
              />
            </form>
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            {ownCompany === true ? (
              <AccessCompanyBtn />
            ) : (
              <CreateCompanyBtn />
            )}
            <LogOutBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;

import React, { useContext, useState, useEffect } from 'react';
import Nav from '../layout/Nav';
import CreateCompanyBtn from './CreateCompanyBtn';
import AccessCompanyBtn from './AccessCompanyBtn';
import LogOutBtn from './LogOutBtn';
import CompanyContext from "../../context/CompanyAuthContext";
import axios from 'axios';

function MyProfile() {
  const { ownCompany } = useContext(CompanyContext);
  console.log("Company: " + ownCompany);

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3025/auth/userInfo");
        const profile = response.data;
        console.log(profile);

        setName(profile.name);
        setLastName(profile.lastname);
        setCpf(profile.cpf);
        setEmail(profile.email);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

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
                placeholder={name}
                disabled
              />
            </form>
            <form method="POST">
              <label className="text-lg font-medium">Sobrenome</label>
              <input
                name="lastname"
                id="lastnamename"
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-indigo-950"
                placeholder={lastname}
                disabled
              />
            </form>
            <form method="POST">
              <label className="text-lg font-medium">CPF</label>
              <input
                name="cpf"
                id="cpf"
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-indigo-950"
                placeholder={cpf}
                disabled
              />
            </form>
            <form method="POST">
              <label className="text-lg font-medium">Email</label>
              <input
                name="email"
                id="email"
                type="email"
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-indigo-950"
                placeholder={email}
                disabled
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

import React, { Component } from 'react';
import Nav from '../layout/Nav';

export class MyProfile extends Component {
  render() {
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
                  // onChange={(e) => {getName(e.target.value);}}
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
                  // onChange={(e) => {getName(e.target.value);}}
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
                  // onChange={(e) => {setName(e.target.value);}}
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
                  // onChange={(e) => {setEmail(e.target.value);}}
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
                  // onChange={(e) => {setName(e.target.value);}}
                  type="text"
                  className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-indigo-950"
                  placeholder=""
                />
              </form>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                className="active:scale-[.98] hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-indigo-700 hover:bg-indigo-950 text-white text-lg font-bold"
                type="submit"
                // onClick={submit}
              >
                Registrar empresa
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyProfile;

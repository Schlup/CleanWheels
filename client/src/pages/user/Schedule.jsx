import React from 'react';
import Nav from '../layout/Nav';

function Schedule() {
  return (
    <div className="grid grid-cols-12 w-full h-screen">
      <div className="col-span-2">
        <Nav />
      </div>
      <div className="bg-white px-10 py-20 rounded-3xl">
        <h1 className="text-5xl font-semibold">Agenda</h1>
      </div>
    </div>
  );
}

export default Schedule;

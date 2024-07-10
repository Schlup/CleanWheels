import React from 'react';
import Nav from '../layout/Nav';

function CompanyDashboard() {
  return (
    <main className="grid grid-cols-12 w-full h-screen">
      <div className='col-span-2'>
        <Nav />
      </div>
    </main>
  );
}

export default CompanyDashboard;

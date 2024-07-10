import React, { useState } from 'react'
import Nav from '../layout/Nav'
import FimAgendamentoBtn from '../layout/FimAgendamentoBtn'
import axios from 'axios';

function CreateAgendamento() {
    const [date, setDate] = useState('');
    const [horario, setHorario] = useState('');

    console.log()

    const handleCreateAgendamento = async (e) => {
        
        e.preventDefault();

        console.log("DeuSumbit")

        const { company } = props; // Access company info passed from CarWashServices
        
        console.log("Company no back:" + company)

        try {
            const response = await axios.post('http://localhost:3025/agendamento/createAgendamento', {
                company: company._id, // Send company ID
                date: date,
                horario: horario,
            });

            console.log(response)

        } catch (err) {
            console.error('Error creating agendamento:', err);
        }
    };

    return (
        <div className="grid grid-cols-12 w-full h-screen">
            <div className="col-span-2">
                <Nav />
            </div>
            <div className="col-span-10 items-center justify-center lg:w-1/2">
                <div className="bg-white px-10 py-20 rounded-3xl">
                    <h1 className="text-5xl font-semibold">Agendar serviço</h1>
                    <div className="mt-2">
                        <form method="POST">
                            <label className="text-lg font-medium">Data</label>
                            <input
                                name="date"
                                id="date"
                                type="date"
                                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-indigo-950"
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </form>
                        <form method="POST">
                            <label className="text-lg font-medium">Horário</label>
                            <input
                                name="horario"
                                id="horario"
                                type="text"
                                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-indigo-950"
                                onChange={(e) => setHorario(e.target.value)}
                            />
                        </form>
                        <form className='mt-8 flex flex-col gap-y-4'>
                            <FimAgendamentoBtn onSubmit={handleCreateAgendamento} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAgendamento
import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {

    return (
        <main>
            <nav className="grid grid-cols-12 px-48 py-12 bg-gray-600">
                <div className="grid items-center justify-center bg-white">Logo</div>

                <Link to="/home" className="grid w-32 bg-red-200 items-center justify-center col-start-6">Home</Link>

                <div className="grid w-32 bg-red-200 items-center justify-center col-start-6">Sobre</div>
                <div className="grid w-32 bg-cyan-300 items-center justify-center">Fale conosco</div>

                <Link to="/signup" className="grid w-32 bg-blue-500 items-center justify-center col-start-11">SignUp</Link>
                <Link to="/login" className="grid w-32 bg-purple-500 items-center justify-center">Login</Link>

            </nav>

            <div className='grid grid-cols-12'>
                <div className="bg-green-200 col-span-6 px-48 py-12 h-screen">
                    <h1 className="text-9xl">WE <span className='text-red-600'>BUILD</span> YOUR SPACE</h1>
                    <h2 className='text-3xl mt-12'>Why choose us?</h2>
                    <p className="text-xl mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim necessitatibus architecto dicta asperiores obcaecati veniam voluptatem exercitationem? Dolorem maxime molestias delectus, officia a pariatur quis cum ipsam non id.</p>
                    <button className="bg-yellow-300 py-2 px-12 rounded-xl mt-4">Read more</button>
                </div>
                <div className='bg-blue-200 col-span-6 py-12'>
                    <p>mudar tudo isso pra grid pra facilitar - fotinha agr</p>
                </div>
            </div>

            <footer className='bg-black p-8 bottom-0 fixed w-screen text-white'>
                Footer
            </footer>
        </main >
    )
}

export default LandingPage
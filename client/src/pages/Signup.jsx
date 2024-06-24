import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cpf, setCpf] = useState("")  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3025/auth/signup", {
                name,
                lastname: lastName,
                cpf,
                email,
                password,
                passwordVerify: cpassword,
            });
            console.log(response.data);
            navigate("/login");
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <div className="bg-white px-10 py-20 rounded-3xl">
                    <h1 className="text-5xl font-semibold">Welcome!</h1>
                    <p className="font-medium text-lg text-gray-500 mt-4">
                        Please enter your details
                    </p>
                    <div className="mt-2">
                        <form method="POST">
                            <label className="text-lg font-medium">Name</label>
                            <input
                                name="name"
                                id="name"
                                onChange={(e) => { setName(e.target.value) }}
                                type="text"
                                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-violet-500"
                                placeholder="Enter your name"
                            />
                        </form>

                        <form method="POST">
                            <label className="text-lg font-medium">Last name</label>
                            <input
                                name="lastName"
                                id="lastName"
                                onChange={(e) => { setLastName(e.target.value) }}
                                type="text"
                                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-violet-500"
                                placeholder="Enter your last name"
                            />
                        </form>
                    
                        <form method="POST">
                            <label className="text-lg font-medium">CPF</label>
                            <input
                                name="cpf"
                                id="cpf"
                                onChange={(e) => { setCpf(e.target.value) }}
                                type="text"
                                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-violet-500"
                                placeholder="Enter your CPF"
                            />
                        </form>

                        <form method="POST">
                            <label className="text-lg font-medium">Email</label>
                            <input
                                name="email"
                                id="email"
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="email"
                                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-violet-500"
                                placeholder="Enter your e-mail"
                            />
                        </form>

                        <form method="POST">
                            <label className="text-lg font-medium">Password</label>
                            <input
                                name="password"
                                id="password"
                                onChange={(e) => { setPassword(e.target.value) }}
                                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-violet-500"
                                placeholder="Enter your password"
                                type="password"
                            />
                        </form>

                        <form method="POST">
                            <label className="text-lg font-medium">Confirm password</label>
                            <input
                                name="confirmpassword"
                                id="confirmpassword"
                                onChange={(e) => { setCpassword(e.target.value) }}
                                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent focus:outline-none focus:border-violet-500"
                                placeholder="Repeat your password"
                                type="password"
                            />
                        </form>
                    </div>
                    <div className="mt-8 flex flex-col gap-y-4">
                        <button
                            className="active:scale-[.98] hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
                            type="submit"
                            onClick={submit}
                        >
                            Sign up
                        </button>
                        <button className="active:scale-[.98] hover:scale-[1.01] ease-in-out flex border-2 border-gray-100 py-3 rounded-xl items-center justify-center gap-2">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                                    fill="#EA4335"
                                />
                                <path
                                    d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                                    fill="#4A90E2"
                                />
                                <path
                                    d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                                    fill="#FBBC05"
                                />
                            </svg>
                            Sign up with Google
                        </button>
                    </div>
                    <div className="mt-8 flex justify-center items-center">
                        <p className="font-medium text-base">Already have an account?</p>
                        <button className="text-violet-500 text-base font-medium ml-2">
                            <Link to="/login">Log in</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
                <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin"></div>
                <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>
            </div>
        </div>
    );
}
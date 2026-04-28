import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaWallet } from "react-icons/fa";
import { data, useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    function handleLogin() {
        navigate('/');
    }
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-700">
        
        <div className="flex justify-center mb-5">
          <div className="bg-green-500 p-4 rounded-full">
            <FaWallet className="text-white text-2xl" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back
        </h1>
        <p className="text-slate-400 text-center mt-2 mb-8">
          Login to manage your expenses
        </p>

        <form className="space-y-5">
          <div>
            <label className="text-slate-300 text-sm">Email</label>
            <div className="flex items-center bg-slate-700 mt-2 rounded-lg px-3">
              <FaEnvelope className="text-slate-400" />
              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-transparent outline-none p-3 text-white"
              />
            </div>
          </div>

          <div>
            <label className="text-slate-300 text-sm">Password</label>
            <div className="flex items-center bg-slate-700 mt-2 rounded-lg px-3">
              <FaLock className="text-slate-400" />
              <input
                type="password"
                placeholder="Enter password"
                className="w-full bg-transparent outline-none p-3 text-white"
              />
            </div>
          </div>

          <button onClick={handleLogin} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg duration-300">
            Login
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaChartPie, FaWallet, FaShieldAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans flex flex-col">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-6 md:px-12 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 fixed w-full top-0 z-50">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Smart Expense Tracker Logo" className="w-10 h-10 object-contain drop-shadow-md" />
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Smart Expense
          </h1>
        </div>
        <div>
          <button 
            onClick={() => navigate('/login')}
            className="text-white hover:text-blue-400 font-semibold px-4 py-2 transition-colors mr-2"
          >
            Login
          </button>
          <button 
            onClick={() => navigate('/register')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold transition-colors shadow-lg shadow-blue-500/30 hidden sm:inline-block"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Take Control of Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Financial Future
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The smartest way to track your expenses, manage your income, and visualize your wealth in real-time. Join thousands of users making smarter money decisions everyday.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => navigate('/register')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/25"
            >
              Get Started Free <FaArrowRight />
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              Sign In to Account
            </button>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-24">
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm text-left">
            <div className="bg-blue-500/20 w-14 h-14 rounded-full flex items-center justify-center text-blue-400 mb-6">
              <FaWallet className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Track Expenses</h3>
            <p className="text-slate-400">Log your daily expenses and income instantly. Categorize them to know exactly where your money goes.</p>
          </div>
          
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm text-left">
            <div className="bg-emerald-500/20 w-14 h-14 rounded-full flex items-center justify-center text-emerald-400 mb-6">
              <FaChartPie className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Visual Analytics</h3>
            <p className="text-slate-400">Beautiful charts and graphs help you analyze your spending habits and visualize cash flow trends over time.</p>
          </div>
          
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm text-left">
            <div className="bg-purple-500/20 w-14 h-14 rounded-full flex items-center justify-center text-purple-400 mb-6">
              <FaShieldAlt className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Secure & Private</h3>
            <p className="text-slate-400">Your financial data stays completely secure. We use enterprise-grade security to protect your privacy.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Smart Expense Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}
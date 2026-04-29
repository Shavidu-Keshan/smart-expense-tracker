import { useState } from "react";
import { Link, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaWallet, FaReceipt, FaChartBar, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

import Dashboard from "./home/dashboard";
import Income from "./home/income";
import Outcome from "./home/outcome";
import Analytics from "./home/analytics";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function getClass(name) {
  if (path.includes(name)) {
    return "flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-700 text-white";
  } else {
    return "flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-700 text-slate-300";
  }
}

  function handleLogout() {
    navigate("/login");
  }

  const getGreeting = () => {
    const options = { timeZone: 'Asia/Colombo', hour: 'numeric', hour12: false };
    const formatter = new Intl.DateTimeFormat([], options);
    // Extract hour as number
    const hour = parseInt(formatter.format(new Date()), 10);
    
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };
  
  const userName = "User"; // Placeholder until user auth is connected

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col md:flex-row relative">
      {/* MOBILE HEADER */}
      <div className="md:hidden flex items-center justify-between p-4 bg-slate-800 border-b border-slate-700 w-full z-50">
        <div className="flex items-center gap-3">
          <img src={logo} className="w-8 h-8" alt="Logo" />
          <h1 className="text-lg font-bold">Smart Expense</h1>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-slate-300 hover:text-white p-2 focus:outline-none"
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* OVERLAY FOR MOBILE */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-50 transform 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 transition-transform duration-300 ease-in-out
        w-[280px] md:w-[300px] bg-slate-800 border-r border-slate-700 flex flex-col justify-between
      `}>

        <div>
          {/* LOGO */}
          <div className="p-6 flex items-center gap-3 border-b border-slate-700 hidden md:flex">
            <img src={logo} className="w-10 h-10" />
            <h1 className="text-lg font-bold">Smart Expense</h1>
          </div>

          {/* LINKS */}
          <div className="mt-4 flex flex-col gap-2 px-3 pb-4">

            <Link onClick={() => setIsSidebarOpen(false)} to="/dashboard" className={getClass("/dashboard")}>
              <FaHome /> Dashboard
            </Link>

            <Link onClick={() => setIsSidebarOpen(false)} to="/income" className={getClass("/income")}>
              <FaWallet /> Income
            </Link>

            <Link onClick={() => setIsSidebarOpen(false)} to="/outcome" className={getClass("/outcome")}>
              <FaReceipt /> Outcome
            </Link>

            <Link onClick={() => setIsSidebarOpen(false)} to="/analytics" className={getClass("/analytics")}>
              <FaChartBar /> Analytics
            </Link>

          </div>
        </div>

        {/* LOGOUT */}
        <div className="p-4 border-t border-slate-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>

      {/* CONTENT AREA (FIXED LIKE YOUR ADMIN STYLE) */}
      <div className="flex-1 p-6 md:p-8 lg:p-10 overflow-y-auto h-screen">

        {/* TOP HEADER GREETING */}
        <header className="flex justify-between items-center mb-8 pb-4 border-b border-slate-700">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <span className="text-slate-400 font-normal">{getGreeting()},</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">{userName}</span>
              <span className="inline-block hover:animate-bounce cursor-default">👋</span>
            </h2>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/income" element={<Income />} />
          <Route path="/outcome" element={<Outcome />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>

      </div>

    </div>
  );
}
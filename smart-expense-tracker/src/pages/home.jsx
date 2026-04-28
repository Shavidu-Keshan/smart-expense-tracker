import { Link, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaWallet, FaReceipt, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

import Dashboard from "./home/dashboard";
import Income from "./home/income";
import Outcome from "./home/outcome";
import Analytics from "./home/analytics";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  function getClass(name) {
    return path.includes(name)
      ? "flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-700 text-white"
      : "flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-700 text-slate-300";
  }

  function handleLogout() {
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex">

      {/* SIDEBAR */}
      <div className="w-[300px] bg-slate-800 border-r border-slate-700 flex flex-col justify-between">

        <div>
          {/* LOGO */}
          <div className="p-6 flex items-center gap-3 border-b border-slate-700">
            <img src={logo} className="w-10 h-10" />
            <h1 className="text-lg font-bold">Smart Expense</h1>
          </div>

          {/* LINKS */}
          <div className="mt-4 flex flex-col gap-2 px-3">

            <Link to="/dashboard" className={getClass("/dashboard")}>
              <FaHome /> Dashboard
            </Link>

            <Link to="/income" className={getClass("/income")}>
              <FaWallet /> Income
            </Link>

            <Link to="/outcome" className={getClass("/outcome")}>
              <FaReceipt /> Outcome
            </Link>

            <Link to="/analytics" className={getClass("/analytics")}>
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
      <div className="flex-1 p-6">

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
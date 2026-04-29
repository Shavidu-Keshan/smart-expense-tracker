import React, { useState } from "react";
import { FaArrowDown, FaPlus, FaTimes } from "react-icons/fa";
import transactionsData from "../../json/transactions.json";
import SummaryCard from "../../components/SummaryCard";
import RecentTransactions from "../../components/RecentTransactions";

export default function Outcome() {
    // Filter only expense transactions and set to state
    const [transactions, setTransactions] = useState(
        transactionsData.filter(t => t.type === "expense")
    );
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Form state
    const [formData, setFormData] = useState({
        title: "",
        category: "food",
        amount: "",
        date: ""
    });

    const categories = ["food", "medicine", "dress", "education", "bill", "transport", "other"];
    
    // Calculate total expense
    const totalExpense = transactions.reduce((acc, curr) => acc + curr.amount, 0);

    const handleAddExpense = (e) => {
        e.preventDefault();
        if (!formData.amount || !formData.date) return;

        const newTx = {
            id: Date.now(), // Generate a unique ID
            title: formData.title || formData.category,
            type: "expense",
            amount: parseFloat(formData.amount),
            date: formData.date
        };

        // Add the new transaction to the start of the list
        setTransactions([newTx, ...transactions]);
        setIsModalOpen(false); // Close modal
        
        // Reset form
        setFormData({ title: "", category: "food", amount: "", date: "" });
    };

    return (
        <div className="w-full relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <h2 className="text-3xl font-bold text-white">Outcome Management</h2>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl font-semibold transition-colors shadow-lg shadow-red-500/30"
                >
                    <FaPlus /> Add Outcome
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4">
                    <div className="bg-slate-800 rounded-2xl w-full max-w-md border border-slate-700 shadow-2xl overflow-hidden p-6 relative">
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
                        >
                            <FaTimes size={20} />
                        </button>
                        
                        <h3 className="text-2xl font-bold text-white mb-6">Add New Outcome</h3>
                        
                        <form onSubmit={handleAddExpense} className="space-y-4">
                            <div>
                                <label className="block text-slate-300 text-sm mb-1">Title (Optional)</label>
                                <input 
                                    type="text" 
                                    placeholder="e.g. McDonald's Dinner"
                                    value={formData.title}
                                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white outline-none focus:border-red-500 transition-colors"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-slate-300 text-sm mb-1">Category</label>
                                <select 
                                    value={formData.category}
                                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white outline-none focus:border-red-500 transition-colors capitalize"
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-slate-300 text-sm mb-1">Amount ($)</label>
                                    <input 
                                        type="number" 
                                        required
                                        min="0"
                                        step="0.01"
                                        placeholder="0.00"
                                        value={formData.amount}
                                        onChange={(e) => setFormData({...formData, amount: e.target.value})}
                                        className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white outline-none focus:border-red-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-300 text-sm mb-1">Date</label>
                                    <input 
                                        type="date" 
                                        required
                                        value={formData.date}
                                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                                        className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white outline-none focus:border-red-500 transition-colors hidden-calendar-icon"
                                    />
                                </div>
                            </div>
                            
                            <button 
                                type="submit"
                                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 mt-4 rounded-xl transition-colors shadow-lg shadow-red-500/30"
                            >
                                Save Outcome
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Expense Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <SummaryCard 
                    title="Total Expense" 
                    amount={totalExpense} 
                    icon={<FaArrowDown className="text-2xl" />} 
                    type="expense" 
                />
            </div>

            {/* Expense Transactions List */}
            <RecentTransactions 
                transactions={transactions} 
                title="Outcome History"
            />
        </div>
    );
}
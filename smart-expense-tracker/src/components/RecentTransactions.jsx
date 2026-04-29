import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function RecentTransactions({ transactions, title = "Recent Transactions" }) {
    return (
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg mt-8">
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-700 text-slate-400">
                            <th className="py-3 px-4 font-semibold text-sm">Title</th>
                            <th className="py-3 px-4 font-semibold text-sm">Date</th>
                            <th className="py-3 px-4 font-semibold text-sm text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id} className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors">
                                <td className="py-4 px-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg ${transaction.type === 'income' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                                            {transaction.type === 'income' ? <FaArrowUp size={12} /> : <FaArrowDown size={12} />}
                                        </div>
                                        <span className="text-white font-medium">{transaction.title}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-4 text-slate-400">{transaction.date}</td>
                                <td className={`py-4 px-4 text-right font-bold space-x-1 ${transaction.type === 'income' ? 'text-green-400' : 'text-red-400'}`}>
                                    {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
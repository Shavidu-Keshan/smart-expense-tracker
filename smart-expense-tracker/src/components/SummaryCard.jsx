import React from "react";

export default function SummaryCard({ title, amount, icon, type }) {
    const isIncome = type === "income";
    const isExpense = type === "expense";
    
    const textColor = isIncome ? "text-green-400" : isExpense ? "text-red-400" : "text-white";
    const bgColor = isIncome ? "bg-green-500/20" : isExpense ? "bg-red-500/20" : "bg-blue-500/20";
    const iconColor = isIncome ? "text-green-400" : isExpense ? "text-red-400" : "text-blue-400";
    const prefix = isIncome ? "+" : isExpense ? "-" : "";

    return (
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg flex items-center justify-between">
            <div>
                <p className="text-slate-400 text-sm font-medium mb-1">{title}</p>
                <h3 className={`text-3xl font-bold ${textColor}`}>
                    {prefix}${amount.toLocaleString()}
                </h3>
            </div>
            <div className={`${bgColor} p-4 rounded-xl ${iconColor}`}>
                {icon}
            </div>
        </div>
    );
}
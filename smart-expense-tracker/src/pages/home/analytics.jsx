import React from "react";
import { 
    PieChart, Pie, Cell, Tooltip as PieTooltip, 
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as BarTooltip, Legend, 
    ResponsiveContainer 
} from "recharts";
import transactionsData from "../../json/transactions.json";

export default function Analytics() {
    // 1. Prepare data for the Expense Pie Chart
    const expenseData = transactionsData
        .filter(t => t.type === "expense")
        .map(t => ({ name: t.title, value: t.amount }));
    
    // Custom colors for the Pie slices
    const COLORS = ['#ef4444', '#f59e0b', '#3b82f6', '#10b981', '#8b5cf6', '#ec4899'];

    // 2. Prepare data for the Income vs Expense over time Bar Chart
    const barDataMap = transactionsData.reduce((acc, t) => {
        if (!acc[t.date]) {
            acc[t.date] = { date: t.date, Income: 0, Expense: 0 };
        }
        if (t.type === "income") {
            acc[t.date].Income += t.amount;
        } else {
            acc[t.date].Expense += t.amount;
        }
        return acc;
    }, {});

    // Convert map to sorted array by date
    const barData = Object.values(barDataMap).sort((a, b) => new Date(a.date) - new Date(b.date));

    // Calculate totals for quick stats
    const totalIncome = transactionsData.filter(t => t.type === "income").reduce((acc, curr) => acc + curr.amount, 0);
    const totalExpense = transactionsData.filter(t => t.type === "expense").reduce((acc, curr) => acc + curr.amount, 0);

    return (
        <div className="w-full">
            <h2 className="text-3xl font-bold text-white mb-6">Financial Analytics</h2>

            {/* Quick Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg flex justify-between items-center">
                    <div>
                        <p className="text-slate-400 text-sm font-medium mb-1">Total Income Analysed</p>
                        <h3 className="text-2xl font-bold text-green-400">${totalIncome.toLocaleString()}</h3>
                    </div>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg flex justify-between items-center">
                    <div>
                        <p className="text-slate-400 text-sm font-medium mb-1">Total Expenses Analysed</p>
                        <h3 className="text-2xl font-bold text-red-400">${totalExpense.toLocaleString()}</h3>
                    </div>
                </div>
            </div>

            {/* Charts Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Pie Chart: Expense Breakdown */}
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg h-[400px] flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-6 text-center">Expense Breakdown</h3>
                    <div className="flex-1 w-full relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={expenseData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {expenseData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <PieTooltip 
                                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff', borderRadius: '8px' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Bar Chart: Income vs Expense Trend */}
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg h-[400px] flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-6 text-center">Income vs Expense Trend</h3>
                    <div className="flex-1 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={barData}
                                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                                <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <BarTooltip 
                                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff', borderRadius: '8px' }}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                <Bar dataKey="Income" fill="#10b981" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="Expense" fill="#ef4444" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>
    );
}
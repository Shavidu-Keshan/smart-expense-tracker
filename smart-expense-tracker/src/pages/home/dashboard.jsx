import React from "react";
import { FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa";
import transactionsData from "../../json/transactions.json";
import SummaryCard from "../../components/SummaryCard";
import RecentTransactions from "../../components/RecentTransactions";

export default function Dashboard() {
    // Calculate totals automatically from the JSON data
    const totalIncome = transactionsData.filter(t => t.type === "income").reduce((acc, curr) => acc + curr.amount, 0);
    const totalExpense = transactionsData.filter(t => t.type === "expense").reduce((acc, curr) => acc + curr.amount, 0);
    const balance = totalIncome - totalExpense;

    return (
        <div className="w-full">
            <h2 className="text-3xl font-bold text-white mb-6">Dashboard Overview</h2>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SummaryCard 
                    title="Total Balance" 
                    amount={balance} 
                    icon={<FaWallet className="text-2xl" />} 
                    type="balance" 
                />
                <SummaryCard 
                    title="Total Income" 
                    amount={totalIncome} 
                    icon={<FaArrowUp className="text-2xl" />} 
                    type="income" 
                />
                <SummaryCard 
                    title="Total Expense" 
                    amount={totalExpense} 
                    icon={<FaArrowDown className="text-2xl" />} 
                    type="expense" 
                />
            </div>

            {/* Recent Transactions Component */}
            <RecentTransactions transactions={transactionsData} />
        </div>
    );
}   
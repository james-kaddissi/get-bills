import React, { useState } from 'react';

const ProfilePage = () => {

    const [incomeEntries, setIncomeEntries] = useState([]);
    const [expenseEntries, setExpenseEntries] = useState([]);

    const addIncome = () => {
        setIncomeEntries([...incomeEntries, { id: Date.now(), name: '', date: '', amount: ''}]);
    };

    const addExpense = () => {
        setExpenseEntries([...expenseEntries, { id: Date.now(), name: '', date: '', amount: ''}]);
    };

    const updateAccount = (type, id, field, value) => {
        const setFunction = type === 'income' ? setIncomeEntries : setExpenseEntries;
        let entries = type === 'income' ? incomeEntries : expenseEntries;

        setFunction(entries.map(entry => entry.id === id ? { ...entry, [field]: value } : entry));
    };


    const deleteAccount = (type, id) => {
        const setFunction = type === 'income' ? setIncomeEntries : setExpenseEntries;
        const entries = type === 'income' ? incomeEntries : expenseEntries;

        setFunction(entries.filter(entry => entry.id !== id));
    };

    const totalIncome = incomeEntries.reduce((sum, e) => sum + Number(e.amount || 0), 0);
    const totalExpenses = expenseEntries.reduce((sum, e) => sum + Number(e.amount || 0), 0);
    const totalCapital = totalIncome - totalExpenses;


    const [portfolioEntries, setPortfolioEntries] = useState([]);

    const addHolding = () => {
        setPortfolioEntries([...portfolioEntries, { id: Date.now(), type: 'Stock', name: '', date: '', quantity: '', buyPrice: '', currentPrice: ''}]);
    };

    const updateHolding = (id, field, value) => {
        setPortfolioEntries(portfolioEntries.map(entry => entry.id === id ? { ...entry, [field]: value } : entry));
    };

    const deleteHolding = (id) => {
        setPortfolioEntries(portfolioEntries.filter(entry => entry.id !== id));
    };

    const getCalculation = (entry) => {
        return (Number(entry.currentPrice || 0) - Number(entry.buyPrice || 0)) * Number(entry.quantity || 0);
    }

    const totalProfit = portfolioEntries.reduce((sum, e) => sum + getCalculation(e), 0)

    return (
        <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-8">
                <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-700">
                    <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-6 py-4">
                        <h2 className="text-2xl font-bold text-gray-900">Budget Calculator</h2>
                    </div>
                    
                    <div className="p-6">
                        <div className="flex flex-wrap gap-3 mb-6">
                            <button 
                                onClick={addIncome} 
                                className="px-4 py-2 bg-amber-500 text-gray-900 font-medium rounded-lg shadow hover:bg-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
                                + Add Income
                            </button>
                            <button 
                                onClick={addExpense} 
                                className="px-4 py-2 bg-gray-700 text-amber-300 font-medium rounded-lg shadow hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
                                + Add Expense
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left border-b border-gray-700">
                                        <th className="pb-3 font-medium text-gray-400 w-1/6">Type</th>
                                        <th className="pb-3 font-medium text-gray-400 w-1/4">Name</th>
                                        <th className="pb-3 font-medium text-gray-400 w-1/6">Date</th>
                                        <th className="pb-3 font-medium text-gray-400 w-1/6">Amount ($)</th>
                                        <th className="pb-3 font-medium text-gray-400 w-12"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-700">
                                    {[...incomeEntries.map(e => ({ ...e, type: 'Income' })), ...expenseEntries.map(e => ({ ...e, type: 'Expense' }))].map((entry) => (
                                        <tr key={entry.id} className="group hover:bg-gray-750">
                                            <td className="py-3">
                                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${entry.type === 'Income' ? 'bg-amber-500/20 text-amber-300' : 'bg-gray-600 text-gray-300'}`}>
                                                    {entry.type}
                                                </span>
                                            </td>
                                            <td className="py-3">
                                                <input
                                                    type="text"
                                                    className="w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:ring-opacity-50"
                                                    value={entry.name}
                                                    onChange={(e) => updateAccount(entry.type.toLowerCase(), entry.id, 'name', e.target.value)}
                                                />
                                            </td>
                                            <td className="py-3">
                                                <input
                                                    type="date"
                                                    className="w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:ring-opacity-50"
                                                    value={entry.date}
                                                    onChange={(e) => updateAccount(entry.type.toLowerCase(), entry.id, 'date', e.target.value)}
                                                />
                                            </td>
                                            <td className="py-3">
                                                <input
                                                    type="number"
                                                    className="w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:ring-opacity-50"
                                                    value={entry.amount}
                                                    onChange={(e) => updateAccount(entry.type.toLowerCase(), entry.id, 'amount', e.target.value)}
                                                />
                                            </td>
                                            <td className="py-3 text-center">
                                                <button
                                                    onClick={() => deleteAccount(entry.type.toLowerCase(), entry.id)}
                                                    className="opacity-50 group-hover:opacity-100 p-1 text-gray-400 hover:text-amber-300 rounded-full hover:bg-gray-700 transition-colors"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 p-5 bg-gray-750 rounded-xl border border-gray-700">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <p className="text-sm text-gray-400 mb-1">Total Income</p>
                                    <p className="text-xl font-bold text-amber-400">${totalIncome.toFixed(2)}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-400 mb-1">Total Expenses</p>
                                    <p className="text-xl font-bold text-gray-300">${totalExpenses.toFixed(2)}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-400 mb-1">Total Capital</p>
                                    <p className={`text-xl font-bold ${totalCapital >= 0 ? 'text-amber-400' : 'text-gray-300'}`}>
                                        ${totalCapital.toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-700">
                    <div className="bg-gradient-to-r from-yellow-500 to-amber-700 px-6 py-4">
                        <h2 className="text-2xl font-bold text-gray-900">Portfolio Tracker</h2>
                    </div>
                    
                    <div className="p-6">
                        <div className="mb-6">
                            <button 
                                onClick={addHolding} 
                                className="px-4 py-2 bg-amber-600 text-gray-900 font-medium rounded-lg shadow hover:bg-amber-500 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
                                + Add Holding
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left border-b border-gray-700">
                                        <th className="pb-3 font-medium text-gray-400">Type</th>
                                        <th className="pb-3 font-medium text-gray-400">Name</th>
                                        <th className="pb-3 font-medium text-gray-400">Date</th>
                                        <th className="pb-3 font-medium text-gray-400">Quantity</th>
                                        <th className="pb-3 font-medium text-gray-400">Buy Price ($)</th>
                                        <th className="pb-3 font-medium text-gray-400">Current Price ($)</th>
                                        <th className="pb-3 font-medium text-gray-400 w-12"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-700">
                                    {portfolioEntries.map((entry) => (
                                        <tr key={entry.id} className="group hover:bg-gray-750">
                                            <td className="py-3">
                                                <select
                                                    className="w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:ring-opacity-50"
                                                    value={entry.type}
                                                    onChange={(e) => updateHolding(entry.id, 'type', e.target.value)}
                                                >
                                                    <option value="Stock">Stock</option>
                                                    <option value="Bond">Bond</option>
                                                    <option value="Crypto">Crypto</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </td>
                                            <td className="py-3">
                                                <input
                                                    type="text"
                                                    className="w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:ring-opacity-50"
                                                    value={entry.name}
                                                    onChange={(e) => updateHolding(entry.id, 'name', e.target.value)}
                                                />
                                            </td>
                                            <td className="py-3">
                                                <input
                                                    type="date"
                                                    className="w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:ring-opacity-50"
                                                    value={entry.date}
                                                    onChange={(e) => updateHolding(entry.id, 'date', e.target.value)}
                                                />
                                            </td>
                                            <td className="py-3">
                                                <input
                                                    type="number"
                                                    className="w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:ring-opacity-50"
                                                    value={entry.quantity}
                                                    onChange={(e) => updateHolding(entry.id, 'quantity', e.target.value)}
                                                />
                                            </td>
                                            <td className="py-3">
                                                <input
                                                    type="number"
                                                    className="w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:ring-opacity-50"
                                                    value={entry.buyPrice}
                                                    onChange={(e) => updateHolding(entry.id, 'buyPrice', e.target.value)}
                                                />
                                            </td>
                                            <td className="py-3">
                                                <input
                                                    type="number"
                                                    className="w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:ring-opacity-50"
                                                    value={entry.currentPrice}
                                                    onChange={(e) => updateHolding(entry.id, 'currentPrice', e.target.value)}
                                                />
                                            </td>
                                            <td className="py-3 text-center">
                                                <button
                                                    onClick={() => deleteHolding(entry.id)}
                                                    className="opacity-50 group-hover:opacity-100 p-1 text-gray-400 hover:text-amber-300 rounded-full hover:bg-gray-700 transition-colors"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 p-5 bg-gray-750 rounded-xl border border-gray-700 text-center">
                            <p className="text-sm text-gray-400 mb-1">Total Profit</p>
                            <p className={`text-2xl font-bold ${totalProfit >= 0 ? 'text-amber-400' : 'text-gray-300'}`}>
                                ${totalProfit.toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
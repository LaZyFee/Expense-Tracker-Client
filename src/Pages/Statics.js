import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Helmet } from 'react-helmet';
import Chart from 'chart.js/auto';
import { Home, ShoppingCart, User, Heart, BookOpen, Truck, DollarSign, FileText } from 'lucide-react';
import { Linkedin, Trash2, Box } from 'lucide-react';
import ProgressBar from "@ramonak/react-progress-bar";

const dataExpenseDistribution = {
    labels: ['Bills & Utilities', 'Food', 'Personal', 'Healthcare', 'Education', 'Transport', 'Investment', 'Other'],
    datasets: [{
        label: 'Expenses',
        data: [3600, 1400, 2300, 100, 480, 960, 2400, 720],
        backgroundColor: ['#004DFF', '#00E096', '#FFD700', '#FF7373', '#9CFF73', '#FF0073', '#7300FF', '#FFAF00'],
        hoverBackgroundColor: ['#003ABF', '#00A864', '#E5BE00', '#E55A5A', '#79FF4C', '#B60051', '#52007F', '#BF7F00'],
        borderWidth: 0,
    }],
};

const dataBudgetVsExpense = {
    labels: ['Expense', 'Remaining Budget'],
    datasets: [{
        data: [8630, 12000 - 8630],
        backgroundColor: ['#004DFF', '#d4e5ff'],
        hoverBackgroundColor: ['#003ABF', '#b0ccff'],
        borderWidth: 0,
    }],
};

const optionsBudgetVsExpense = {
    cutout: '70%',
    plugins: {
        tooltip: {
            callbacks: {
                label: (tooltipItem) => `${tooltipItem.label}: $${tooltipItem.raw}`,
            },
        },
        legend: {
            display: false,
        },
    },
};

const optionsExpenseDistribution = {
    cutout: '70%',
    rotation: Math.PI,
    plugins: {
        tooltip: {
            callbacks: {
                label: (tooltipItem) => {
                    const total = dataExpenseDistribution.datasets[0].data.reduce((a, b) => a + b, 0);
                    const percentage = ((tooltipItem.raw / total) * 100).toFixed(2);
                    return `${tooltipItem.label}: ${percentage}%`;
                },
            },
        },
        legend: {
            display: false,
        },
    },
};

const categories = [
    { name: 'Bills & Utilities', amount: 3600, budget: 3200, icon: <Home /> },
    { name: 'Food', amount: 1400, budget: 1100, icon: <ShoppingCart /> },
    { name: 'Personal', amount: 2300, budget: 5000, icon: <User /> },
    { name: 'Healthcare', amount: 100, budget: 800, icon: <Heart /> },
    { name: 'Education', amount: 480, budget: 300, icon: <BookOpen /> },
    { name: 'Transport', amount: 960, budget: 700, icon: <Truck /> },
    { name: 'Investment', amount: 2400, budget: 2400, icon: <DollarSign /> },
    { name: 'Other', amount: 720, budget: 400, icon: <FileText /> },
];

const upcomingExpenses = [
    { date: '28 August', title: 'LinkedIn Subscription', amount: 30, icon: <Linkedin /> },
    { date: '31 August', title: 'Office 365 Subscription', amount: 12, icon: <Box /> },
    { date: '02 September', title: 'Dota Plus: August', amount: 8, icon: <Box /> },
    { date: '07 September', title: 'Waste Disposal Bill', amount: 20, icon: <Trash2 /> },
];

const Statics = () => {
    const totalExpense = dataExpenseDistribution.datasets[0].data.reduce((a, b) => a + b, 0);

    useEffect(() => {
        // Cleanup Chart instances on unmount
        return () => {
            // Check if Chart.instances exists and is an array
            if (Array.isArray(Chart.instances)) {
                Chart.instances.forEach(chart => {
                    chart.destroy();
                });
            }
        };
    }, []);

    return (
        <div className="p-6 overflow-auto">
            <Helmet>
                <title>Statics - Expense Tracker</title>
            </Helmet>

            <h2 className="text-xl font-bold">Expense Distribution (01 - 22 August)</h2>
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className='w-2/5 flex justify-center items-center mx-2'>
                    <div>
                        {dataExpenseDistribution.labels.map((label, index) => {
                            const value = dataExpenseDistribution.datasets[0].data[index];
                            const percentage = ((value / totalExpense) * 100).toFixed(2);
                            return (
                                <div key={label} className="flex items-center mb-2">
                                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: dataExpenseDistribution.datasets[0].backgroundColor[index] }}></div>
                                    <span className="ml-2">{`${label}: ${percentage}%`}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body p-4">
                            <Doughnut data={dataExpenseDistribution} options={optionsExpenseDistribution} />
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-lg w-full lg:w-1/5 mx-auto">
                    <div className="card-body p-4">
                        <h2 className="card-title text-md font-bold">Budget Vs Expense</h2>
                        <div className="flex justify-center">
                            <Doughnut data={dataBudgetVsExpense} options={optionsBudgetVsExpense} />
                        </div>
                        <div className="text-center mt-2">
                            <span className="block text-xl font-bold">$8,630</span>
                            <span className="text-gray-500 text-sm">of $12,000</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div>
                    <h2 className="text-xl font-bold mt-6">Category wise Expenses</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category, index) => {
                            const progress = ((category.amount / category.budget) * 100).toFixed(2);
                            return (
                                <div key={index} className="card bg-base-100 shadow-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center">
                                            <div className="icon w-8 h-8">{category.icon}</div>
                                            <span className="ml-3 whitespace-nowrap font-md">{category.name}</span>
                                        </div>
                                    </div>
                                    <div className="text-sm mb-3">${category.amount} of ${category.budget}</div>
                                    <ProgressBar
                                        completed={progress}
                                        bgColor={progress >= 100 ? "#FF0000" : "#00A8FF"}
                                        height="15px"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold mt-6">Upcoming Expenses</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {upcomingExpenses.map(({ date, title, amount, icon }, index) => (
                            <div key={index} className="card bg-base-100 shadow-lg flex items-center p-4">
                                <div className="icon w-10 h-10">{icon}</div>
                                <div className="ml-2">
                                    <div className="text-sm text-gray-500">{date}</div>
                                    <div className="text-lg font-semibold">{title}</div>
                                    <div className="text-sm">${amount}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statics;
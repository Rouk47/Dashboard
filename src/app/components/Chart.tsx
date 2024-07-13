'use client'
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = () => {
    const [chartData, setChartData] = useState({
        labels: [], // Your chart labels
        datasets: [
            {
                label: 'Sick Leave',
                data: [], // Your chart data
                backgroundColor: 'rgb(75, 192, 100)', // Color for the chart bars
                borderWidth: 1,
            },
            {
                label: 'Paid Leave',
                data: [], // Your chart data
                backgroundColor: 'rgb(255, 205, 86)', // Color for the chart bars
                
                borderWidth: 1,
            },
            {
                label: 'Upaid Leave',
                data: [], // Your chart data
                backgroundColor: 'rgb(255, 99, 100)', // Color for the chart bars
                borderWidth: 1,
            },
        ],
    });

    const [chartOptions, setChartOptions] = useState({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                align: 'start',
            },
            title: {
                display: true,
                text: 'Time Off Statistics',
                align: 'start',
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                },
            },
        },
    });
    
    useEffect(() => {
        // Fetch your data here and update chartData and chartOptions as needed
        setChartData({
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    ...chartData.datasets[0],
                    data: [90, 60, 20, 0, 60, 59, 59],
                },
                {
                    ...chartData.datasets[1],
                    data: [25, 25, 0, 20, 20, 25, 25],
                },
                {
                    ...chartData.datasets[2],
                    data: [10, 30, 0, 0, 0, 30, 30],
                },
            ],
            
        });
    }, []); // This effect runs once on mount

    return (
        <div >
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default Chart;

import React from 'react';
import { useParams } from "react-router-dom";
import getInvoices from './Data';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



export default function Project() {
    const params = useParams();
    const invoices = getInvoices();
    let invoice = invoices[0];

    for (let i = 0; i < invoices.length; i++) {
        if (invoices[i].id === params.projectId) {
            invoice = invoices[i];
        }
    }

    let data = {
        labels: [2017, 2018, 2019, 2020, 2021, 2022],
        datasets: [{
            label: "carbon data",
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: invoice.data
        }]
    }

    let options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top' as const,
        },
        title: {
        display: true,
        text: 'Chart.js Line Chart',
        },
    },
    };

    return(
        <div>
            <h1>Project ID: {invoice.id}</h1>
            <Line options={options} data={data}/>
        </div>
    );
}
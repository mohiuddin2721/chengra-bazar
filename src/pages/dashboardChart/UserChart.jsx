import React from 'react';
import ReactApexChart from 'react-apexcharts';

const UserChart = () => {

    const options = {
        theme: {
            mode: 'dark',
        },
        chart: {
            height: 450,
            type: 'area',
            stacked: true,
            background: 'transparent',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'month',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
        title: {
            text: 'users & sells overview',
            style: {
                color: '#0f0',
                fontSize: 20,
            }
        },
        subtitle: {
            text: '7% more in 2023',
            style: {
                color: '#0f0',
                fontSize: 14,
            }
        }
    }


    const series = [
        {
            name: 'Sells',
            data: [107, 80, 134, 115, 280, 345, 475, 608]
        }, {
            name: 'Users',
            data: [287, 150, 312, 180, 345, 658, 815, 1125]
        }
    ];

    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="area"
                height={450}
            />
        </div>
    );
};

export default UserChart;
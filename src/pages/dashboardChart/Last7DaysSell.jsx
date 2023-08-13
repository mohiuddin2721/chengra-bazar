import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Last7DaysSell = () => {
    const [series, setSeries] = useState([44, 55, 13, 43, 47, 61, 34]);
    const customLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const options = {
        chart: {
            width: 380,
            type: 'pie',
        },
        // labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        labels: customLabels,
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
    };

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="pie" width={380} />
        </div>
    );
};

export default Last7DaysSell;

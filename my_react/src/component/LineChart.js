import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import '../../node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css';
import { SelectButton } from 'primereact/selectbutton';
import styled from 'styled-components';

const StyleSelectButton = styled.div`
.p-button {
    padding: 0.5em 1em;
}
`

export default function LineStylesDemo() {
    //Chart
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    tension: 0.4,
                    borderColor: documentStyle.getPropertyValue('--blue-500')
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderDash: [5, 5],
                    tension: 0.4,
                    borderColor: documentStyle.getPropertyValue('--teal-500')
                },
                {
                    label: 'Third Dataset',
                    data: [12, 51, 62, 33, 21, 62, 45],
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--orange-500'),
                    tension: 0.4,
                    backgroundColor: 'rgba(255,167,38,0.2)'
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    //SelectButtom
    const [value, setValue] = useState(null);
    const items = [
        { name: '當日', value: 1 },
        { name: '本週', value: 2 },
        { name: '本月', value: 3 },
        { name: '本年', value: 4 },
    ];

    return (
        <div class="grid grid-nogutter">
            <div class='col-12 grid grid-nogutter'>
                <div class='col' style={{ alignSelf: 'center' }}>
                    <div>title</div>
                    <div>subtitle</div>
                </div>
                <StyleSelectButton class='col-fixed'>
                    <SelectButton value={value} onChange={(e) => setValue(e.value)} optionLabel="name" options={items} multiple />
                </StyleSelectButton>
            </div>
            <div class='col-12' >
                <Chart type="line" data={chartData} options={chartOptions} style={{ height: '35vh' }} />
            </div>
        </div>
    )
}

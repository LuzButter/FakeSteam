import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MainChart = () => {
    let demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

    return (
        <ResponsiveContainer width={'100%'} height={'100%'} >
            <PieChart>
                <Pie
                    data={data}
                    innerRadius={'70%'}
                    outerRadius={'100%'}
                    fill="#8884d8"
                    paddingAngle={1}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default MainChart
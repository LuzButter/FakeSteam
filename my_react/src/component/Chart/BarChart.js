import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const defaultdata = [
    {
        name: 'Page A',
        uv: 40,
    },
    {
        name: 'Page B',
        uv: 30,
    },
    {
        name: 'Page C',
        uv: 20,
    },
    {
        name: 'Page D',
        uv: 27,
    },
    {
        name: 'Page E',
        uv: 18,
    },
    {
        name: 'Page F',
        uv: 23,
    },
    {
        name: 'Page G',
        uv: 34,
    },
];

const MainChart = ({data=defaultdata}) => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend align='right' />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default MainChart

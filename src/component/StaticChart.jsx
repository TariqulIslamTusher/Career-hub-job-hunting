import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    {
        name: 'Assignment 1',
        marks: 60,
        fill: "#90ef"
    },
    {
        name: 'Assignment 2',
        marks: 56,
        fill: '#8884d8',
    },
    {
        name: 'Assignment 3',
        marks: 30,
        fill: '#83a677',
    },
    {
        name: 'Assignment 4',
        marks: 60,
        fill: '#8def10',
    },
    {
        name: 'Assignment 5',
        marks: 50,
        fill: '#82ca9d',
    },
    {
        name: 'Assignment 6',
        marks: 47,
        fill: '#f1de6c',
    },
    {
        name: 'Assignment 7',
        marks: 38,
        fill: '#a5ed57',
    },
    {
        name: 'Assignment 8',
        marks: 55,
        fill: '#ffc658',
    },
];

const style = {
    top: '30%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '44px',
    fontSize:'30px'
};
const StaticChart = () => {


    return (
        <div className='my-container mx-auto'>
            <RadialBarChart
                width={1000}
                height={800}
                cx={350}
                cy={320}
                innerRadius={50}
                outerRadius={240}
                barSize={50}
                data={data}
            >
                <RadialBar
                    minAngle={15}
                    label={{ position: "insideStart", fill: "#000" }}
                    background
                    clockWise
                    dataKey="marks"
                />
                <Legend
                    iconSize={10}
                    width={250}
                    height={200}
                    layout="vertical"
                    verticalAlign="middle"
                    wrapperStyle={style}
                />
                <Tooltip></Tooltip>
            </RadialBarChart>

        </div>
    );
};

export default StaticChart;
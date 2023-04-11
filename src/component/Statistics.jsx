import React from 'react';
import PageTopStyle from './PageTopStyle';
import StaticChart from './StaticChart';

const Statistics = () => {
    return (
        <div className='text-center'>
            <PageTopStyle>Statistics of Last Assignments</PageTopStyle>
            <StaticChart></StaticChart>
            <h1 className='text-4xl font-bold pb-6'>Chart: <span className='text-3xl font-normal'>Previous Assignments marks</span></h1>
        </div>
    );
};

export default Statistics;
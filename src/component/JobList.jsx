import React, { useEffect, useState } from 'react';
import JobCategoryCard from './JobCategoryCard';

const JobList = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('jobList.json')
            .then(res => res.json())
            .then(data => setData(data))
    },[])

    return (
        <div className='py-12 my-container mx-auto text-center'>
            <div>
                <h1 className='text-2xl md:text-5xl font-bold my-5'>Job Category List</h1>
                <p className='text-sm text-muted'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    data.map(singleData => <JobCategoryCard singleData={singleData} key={singleData.id}></JobCategoryCard>)
                }
            </div>

        </div>
    );
};

export default JobList;
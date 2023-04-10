import React, { useContext } from 'react';
import FeatureCard from './FeatureCard';
import LgBtn from './LgBtn';
import { RingContext } from './Home';

const FeatureJob = () => {
    const companies = useContext(RingContext)

    return (
        <div className='py-7 my-container mx-auto'>
            <div className='py-6 text-center divide-x-2'>
                <h1 className='text-2xl md:text-5xl font-bold my-5'>Featured Jobs</h1>
                <p className='text-sm text-muted'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='grid md:grid-cols-2 gap-5'>
                {
                    companies.slice(0,4).map(company => <FeatureCard key={company.id} company={company}></FeatureCard>)
                }
            </div>

            <div className='text-center mt-8'>
                <LgBtn>See More</LgBtn>
            </div>
        </div>
    );
};

export default FeatureJob;
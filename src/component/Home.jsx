import React, { createContext } from 'react';
import Banner from './Banner';
import JobList from './JobList';
import FeatureJob from './FeatureJob';
import { useLoaderData } from 'react-router-dom';

export const RingContext = createContext([])

const Home = () => {
   const companies = useLoaderData()

    return (
        <div>
            <RingContext.Provider value={companies}>
                <Banner></Banner>
                <JobList></JobList>
                <FeatureJob ></FeatureJob>
            </RingContext.Provider>
        </div>
    );
};

export default Home;
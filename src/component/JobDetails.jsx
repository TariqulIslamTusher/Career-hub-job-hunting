import React from 'react';
import PageTopStyle from './PageTopStyle';
import { useLoaderData } from 'react-router-dom';


const JobDetails = () => {
    const singleCompany =  useLoaderData()
    console.log(singleCompany);
    return (
        <div>
            <PageTopStyle>Job Details</PageTopStyle>
            <h2>this is tiny</h2>
            
        </div>
    );
};

export default JobDetails;
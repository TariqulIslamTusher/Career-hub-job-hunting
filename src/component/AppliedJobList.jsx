import React, { useEffect, useState } from 'react';
import PageTopStyle from './PageTopStyle';
import { getItemFromLocalStoreage } from './Utilities/Utilities';

const AppliedJobList = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('/public/companyDetails.json')
            .then(res => res.json())
            .then(data => setData(data))
    },[])

    const localObject = getItemFromLocalStoreage()
    const ArrayOfLocalObject = Object.keys(localObject)

    const appliedList = data.filter(Sdata => ArrayOfLocalObject.includes(Sdata.id))

    console.log(appliedList)
    return (
        <div>
            <PageTopStyle>Applied Job</PageTopStyle>
            <div className='my-container mx-auto'>
                {
                    
                }
            </div>
        </div>
    );
};

export default AppliedJobList;
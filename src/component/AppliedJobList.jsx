import React, { useEffect, useState } from 'react';
import PageTopStyle from './PageTopStyle';
import { getItemFromLocalStoreage } from './Utilities/Utilities';
import VerticallyCardDesign from './VerticallyCardDesign';

const AppliedJobList = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('/public/companyDetails.json')
            .then(res => res.json())
            .then(data => setData(data))
    },[])

    const localObject = getItemFromLocalStoreage()
    let ArrayOfLocalObject;
    {
        localObject? ArrayOfLocalObject = Object.keys(localObject) : ArrayOfLocalObject = []
    }

    const appliedList = data.filter(singleData => ArrayOfLocalObject.includes(singleData.id))
    return (
        <div>
            <PageTopStyle>Applied Job</PageTopStyle>
            <div className='my-container mx-auto'>
                {
                    appliedList.map(singleList => <VerticallyCardDesign singleList={singleList}></VerticallyCardDesign>)
                }
            </div>
        </div>
    );
};

export default AppliedJobList;
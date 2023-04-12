import React, { useEffect, useState } from 'react';
import PageTopStyle from './PageTopStyle';
import { deleteLocalStorage, getItemFromLocalStoreage } from './Utilities/Utilities';
import VerticallyCardDesign from './VerticallyCardDesign';

const AppliedJobList = () => {
    // state for full data
    const [data, setData] = useState([])
    // state for filter data (remote or ontime)
    const [jobType, setJobType] = useState([])
    const [jobstate, setJobstate] = useState(false)
    // state for clearing the local storage
    const [state, setState] = useState(false)
    useEffect(() => {
        fetch('/public/companyDetails.json')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    const handleClearLocalStorage = () => {
        deleteLocalStorage()
        setState(!state)
    }


    const localObject = getItemFromLocalStoreage()
    let ArrayOfLocalObject;
    {
        localObject ? ArrayOfLocalObject = Object.keys(localObject) : ArrayOfLocalObject = []
    }


    const remote = () => {
        const Data = data.filter(singleData => ArrayOfLocalObject.includes(singleData.id))
        const remoteData = Data.filter(Sdata => Sdata.job_type[1] === "Remote-Job")
        console.log(remoteData)
        setJobstate(true)
        setJobType(remoteData)
    }

    const onTime = () => {
        const Data = data.filter(SingleData => ArrayOfLocalObject.includes(SingleData.id))
        const onTimeData = Data.filter(Sdata => Sdata.job_type[1] === "Ontime-Job")
        console.log(onTimeData)
        setJobstate(true)
        setJobType(onTimeData)
    }

    const appliedList = data.filter(singleData => ArrayOfLocalObject.includes(singleData.id))


    return (
        <div>
            <PageTopStyle>Applied Job</PageTopStyle>

            <div className='flex my-container mx-auto'>
                <button onClick={remote} className='LgBtn'>Remote Job</button>
                <button onClick={onTime} className='LgBtn'>On Time Job</button>
                <button onClick={()=> setJobstate(false)} className='LgBtn'>Default</button>
            </div>

            <div className='my-container mx-auto'>
                {
                    jobstate ? 
                        jobType.map(singleList => <VerticallyCardDesign key={singleList.id} singleList={singleList}></VerticallyCardDesign>) :
                        appliedList.map(singleList => <VerticallyCardDesign key={singleList.id} singleList={singleList}></VerticallyCardDesign>)
                }
            </div>
            <div className='py-3 text-right my-container mx-auto'>
                {localObject ? <button onClick={handleClearLocalStorage} className='LgBtn'>Clear Applience</button> : ''}
            </div>
        </div>
    );
};

export default AppliedJobList;
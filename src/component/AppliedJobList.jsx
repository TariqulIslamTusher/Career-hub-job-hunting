import React, { useEffect, useState } from 'react';
import PageTopStyle from './PageTopStyle';
import { deleteLocalStorage, getItemFromLocalStoreage } from './Utilities/Utilities';
import VerticallyCardDesign from './VerticallyCardDesign';

const AppliedJobList = () => {
    // state for full data
    const [data, setData] = useState([])
    // state for filter data (remote or Onsite)
    const [jobType, setJobType] = useState([])
    const [jobstate, setJobstate] = useState(false)
    // state for clearing the local storage
    const [state, setState] = useState(false)
    useEffect(() => {
        fetch('/companyDetails.json')
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

    const Onsite = () => {
        const Data = data.filter(SingleData => ArrayOfLocalObject.includes(SingleData.id))
        const OnsiteData = Data.filter(Sdata => Sdata.job_type[1] === "Onsite-Job")
        setJobstate(true)
        setJobType(OnsiteData)
    }

    const appliedList = data.filter(singleData => ArrayOfLocalObject.includes(singleData.id))
    const storedCart = localStorage.getItem('cart')

    return (
        <div>
            <PageTopStyle>Applied Job</PageTopStyle>
            {/* daisy ui filter */}
            <div className="my-container mx-auto">

                {storedCart ?
                    <div className="navbar flex flex-row-reverse">
                        <div></div>
                        <ul className="menu menu-horizontal px-1">

                            <li tabIndex={0}>
                                <a className='text-xl font-semibold border-2 bg-slate-100'>
                                    Filter By
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2 border bg-white">
                                    <li className='border-b-2'> <button onClick={() => setJobstate(false)}>Default</button></li>
                                    <li className='border-b-2'> <button onClick={remote} >Remote Job</button></li>
                                    <li className='border-b-2'><button onClick={Onsite} >Onsite Job</button></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                    : ''}

            </div>
            {/* daisy ui filter */}

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
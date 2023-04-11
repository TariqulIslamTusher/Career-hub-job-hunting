import React from 'react';
import { addToLocalStorage } from './Utilities/Utilities';

const TotalSingleCard = ({company}) => {

    
    const { id, logo, title, company_name, job_type, location, salary_range } = company
    console.log(company)
    return (
        <div>
            
            <div className='flex my-container mx-auto gap-8 w-full border-2 border-slate-300 m-7'>
                <div className='flex justify-center items-center'>
                    <img className='py-20 px-12 bg-slate-300' src={logo} alt="" />
                </div>

                <div className='flex justify-between items-center w-full p-6'>
                    <div>
                        <h2 className='font-bold text-2xl my-3 text-orange-700'>{title}</h2>
                        <h5 className='text-teal-700 font-semibold'>{company_name}</h5>
                        <div className='flex'>
                            {
                                job_type.map(type => <h3 className='border-2 rounded-md text-blue-700 px-3 py-1 text-sm mt-3 border-blue-300 mr-3'>{type}</h3>)
                            }
                        </div>
                        <div className='flex my-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg><p> {location}</p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-5 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                            <p>Salery : {salary_range}</p>
                        </div>

                    </div>
                    <button onClick={()=> addToLocalStorage(id)} className='LgBtn'>Apply Now</button>
                </div>

                <div>
                </div>
            </div>
        </div>
    );
};

export default TotalSingleCard;
import { useLoaderData, useParams } from 'react-router-dom';
import PageTopStyle from './PageTopStyle';
import { addToLocalStorage } from './Utilities/Utilities';
import { ToastContainer } from 'react-toastify';



const JobDetails = () => {
    const companies = useLoaderData()
    // 👇️ get ID from URL
    const params = useParams();
    // console.log(params.jobId);
    // console.log(companies);    
    const selectedData = companies?.find(company => company.id == params.jobId)
    const { id, responsibilities, educational_requirements, description, experience, email, title, salary_range, phone, address } = selectedData
    return (
        <div>
            <ToastContainer></ToastContainer>
            <PageTopStyle>Job Details</PageTopStyle>
            <div className='my-container mx-auto lg:flex lg:items-center gap-5 py-20'>
                <div className='w-full lg:w-8/12 px-16 text-xl md:text-2xl'>

                    <h3 className='text-slate-700 mb-5'><span className='mr-5 font-bold text-black'>Job Description:</span>{description}</h3>

                    <h3 className='text-slate-700 mb-5'><span className='mr-5 font-bold text-black'>Job Responsibilities:</span>{responsibilities.map(res => <li>{res}</li>)}</h3>

                    <h3 className='text-slate-700 mb-5'><span className='mr-5 font-bold text-black'>Educational Requirements:</span>{educational_requirements}</h3>

                    <h3 className='text-slate-700 mb-5'><span className='mr-5 font-bold text-black'>Experiences:</span>{experience}</h3>

                </div>

                {/* Job details and contact informations part  */}


                <div className='w-full lg:w-4/12 p-6 md:p-10 bg-[#c7c9d8] rounded-lg text-xl text-slate-600'>
                    <h2 className='font-semibold border-b-2 border-slate-600 text-slate-800'>Job Details</h2>
                    <div className='py-5 mb-8 flex flex-col gap-3'>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                            <h2> <span className='font-semibold'>Salery:</span> {salary_range}</h2>
                        </div>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                            </svg>
                            <h2> <span className='font-semibold'>Job title:</span> {title}</h2>
                        </div>
                    </div>


                    <div>
                        <h2 className='font-semibold border-b-2 border-slate-600 text-black mb-4'>Contact Information</h2>

                        <div className='flex flex-col gap-3'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <span>Phone:</span> <p>{phone}</p>
                            </div>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                                </svg>
                                <span>Email:</span><p>{email}</p>
                            </div>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <span>Address:</span><p>{address}</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4 text-center'>
                        <button onClick={() => addToLocalStorage(id)} className='LgBtn w-full'>Apply Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;
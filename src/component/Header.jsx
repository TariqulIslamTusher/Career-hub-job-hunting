import React, { useState } from 'react';
import '../index.css';
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { getItemFromLocalStoreage } from './Utilities/Utilities';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='bg-[#818eff25]'>
            <div className='my-container relative mx-auto flex justify-between items-center py-4'>
                <div className='md:w-5/12 mr-auto'>
                    <Link to={'/'}><h1 className='btn btn-ghost text-2xl md:text-3xl font-bold text-purple-700'>JOB HUNTING</h1></Link>
                </div>
                <div className={`md:flex z-10 absolute  ${isOpen ? 'top-20 left-0 right-0 bg-blue-200 bg-opacity-25 py-4 px-3  gap-5' : '-top-80 left-0 right-0'} md:bg-transparent duration-700 md:static md:w-7/12 mx-auto justify-between items-center`}>
                    <ul className='md:flex list-unstyled gap-7 font-semibold text-slate-800 text-xl'>
                        <li className='hover:text-blue-600 hover:underline duration-200'><Link to='/'>Home</Link></li>

                        <li className='hover:text-blue-600 hover:underline duration-200'><Link to="/statistics">Statistics</Link></li>

                        <li className='hover:text-blue-600 hover:underline duration-200'><Link to="/Blog">Blog</Link></li>

                        <li className='hover:text-blue-600 hover:underline duration-200'><Link onClick={() => getItemFromLocalStoreage()}  to="/appliedJobList">Job Applied</Link></li>
                    </ul>

                    <div className='mt-4 md:mt-0'>
                        <Link to={'/totalCardApply'}>
                            <button className='LgBtn'>Start Applying</button>
                        </Link>
                    </div>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className='md:hidden btn btn-ghost'>
                    {!isOpen? <Bars3Icon className='h-6 w-6'></Bars3Icon> : <XMarkIcon className='h-6 w-6'></XMarkIcon>}
                </div>
            </div>
        </div>
    );
};

export default Header;
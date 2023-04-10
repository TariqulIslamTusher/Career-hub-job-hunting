import React, { useState } from 'react';
import '../index.css';
import { Link } from "react-router-dom";
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navHandler = () =>{

       
    }
    
    return (
        <div className='bg-[#818eff25]'>
            <div className='container relative mx-auto flex justify-between items-center py-3'>
                <div className='md:w-5/12 mr-auto'>
                    <h1 className='btn btn-ghost text-2xl font-bold text-purple-700'>JOB HUNTING</h1>
                </div>
                <div className={`flex absolute ${isOpen? 'top-16 right-0 w-full bg-slate-50 py-5 px-3  gap-5': ' top-16 -right-96'} md:bg-transparent duration-700 md:static md:w-7/12 mx-auto justify-between items-center`}>
                    <ul className='flex list-unstyled gap-5'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/statistics">Statistics</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>

                    <div>
                        <button className='hidden md:block btn bg-gradient-to-r from-blue-400 to-blue-800 border-0'>Stat Applying</button>
                    </div>
                </div>
                <div onClick={()=>  setIsOpen(!isOpen)} className='md:hidden btn btn-ghost'>
                    <Bars3Icon className='h-6 w-6'></Bars3Icon>
                </div>
            </div>
        </div>
    );
};

export default Header;
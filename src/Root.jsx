import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Header></Header>
            <div className='min-h-[calc(100vh-150px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
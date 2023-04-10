import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto grid md:grid-cols-2'>
            <div className="banner-caption">
                <h1 className='text-xxl font-bold'>This is the Most visited place for remote job</h1>
            </div>
            <div className="banner-img">
                <img src="https://plus.unsplash.com/premium_photo-1676998931123-75789162f170?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=" Image" />
            </div>
        </div>
    );
};

export default Banner;
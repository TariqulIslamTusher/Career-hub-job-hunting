import React from 'react';


const PageTopStyle = ({ children }) => {
    return (
        <div>
            <div className='relative bg-[#818eff25] h-12 md:h-42 lg:h-60 grid items-center text-center'>
                <h1 className='text-4xl text-blue-700'>{children}</h1>

                <img className='absolute left-0 bottom-0' src="https://i.ibb.co/stWj9MT/Vector.png" alt="logo image" />
                <img className='absolute -top-20 right-0' src="https://i.ibb.co/zbSjDv3/Vector-1.png" alt="logo image" />


            </div>
        </div>
    );
};

export default PageTopStyle;
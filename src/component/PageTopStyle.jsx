import React from 'react';

const PageTopStyle = ({children}) => {
    return (
        <div>
            <div  className=' bg-[#818eff25] h-12 md:h-42 lg:h-64 grid items-center text-center'>
                <h1 className='text-4xl text-blue-700'>{children}</h1>
            </div>
        </div>
    );
};

export default PageTopStyle;
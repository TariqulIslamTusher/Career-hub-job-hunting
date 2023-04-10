import React from 'react';

const LgBtn = ({children}) => {
    return (
        <div>
            <button className='btn bg-gradient-to-r from-blue-400 to-blue-800 border-0 duration-700 transition-all hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-800'>{children}</button>
        </div>
    );
};

export default LgBtn;
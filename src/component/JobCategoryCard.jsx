import React from 'react';

const JobCategoryCard = (props) => {
    const {img, title, availability} = props.singleData
    return (
        <div className='bg-slate-100 border-2 shadow-xl border-slate-400 p-10 text-left rounded-xl mt-8'>
            <img className='bg-blue-100 rounded-lg p-3' src={img} alt="img" />
            <h3 className='mt-3 text-lg'>{title}</h3>
            <p className='text-sm text-slate-400'>{availability}</p>
        </div>
    );
};

export default JobCategoryCard;
import React from 'react';

const JobCategoryCard = (props) => {
    const {img, title, availability} = props.singleData
    return (
        <div className='bg-slate-100 border-2 border-slate-400 p-8 text-left rounded-xl mt-8'>
            <img className='bg-slate-300 rounded-lg p-3' src={img} alt="img" />
            <h3 className='mt-3 text-lg'>{title}</h3>
            <p className='text-xs text-slate-400'>{availability}</p>
        </div>
    );
};

export default JobCategoryCard;
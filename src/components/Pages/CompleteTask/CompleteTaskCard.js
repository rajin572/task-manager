import React from 'react';

const CompleteTaskCard = ({ reviews, handleDelete, handleCompleteDelete }) => {
    const { _id, image, task } = reviews;

    return (
        <div className='myCompleteTaskTable mx-auto lg:w-[90%] md:w-[95%] sm:w-full  text-center border-b-2 border-black'>
        <img className='image h-10 rounded w-10' src={image} alt="" />
        <p className='myCompletetaskName'>{task}</p>
        <button className='delete lg:m-1 lg:p-2 p-1 rounded bg-red-500 text-white' onClick={() => handleDelete(_id)}>Delete</button>
    </div>
    );
};

export default CompleteTaskCard;
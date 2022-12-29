import React from 'react';

const TaskCard = ({ reviews, handleDelete }) => {
    const { _id, image, task } = reviews;
    return (
    <div className='myTaskTable mx-auto lg:w-[90%] md:w-[95%] sm:w-full'>
        <button className='complete m-1 p-2 rounded bg-teal-500 text-white'>complete</button>
        <img className='image h-10 rounded w-10' src={image} alt="" />
        <p className='taskName'>{task}</p>
        <button className='delete m-1 p-2 rounded bg-red-500 text-white' onClick={() => handleDelete(_id)}>Delete</button>
    </div>
    );
};

export default TaskCard;
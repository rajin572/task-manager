import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const TaskCard = ({ reviews, handleDelete, handleCompleteDelete }) => {
    const { _id, image, task } = reviews;

    const {user} = useContext(AuthContext)
    const handleAddServices = () => {;
    
        const completeTask = {
          task,
          image,
          email: user.email,
          name: user.displayName,
          photoUrl: user.photoURL
        };
    console.log(completeTask);
        fetch("http://localhost:5000/completeTask", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(completeTask),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              toast.success("Complete Task Successfully!");
              handleCompleteDelete(_id)
            }
          })
          .catch((er) => console.error(er));
      };
    return (
    <div className='myTaskTable mx-auto lg:w-[90%] md:w-[95%] sm:w-full  text-center border-b-2 border-black'>
        <button onClick={() => handleAddServices()} className='complete lg:m-1 lg:p-2 p-1 rounded bg-teal-500 text-white'>complete</button>
        <img className='image h-10 rounded w-10' src={image} alt="" />
        <p className='taskName'>{task}</p>
        <button className='delete lg:m-1 lg:p-2 p-1 rounded bg-red-500 text-white' onClick={() => handleDelete(_id)}>Delete</button>
    </div>
    );
};

export default TaskCard;
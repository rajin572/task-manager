import React, { useContext, useEffect, useState } from 'react';
import './CompleteTask.css'
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import CompleteTaskCard from './CompleteTaskCard';

const CompleteTask = () => {

    const { user } = useContext(AuthContext);
  const [myCompletetask, setMyCompletetask] = useState([]);
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    fetch(`https://task-manager-server-dusky.vercel.app/myCompleteTask?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCompletetask(data);
        isLoading(false);
      });
  }, [user?.email]);

  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure, you want to delete this task');
    if(proceed){
        fetch(`https://task-manager-server-dusky.vercel.app/myCompleteTask/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0){
                const remaining = myCompletetask.filter(odr => odr._id !== id);
                setMyCompletetask(remaining);
                toast.success('Your Task Has Been Successfully Deleted!');
            }
        })
    }
}

console.log(myCompletetask);
    return (
        <div>
            <div className=" min-h-screen mt-10">
      <h2 className=" text-4xl text-center font-bold mb-10" >Complete Tasks</h2>
      <div>
        <div className="myCompleteTaskTable bg-gray-200 mx-auto lg:w-[90%] md:w-[95%] sm:w-full font-bold text-center">
          <p className="image border-2  border-black">Image</p>
          <p className="myCompletetaskName border-2  border-black">Task Name</p>
          <p className="delete border-2  border-black">Delete</p>
        </div>
        <div>
        {myCompletetask.length > 0 ? (
          <div>
            {myCompletetask.map((task) => (
              <CompleteTaskCard
                key={task._id}
                reviews={task}
                handleDelete={handleDelete}
              ></CompleteTaskCard>
            ))}
          </div>
        ) : (
          <h3 className="text-center">You Haven't Any Task</h3>
        )}
        </div>
      </div>
    </div>
        </div>
    );
};

export default CompleteTask;
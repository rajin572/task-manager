import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";
import "./MyTask.css";
import TaskCard from "./TaskCard";

const MyTask = () => {
  const { user } = useContext(AuthContext);
  const [mytask, setMytask] = useState([]);
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    fetch(`https://task-manager-server-dusky.vercel.app/myTask?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMytask(data);
        isLoading(false);
      });
  }, [user?.email]);

  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure, you want to delete this task');
    if(proceed){
        fetch(`https://task-manager-server-dusky.vercel.app/myTask/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0){
                const remaining = mytask.filter(odr => odr._id !== id);
                setMytask(remaining);
                toast.success('Your Task Has Been Successfully Deleted!');
            }
        })
    }
}

const handleCompleteDelete = id =>{

        fetch(`https://task-manager-server-dusky.vercel.app/myTask/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0){
                const remaining = mytask.filter(odr => odr._id !== id);
                setMytask(remaining);
            }
        })
}

  return (
    <div className=" min-h-screen mt-10">
      <h2 className=" text-4xl text-center font-bold mb-10" >My Tasks</h2>
      <div>
        <div className="myTaskTable bg-gray-200 mx-auto lg:w-[90%] md:w-[95%] sm:w-full font-bold text-center">
          <p className="complete border-2 border-black">Complete</p>
          <p className="image border-2  border-black">Image</p>
          <p className="taskName border-2  border-black">Task Name</p>
          <p className="delete border-2  border-black">Delete</p>
        </div>
        <div>
        {mytask.length > 0 ? (
          <div>
            {mytask.map((task) => (
              <TaskCard
                key={task._id}
                reviews={task}
                handleDelete={handleDelete}
                handleCompleteDelete={handleCompleteDelete}
              ></TaskCard>
            ))}
          </div>
        ) : (
          <h3 className="text-center">You Haven't Any Task</h3>
        )}
        </div>
      </div>
    </div>
  );
};

export default MyTask;

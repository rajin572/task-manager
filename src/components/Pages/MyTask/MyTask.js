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
    fetch(`http://localhost:5000/myTask?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMytask(data);
        isLoading(false);
      });
  }, [user?.email]);

  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure, you want to delete this task');
    if(proceed){
        fetch(`http://localhost:5000/myTask/${id}`, {
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

  return (
    <div className=" min-h-screen mt-10">
      <h2 className=" text-4xl text-center font-bold">My Tasks</h2>
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
              ></TaskCard>
            ))}
          </div>
        ) : (
          <h3 className="text-center">You Haven't Any Review</h3>
        )}
        </div>
      </div>
    </div>
  );
};

export default MyTask;

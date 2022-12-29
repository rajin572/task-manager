import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';

const AddTask = () => {

    const {user} = useContext(AuthContext)
    const handleAddServices = (event) => {
        event.preventDefault();
        const form = event.target;
        const task = form.task.value;
        const image = form.image.value;
    
        const service = {
          task,
          image,
          email: user.email,
          name: user.displayName,
          photoUrl: user.photoURL
        };
    console.log(service);
        fetch("https://task-manager-server-dusky.vercel.app/task", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(service),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              toast.success("Add Task Successfully!");
              form.reset();
            }
          })
          .catch((er) => console.error(er));
      };

    return (
        <div id='addtask' className=' my-10'>
            <h2 className='text-4xl text-center font-bold mb-5'>Add Task</h2>
            <div className='bg-white rounded shadow-2xl p-7 sm:p-10 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl 
            md:px-24 lg:px-8'>
            <form onSubmit={handleAddServices} className='mb-6'>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="task"
                      className="inline-block mb-1 font-medium"
                    >
                      Task Name
                    </label>
                    <input
                      placeholder="Today Task"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="task"
                      name="task"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="image"
                      className="inline-block mb-1 font-medium"
                    >
                      Image Link
                    </label>
                    <input
                      placeholder="Image Link"
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="image"
                      name="image"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                  {
              user?.uid? 
              <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wider text-white bg-teal-500 rounded shadow-md focus:shadow-outline focus:outline-none"
            >
              ADD Task
            </button>
              :
              <>
              <p className='font-bold text-center'>To Add a Task You must need to Sign In First</p>
              <Link to='/signin'>
              <button
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wider text-white bg-teal-500 rounded shadow-md focus:shadow-outline focus:outline-none"
            >
              Sign In
            </button>
              </Link>
              </>
            }
                  </div>
                  {/* <p className="text-xs text-gray-600 sm:text-sm">
                    Haven't any account? <Link to='/signup' className='text-teal-500'>Create new account</Link>
                  </p> */}
                </form>
            </div>
        </div>
    );
};

export default AddTask;
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Signup = () => {
    const [error, setError] = useState('')
    const {createUser, updateProfileUser} = useContext(AuthContext)
    const navigate = useNavigate()

  const handleregister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.Image.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, image, email, password);
    createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user);
            form.reset()
            setError('')
            handleUpdateUserProfile(name,image)
            toast.success('Account Create Successfully!')
            navigate('/')
        })
        .catch(error =>
            {
                console.error(error)
                setError(error.message)
            })
  }

  const handleUpdateUserProfile = (name, image)  =>{
    const profile = {
        displayName:name,
        photoURL: image
    }
    updateProfileUser(profile)
    .then(()=>{})
    .catch(error =>{
        console.error(error);
    })
  }

    return (
        <div>
            <div className="overflow-hidden">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-center xl:flex-row">
              <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="text-4xl  mb-10 underline font-semibold text-center">
                  Sign Up
                </h3>
                <form onSubmit={handleregister}>
                <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="name"
                      className="inline-block mb-1 font-medium"
                    >
                      Name
                    </label>
                    <input
                      placeholder="user"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="Image"
                      className="inline-block mb-1 font-medium"
                    >
                      Image Link
                    </label>
                    <input
                      placeholder="https://ibb.co/Vw1f0G3"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="Image"
                      name="Image"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      placeholder="user978@gmai.com"
                      required
                      type="email"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="password"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      placeholder="*********"
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wider text-white bg-teal-500 rounded shadow-md focus:shadow-outline focus:outline-none"
                    >
                      Sign up
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Already have a account? <Link to='/signin' className='text-teal-500'>Sign In</Link>
                  </p>
                </form>
              </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Signup;
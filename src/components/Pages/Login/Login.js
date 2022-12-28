import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Login = () => {


  const [error, setError] = useState('')
  const {userLogin, googleLogin} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
  const HandleLogin = event =>{
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email,password);
      userLogin(email,password)
      .then(result => {
          const user = result.user
          console.log(user);
          form.reset()
          toast.success('Login Successfully!')
          navigate(from, {replace: true})
          setError('')
      })
      .catch(error =>{
          console.error(error)
          setError(error.message)
      }
      )
  }

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () =>{
      googleLogin(googleProvider)
      .then(result =>{
        setError('')
        toast.success('Google Login Successfully!')
        navigate('/')
      })
      .catch(error => {
        console.log(error);
      })
    }


    return (
        <div>
            <div className="overflow-hidden">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-center xl:flex-row">
              <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="text-4xl  mb-10 underline font-semibold text-center">
                  Sign In
                </h3>
                <form onSubmit={HandleLogin} className='mb-6'>
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
                      Sign In
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Haven't any account? <Link to='/signup' className='text-teal-500'>Create new account</Link>
                  </p>
                </form>
                <hr className='mb-6'/>
                <h2 className='text-xl text-center'>Or Using</h2>
                <button onClick={handleGoogleLogin} className=' inline-block py-2 mt-2 rounded text-white bg-teal-500 w-full'><span>Google Login</span> </button>
              </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;
import React from 'react';
import bgimg from '../../../../images/background.webp'

const Banner = () => {
    return (
<div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Get more done with TaskBook tasks.
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Plan, organize, and collaborate on any project with powerful task management that can be customized for every need.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <a
              href="#addtask"
              className="inline-flex items-center justify-center px-6 py-3 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-teal-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Add task Now
            </a>
            <span
              className="inline-flex items-center cursor-pointer font-semibold text-teal-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </span>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56  sm:h-96 lg:h-full"
          src={bgimg}
          alt=""
        />
      </div>
    </div>
    );
};

export default Banner;
import React from 'react';
import { FaGlobe, FaList, FaQuoteRight, FaWordpressSimple } from 'react-icons/fa';

const About = () => {
    return (
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            About US
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        Checking off daily tasks on your to-do list
        </p>
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <FaQuoteRight className='text-teal-700'></FaQuoteRight>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Organize your to-do list</h6>
            <p className="mb-3 text-sm text-gray-900">
            Keep your to-do list organized in TaskBook. Group related tasks with sections and sort complex project task lists by date, assignee, or even custom fields.
            </p>
          </div>
          <a
            href="#id"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-teal-500 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <FaList className='text-teal-700'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Add details to every task</h6>
            <p className="mb-3 text-sm text-gray-900">
            Include descriptions, attachments, assignees, and due dates with new tasks so instructions and deadlines are clear to team members.
            </p>
          </div>
          <a
            href="#id"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-teal-500 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <FaGlobe className='text-teal-700'></FaGlobe>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Plan your day from anywhere</h6>
            <p className="mb-3 text-sm text-gray-900">
            Access everything you need to do for the day in My Tasks. Available on the web, desktop, and iOS or Android mobile devices, prioritize and plan your day on a simple user interface.
            </p>
          </div>
          <a
            href="#id"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-teal-500 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
    );
};

export default About;
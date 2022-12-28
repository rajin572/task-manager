import React from 'react';

const Status = () => {
    return (
        <div>
            <h1 className=' font-bold text-4xl text-center mb-6'>Our Network</h1>
            <h2 className='text-center'>Around The Whole World We Have a Strong Network</h2>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            144K
          </h6>
          <p className="font-bold">Downloads</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            32.1K
          </h6>
          <p className="font-bold">Users</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            12.9K
          </h6>
          <p className="font-bold">Subscribers</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            24.5K
          </h6>
          <p className="font-bold">Cookies</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Status;
import React from 'react';

const Utility = () => {
  return (
    <div name="utility" className='w-full my-24'>
      <div className='max-w-[1240px] mx-auto'>
        <div  className='text-center'>
            <h2 className='text-4xl font-bold'>The Sure Way To Pay Your Electricity Bill </h2>
            <p  className='text-2xl py-6 text-gray-500'>Get your utilities here </p>
        </div>

        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border-2 py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100%</p>
            <p className='text-gray-400 mt-2'>Faster</p>
            </div>
            <div className='border-2 py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>24/7</p>
            <p className='text-gray-400 mt-2'>Delivery</p>
            </div>
            <div className='border-2 py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100%</p>
            <p className='text-gray-400 mt-2'>Error Free</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Utility;

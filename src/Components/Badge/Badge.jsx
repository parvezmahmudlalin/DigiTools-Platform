
import React from 'react';

const Badge = () => {
  return (
   
     <div className='bg-purple-700 p-9 grid grid-cols-3 items-center justify-evenly text-center mt-15'>
      <div >
        <h1 className='font-extrabold text-5xl text-white'>50K+</h1>
        <p className='text-white items'>Active Users</p>
      </div>
         
      <div >
        <h1 className='font-extrabold text-5xl text-white'>200+</h1>
        <p className='text-white items'>Premium Tools</p>
      </div>
       
      <div >
        <h1 className='font-extrabold text-5xl text-white'>4.9</h1>
        <p className='text-white items'>Rating</p>
      </div>
    </div>
   
  );
};

export default Badge;

import React from 'react';

const Badge = () => {
  return (
   
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-10">
      
      <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-3 text-center">
        
      
        <div className="py-6 relative">
          <h1 className="text-white text-5xl font-extrabold">50K+</h1>
          <p className="text-white/80 mt-2">Active Users</p>

          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-white/30"></div>
        </div>

       
        <div className="py-6 relative">
          <h1 className="text-white text-5xl font-extrabold">200+</h1>
          <p className="text-white/80 mt-2">Premium Tools</p>

          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-white/30"></div>
        </div>

        <div className="py-6">
          <h1 className="text-white text-5xl font-extrabold">4.9</h1>
          <p className="text-white/80 mt-2">Rating</p>
        </div>

      </div>

    </div>
   
  );
};

export default Badge;
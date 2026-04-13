import React from 'react';

const Ready = () => {
  return (
   <div className="px-4 md:px-0">
      <div className=" mx-auto">
        
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
                        text-center 
                        py-12 md:py-16 px-6 md:px-10">

          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Ready To Transform Your Workflow?
          </h1>

          <p className="text-white/80 mt-3 text-sm md:text-base max-w-xl mx-auto">
            Join thousands of professionals who are already using DigiTools to work smarter.
          </p>

          <p className="text-white/70 mt-2 text-xs md:text-sm">
            Start your free trial today
          </p>

          <div className="flex flex-col md:flex-row gap-3 justify-center items-center mt-6">
            
            <button className="bg-white text-purple-600 px-5 py-2 rounded-full 
                               text-sm font-medium hover:bg-gray-100 transition">
              Explore Products
            </button>

            <button className="border border-white text-white px-5 py-2 rounded-full 
                               text-sm font-medium hover:bg-white hover:text-purple-600 transition">
              View Pricing
            </button>
         </div>

          <p className="text-white/60 text-xs mt-4">
            30-day free trial · No credit card required · Cancel anytime
          </p>

        </div>

      </div>
    </div>
  );
};

export default Ready;
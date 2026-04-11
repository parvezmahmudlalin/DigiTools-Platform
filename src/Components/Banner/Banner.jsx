
import React from 'react';
import Rectangle from '../../assets/products/Rectangle 4.png';
import Play from '../../assets/products/Play (1).png'
import BannerImg from '../../assets/products/banner.png';

const Banner = () => {
  return (
    <div className='container mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between'>
      <div className='my-auto'>
         <div className='inline-flex gap-2 items-center bg-purple-200 px-3 py-1 rounded-md  '>      
          <img className='w-3 h-3' src={Rectangle} alt="" />
          <h1>New: AI-Powered Tools Available</h1></div>
       <h1 className='mt-6 font-bold text-6xl '>Supercharge Your <br></br>Digital Workflow</h1>

       <h1 className='text-[#627382] mt-4'>Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place.<br></br> Start creating faster today.

Explore Products
</h1>

<div className='flex mt-4 gap-4 '>
        <button className='btn p-5 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Explore Products</button>
        <button className='btn p-5 rounded-full'> <img src={Play} alt="" /> Watch Demo</button>
      </div>
      </div>

      <div>
        <img src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
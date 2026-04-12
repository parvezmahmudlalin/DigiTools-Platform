import React, { useState } from 'react';
import { FcCheckmark } from "react-icons/fc";
const ProductCart = ({product ,carts,setCarts}) => {
   const [isBuyNow, setIsBuyNow] = useState(false);

   const handleBuyButton = () => {
    setIsBuyNow(true);
    setCarts ([...carts, product]);
    
   }
  return (
     <div key={product.id} className='border border-[#f1f1f1] gap-7 p-5 rounded-xl flex flex-col h-full'>
                {/* top section */}
                <div className='flex justify-between items-center  '>
                  <h1 className='mt-7 text-3xl p-2 border border-zinc-200 rounded-full'>{product.icon}</h1>
                  {/* tag */}
        <span
        className={`text-sm px-3 py-1 rounded-full  ${
        product.tagType === "best seller"
          ? "bg-yellow-100 text-yellow-600"
          : product.tagType === "popular"
          ? "bg-purple-100 text-purple-600"
          : product.tagType === "new"
          ? "bg-green-100 text-green-600"
          : ""
          }`}
              >
              {product.tag}
          </span>          
                </div>   
                <div>
                  <h1 className='font-bold text-2xl'>{product.name}</h1>
    
                  <p className='text-[#627382] mt-4'>{product.description}</p>
                  <p className='font-bold mt-4'><span className='text-2xl'>${product.price}</span>/<span className='text-[#627382]'>{product.period}</span></p>
                {/* features */}
                <div>{product.features.map((feature,index) => (
                  <div key={index} className='flex items-center gap-4'>
                 <FcCheckmark/>
                 <p>{feature}</p>
    
                 
                  </div>
    
                  
                ))}</div>
                
                </div>
                <button onClick={handleBuyButton} className='btn w-full rounded-full mt-auto  bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>{
                isBuyNow ? "Added to Cart" : "Buy Now"
                }</button>
       </div>
  );
};

export default ProductCart;
import React, { use } from 'react';
import { FcCheckmark } from "react-icons/fc";

const Products = ({productPromise}) => {

  const products = use (productPromise);
  console.log(products)
  return (
    <div className='container mx-auto'>
      <div className='text-center mt-30 '>
      <h1 className='font-extrabold text-5xl'>Premium Digital Tools</h1>
      <p className='text-[#627382] mt-5 '>Choose from our curated collection of premium digital products designed <br/>to boost your productivity and creativity.</p>


      {/* name of each tab group should be unique */}
<div className="tabs tabs-box items-center justify-center">
  
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 2" defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 3" />
</div>
      </div>

      <div className='container mt-10 border mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 '>
       {
        products.map((product) => (
          <div key={product.id} className='border gap-7 p-5 rounded-xl flex flex-col h-full'>
            {/* top section */}
            <div className='flex justify-between items-center  '>
              <h1 className='mt-5 text-3xl p-2 border border-zinc-200 rounded-full'>{product.icon}</h1>
              {/* tag */}
              <span
  className={`text-sm px-3 py-1 rounded-full ${
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
              <h1>{product.name}</h1>
              <p>${product.price}/{product.period}</p>
            {/* features */}
            <div>{product.features.map((feature,index) => (
              <div key={index} className='flex items-center gap-4'>
             <FcCheckmark/>
             <p>{feature}</p>

             
              </div>

              
            ))}</div>
            
            </div>
            <button className='btn w-full  mt-auto rounded-lg bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Buy Now</button>
          </div>
        ))
       }
        
       </div>
      </div>
    
  );
};

export default Products;

import React from 'react';

const ProductCart = ({product}) => {
  console.log(product);


  return (
    <div>
       <div className='shadow-lg rounded-lg border overflow-hidden border-zinc-400'>
           <div className=' h-56 bg-zinc-200'>
           
          <div>
            <h1 >{product.icon}</h1>

            <h1>{product.name}</h1>
             <p>{product.description}</p>

             <h1>${product.price}/Month</h1>
            
          </div>
          
           </div>
           
          </div>
    </div>
  );
};

export default ProductCart;
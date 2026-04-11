import React, { use } from 'react';
import ProductCart from '../ProductCart/ProductCart';


const Products = ({productPromise}) => {
const products = use(productPromise)
console.log(products)
  return (
    <div>
     <div className="head-section text-center space-y-5 mb-10">
        <h1 className="text-5xl font-extrabold">Premium Digital Tools</h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.
        </p>
      
       {/* name of each tab group should be unique */}

      <div>
        <div className="tabs  justify-center gap-3">
  
  <input type="radio" name="my_tabs_1" className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" aria-label="Products" defaultChecked />
  <input type="radio" name="my_tabs_1" className="btn btn-soft rounded-full" aria-label="Cart" />
</div>
      </div>
        

        <div className='grid md: grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
          {products.map((product) => (
            <ProductCart key={product.id} product = {product}/>
          ))}
          
        </div>
    </div>
    </div>
  );
};

export default Products;
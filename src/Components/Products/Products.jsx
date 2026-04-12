import React, {  use, useState  } from 'react';
import ProductCart from '../ProductCart/ProductCart';
import Cart from '../ui/Cart';

  const Products = ({productPromise}) => {

      const products = use (productPromise);
      const [activeTab,setActiveTab] = useState("Products");
      const [carts, setCarts] = useState([]);
  
 
  return (
    <div className='container mx-auto'>
      <div className='text-center mt-30 '>
             <h1 className='font-extrabold text-5xl'>Premium Digital Tools</h1>
             <p className='text-[#627382] mt-5 '>Choose from our curated collection of premium digital products designed <br/>to boost your productivity and creativity.</p>
       
             {/* name of each tab group should be unique */}
        <div className="tabs tabs-box items-center justify-center bg-transparent mt-6 gap-6">
  
          <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 bg-linear-to-r from-[#4F39F6] to-[#9514FA]" aria-label="Products" defaultChecked onClick={() => setActiveTab("Products")}/>
          <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart" 
          onClick={() => setActiveTab("Cart")}/>
        </div>
      </div>
      <div className='container mt-10 border border-[#FFFFFF] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 '>
       { activeTab === "Products" &&
        products.map((product) => (
         <ProductCart key={product.id} product = {product} carts={carts} setCarts = {setCarts}/>
        ))
       }
      
      </div>
        {activeTab === "Cart" && <Cart carts = {carts} setCarts = {setCarts}/>} 
    </div>
    
  );
};

export default Products;
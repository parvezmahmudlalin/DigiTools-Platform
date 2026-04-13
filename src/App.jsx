
import './App.css'
import React, { Suspense, useState, } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Badge from './Components/Badge/Badge';
import Footer from './Components/Footer/Footer';
import Steps from './Components/Steps/Steps';
import Pricing from './Components/Pricing/Pricing';
import Products from './Components/Products/Products';




const fetchProducts = async() => {
  const res = await fetch('/products.json');
  const data = res.json();
  return data
};



const App = () => {
  const productPromise =fetchProducts();
   const [carts, setCarts] = useState([]);
  return (
    <div>
      <Navbar carts = {carts}/>
      <Banner/>
      <Badge/>
      <Suspense fallback = {<span className="loading loading-dots loading-xl"></span>}>
      <Products productPromise ={productPromise} carts = {carts} setCarts={setCarts}  />

      </Suspense>








      <Steps/>
      <Pricing/>
      <Footer/>
      
    </div>
  );
};

export default App;


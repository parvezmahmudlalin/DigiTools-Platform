
import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
  return (
   <div className="navbar  container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><a href="">Products</a></li>
      <li><a href="">Features</a></li>
      <li><a href="">Pricing</a></li>
      <li><a href="">Schedules</a></li>
      <li><a href="">FAQ</a></li>
      </ul>
    </div>
   <div>
    <h2 className='text-3xl font-bold text-purple-600'>DigiTools</h2>
   </div>
  </div>
  <div className="navbar-center md:flex hidden">
    <ul className="menu menu-horizontal px-1 gap-4">
      <li className='font-semibold'><a href="">Products</a></li>
      <li className='font-semibold'><a href="">Features</a></li>
      <li className='font-semibold'><a href="">Pricing</a></li>
      <li className='font-semibold'><a href="">Schedules</a></li>
      <li className='font-semibold'><a href="">FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end ">
    <div className='flex gap-4 items-center' >

      <p ><CiShoppingCart /></p>
      <button className='btn '>Login</button>

      <button className='font-bold btn bg-purple-400 rounded-full'> Get Started</button>
      
    </div>
  </div>
</div>
  );
};

export default Navbar;
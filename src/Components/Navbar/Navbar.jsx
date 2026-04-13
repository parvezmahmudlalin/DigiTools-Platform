
import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
const Navbar = ({carts}) => {
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
    <h2 className='text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>DigiTools</h2>
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
  <div className="navbar-end flex gap-3 relative lg:pr-33">
          {carts.length === 0 ? (
            ""
          ) : (
            <span className="text-white bg-red-500 px-2 py-0.5 rounded-full text-[10px] absolute z-1 left-13 lg:left-59 -top-0.5 ">
              {carts.length}
            </span>
          )}

          <a className="flex justify-center items-center gap-3">
           <CiShoppingCart /> Login
          </a>
          <a className="btn btn-primary rounded-4xl">Get Started</a>
        </div>
</div>
  );
};

export default Navbar;
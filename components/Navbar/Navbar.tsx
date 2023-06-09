import Link from 'next/link';
import React from 'react';
import './Navbar.css'
import { FaRegUser } from 'react-icons/fa';
import { BsBag, BsChevronDown } from "react-icons/bs";
import { TbSearch } from "react-icons/tb";

const Navbar = () => {
  return (
    // <nav className='flex justify-between items-center px-10 text-white bg-black -z-10' >
    //   <div>
    //     <h1>SokoSkins</h1>
    //   </div>
    //   <ul className='flex gap-5 py-5 px-10'>
    //     <li><Link href="/">Home</Link></li>
    //     <li><Link href="/best">Best</Link></li>
    //     <li className='relative'><a href="">Routine</a>
    //       <ul className="submenu  bg-black text-white">
    //         <li><a href="">Triple Clenease</a></li>
    //         <li><a href="">Oil Cleansers</a></li>
    //         <li><a href="">Water Based Cleansers</a></li>
    //       </ul>
    //     </li>
    //     <li><a href="">Shop By</a>
    //     </li>
    //     <li><a href="">Brands</a></li>
    //     <li><a href="">Offres</a></li>
    //   </ul>
    //   <div>
    //     <p>Cart</p>
    //   </div>
    // </nav>


    // <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <a href="#" className="flex items-center">
    //       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SOKOSKINS</span>
    //     </a>
    //     <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
    //       <span className="sr-only">Open main menu</span>
    //       <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    //     </button>
    //     <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
    //       <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         <li>
    //           <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
    //         </li>
    //         <li>
    //           <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>

    //           <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    //             <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
    //               <li>
    //                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
    //               </li>
    //               <li aria-labelledby="dropdownNavbarLink">
    //                 <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></button>
    //                 <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    //                   <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
    //                     <li>
    //                       <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a>
    //                     </li>
    //                     <li>
    //                       <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My downloads</a>
    //                     </li>
    //                     <li>
    //                       <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
    //                     </li>
    //                     <li>
    //                       <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </li>
    //               <li>
    //                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
    //               </li>
    //             </ul>
    //             <div className="py-1">
    //               <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
    //             </div>
    //           </div>
    //         </li>
    //         <li>
    //           <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
    //         </li>
    //         <li>
    //           <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
    //         </li>
    //         <li>
    //           <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>


    <div className="navbar flex justify-between items-center">
      <div className='ms-10'>
        <h1 className='text-3xl'>Korean Cosmetics</h1>
      </div>
      <div>
        <Link href='/'>Home</Link>
        <Link href='/best'>Best</Link>
        <div className="dropdown">
          <button className="dropbtn flex items-center">Routine
            <BsChevronDown></BsChevronDown>
          </button>
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <h3>Category 1</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
              <div className="column">
                <h3>Category 2</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
              <div className="column">
                <h3>Category 3</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn flex items-center">Shop By
            <BsChevronDown></BsChevronDown>
          </button>
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <h3>Category 1</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
              <div className="column">
                <h3>Category 2</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
              <div className="column">
                <h3>Category 3</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn flex items-center">Brands
            <BsChevronDown></BsChevronDown>
          </button>
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <h3>Category 1</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
              <div className="column">
                <h3>Category 2</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
              <div className="column">
                <h3>Category 3</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
        </div>
        <Link href='/best'>Blog</Link>
      </div>
      <div className='flex gap-8 mr-10 items-center'>
        <TbSearch className='text-2xl cursor-pointer text-gray-600'></TbSearch>
        <FaRegUser className='text-2xl cursor-pointer text-gray-600'></FaRegUser>
        <div className='relative'>
          <BsBag className='text-2xl cursor-pointer text-gray-600'></BsBag>
          <small className='absolute h-5 w-5 rounded-full p-1 bottom-3 left-3 text-center flex items-center justify-center bg-[#0088cc] text-white'>0</small>
        </div>
      </div>

    </div>

  );
};

export default Navbar;
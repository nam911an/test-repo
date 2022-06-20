import React, { useState } from 'react'
import './App.css';
import { Link, NavLink } from "react-router-dom";
import Test from './test';

const Header = (props) => {
    const {userName} = props;

    const [nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
        console.log("hey")
    }

    return (
        <>
            <header>
                {/* <div className='cursor-pointer'>Logo</div>
                <nav>
                    <ul className='p-4'>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                        <NavLink to={"/about"}>About</NavLink>                        </li>
                        <li>
                        <NavLink to={"/contact"}>Contact</NavLink>      
    
                        </li>
                    </ul>
                </nav> */}
                <div className='bg-indigo-600 pb-32'>
                    <nav className='bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none   md:block'>
                        <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
                            <div className='relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25'>
                                <div className='px-2 flex items-center lg:px-0'>
                                    <div className='flex-shrink-0'>
                                        <img className="block h-8 w-8"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg" alt="Workflow"></img>
                                    </div>
                                    <div className='hidden lg:block lg:ml-10'>
                                        <div className='flex space-x-4'>
                                            <NavLink to={"/"}
                                                className='text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium'>
                                                Dashboard </NavLink>
                                            <NavLink to={"/accounts"}
                                                className=' text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium'>
                                                Accounts </NavLink>
                                            <NavLink to={"/notifications"}
                                                className='text-white  hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium'>
                                                Notifications </NavLink>
                                            <NavLink to="/withdrawals"
                                                className='text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium'>
                                                Withdrawals </NavLink>
                                            <NavLink to="/newsheadlines"
                                                className='text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium'>
                                                News Headlines </NavLink>

                                        </div>
                                    </div>
                                </div>
                                <div onClick={handleNav} className={!nav ? 'lg:hidden' : 'lg:hidden'} >
                                    {/* <!-- Mobile menu button --> */}
                                    <button id="mobile-menu-button" type="button"
                                        className="bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                                        aria-controls="mobile-menu" aria-expanded="false">
                                        <span className="sr-only">Open main menu</span>

                                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>

                                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="hidden lg:block lg:ml-4">
                                    <div className="flex items-center">
                                        <div className="ml-3 relative flex-shrink-0">
                                            <div>
                                                <button type="button" onClick={handleNav}
                                                    className=" bg-indigo-600 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                                                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img className="rounded-full h-8 w-8"
                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                        alt="" />
                                                </button>
                                            </div>
                                            <div id="user-menu-panel"
                                                className={!nav ? 'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none' : 'hidden'}
                                                role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button"
                                                tabIndex="-1">

                                                <a href="#" className="block py-2 px-4 text-sm text-gray-700" role="menuitem"
                                                    tabIndex="-1" id="user-menu-item-2"> Sign out </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                        <div className={!nav ? 'lg:hidden' : 'hidden'} id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {/* <!-- Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" --> */}
                                <NavLink to={"/"}
                                    className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium">
                                    Dashboard </NavLink>
                                <NavLink to={"/accounts"} className=" text-white block rounded-md py-2 px-3 text-base font-medium"
                                    aria-current="page">
                                    Accounts </NavLink>
                                <NavLink to={"/notifications"}
                                    className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium">
                                    Notifications </NavLink>
                                <NavLink to={"/withdrawals"}
                                    className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium">
                                    Withdrawals </NavLink>
                                <NavLink to={"/newsheadlines"}
                                    className="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium">
                                    News Headlines </NavLink>
                            </div>
                            <div className="pt-4 pb-3 border-t border-indigo-700">
                                <div className="px-5 flex items-center">
                                    <div className="flex-shrink-0">
                                        <img className="rounded-full h-10 w-10"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium text-white">Prabh Deep</div>
                                        <div className="text-sm font-medium text-indigo-300">pd@c3links.org</div>
                                    </div>
                                </div>
                                <div className="mt-3 px-2 space-y-1">
                                    <a href="#"
                                        className="cursor-pointer block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75">
                                        Sign out </a>
                                </div>
                            </div>
                        </div>


                    </nav>
                    <header className="py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold text-white">{props.headLine}</h1>
                        </div>
                    </header>
                </div>
            </header>
        </>
    )
}

export default Header
import React from 'react'
import './App.css';
import {Link, NavLink} from "react-router-dom";


const Header = () => {
    return (
        <>
            <header>
               <div className='cursor-pointer'>Logo</div>
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
                </nav>
            </header>
        </>
      )
}

export default Header
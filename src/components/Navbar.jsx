import React from "react";
import { Link } from 'react-router-dom'
const Navbar = () =>{
    return(
        <>
            <nav className="backdrop-blur-sm mx-4">
                <ul className="py-3 flex justify-evenly font-semibold text-white flex-wrap text-xl">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='about'>About</Link></li>
                    <li><Link to='registration'>Registration</Link></li>
                    <li><Link to='login'>Login</Link></li>
                </ul>
            <hr />
            </nav>
        </>
    )
}

export default Navbar;
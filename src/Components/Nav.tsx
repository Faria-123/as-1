import React from 'react';
import logo from '../assets/logo-text.png';
const Nav = () => {
    return (
        <nav className=' bg-white shadow-md px-4 py-7'>
            <div className='container mx-auto flex justify-between items-center'>
                <div>
                    <img src={logo} alt="logo" />

                </div>
                <div>
                    <ul className='flex gap-4'>
                        <li className='text-pink-500'>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='flex gap-4'>
                    <button >Sign In</button>
                    <button className='nav-btn'>Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
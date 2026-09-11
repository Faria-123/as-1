
import { useState } from 'react';
import logo from '../assets/logo-text.png';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md px-4 py-4 sm:py-7">
            <div className="container mx-auto">

                {/* Top navbar */}
                <div className="flex items-center justify-between">


                    <div className="flex items-center">
                        {/* Hamburger i made by span a hamburger*/}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="sm:hidden flex flex-col gap-1"
                        >
                            <span className="w-6 h-0.5 bg-black"></span>
                            <span className="w-6 h-0.5 bg-black"></span>
                            <span className="w-6 h-0.5 bg-black"></span>
                        </button>


                        <img
                            src={logo}
                            alt="logo"
                            className="hidden sm:block"
                        />
                    </div>

                    {/* Mobile */}
                    <div className="sm:hidden">
                        <img
                            src={logo}
                            alt="logo"
                        />
                    </div>

                    {/* Desktop*/}
                    <div className="hidden sm:block">
                        <ul className="flex gap-4">
                            <li className="text-pink-500">Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Right side*/}
                    <div className="flex gap-2 sm:gap-4">
                        <button>Sign In</button>
                        <button className="nav-btn">Sign Up</button>
                    </div>
                </div>


                {isOpen && (
                    <div className="sm:hidden mt-4 border-t pt-4">
                        <ul className="flex flex-col gap-3">
                            <li className="text-pink-500">Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    );
};

export default Nav;
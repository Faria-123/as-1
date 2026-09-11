// import React from 'react';
import pic from "../assets/logo-text.png"
const Footer = () => {
    return (
        <div className="container mx-auto mt-20 mb-10 space-y-5 border-t border-slate-100 pt-10">
            <div className="flex justify-between">
                <div className='flex flex-col space-y-3.5'>
                    <img src={pic} width={"100px"} alt="logo" />
                    <p className='text-[#64748B] text-[12px]'>Curated tools, technologies, and resources for developers building
                        modern software.</p>
                    <div className='flex gap-3 text-[#475569] text-[12px]'>
                        <h1>GitHub</h1>
                        <h1>Twitter</h1>
                        <h1>LinkedIn</h1>
                    </div>
                </div>
                <div className='flex flex-col space-y-3.5 text-[#475569] text-[12px]'>
                    <h1 className='font-bold text-black'>PRODUCT</h1>
                    <h1>Home</h1>
                    <h1>Technologes</h1>
                    <h1>Projects</h1>
                </div>
                <div className='flex flex-col text-[#475569] text-[12px] space-y-3.5'>
                    <h1 className='font-bold text-black'>
                        COMPANY
                    </h1>
                    <h1>About</h1>
                    <h1>Contact</h1>
                    <h1>Careers</h1>

                </div>
                <div className='flex flex-col text-[#475569] text-[12px] space-y-3.5'>
                    <h1 className="font-bold text-black">LEGAL</h1>
                    <h1 className="text-[#475569] text-[12px]">Privacy Policy</h1>
                    <h1 className="text-[#475569] text-[12px]">Terms of Service</h1>
                </div>
            </div>
            <div>
                <p className="py-2 text-sm text-slate-400">
                    © 2026 Dev Stack. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
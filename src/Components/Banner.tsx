
// import React from "react";
import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-16 md:flex-row md:px-10 lg:px-16">

                {/* Left Content */}
                <div className="max-w-xl text-center md:text-left">
                    <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                        Build Your Ideal
                        <br />
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits
                        your next project.
                    </p>

                    {/* Buttons */}
                    <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
                        <button className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 text-xs font-medium text-white shadow-md transition hover:shadow-lg">
                            Explore Technologies
                        </button>

                        <button className="rounded-md border border-slate-200 bg-white px-6 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-50">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center md:w-1/2">
                    <img
                        src={bannerImg}
                        alt="Development stack illustration"
                        className="w-full max-w-md object-contain"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;
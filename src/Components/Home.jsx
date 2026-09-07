import React from 'react'
import { useNavigate } from 'react-router'
import ManojPic from '../Assets/ManojPic.png'

const Home = () => {
    const navigator = useNavigate()

    return (
        <div>
            <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex items-center">

                {/* Minimal Background Elements */}
                <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

                <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl"></div>


                {/* Main Container */}
                <div className="relative z-10 max-w-6xl mx-auto w-full px-5 py-24 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

                    {/* Left Side - Text */}
                    <div className="w-full md:w-1/2">

                        <p className="text-base text-blue-500 mb-3 sm:text-lg">
                            Hi, I'm
                        </p>

                        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                            Manoj H.
                        </h1>

                        <h2 className="text-2xl font-semibold text-gray-400 mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
                            Aspiring Full Stack Developer
                        </h2>

                        {/* <p className="text-sm text-gray-400 mt-6 leading-relaxed sm:text-base max-w-xl">
                        Enjoys turning ideas into things people can actually use.
                        I don't just learn technologies—I like testing what I can
                        build with them.
                    </p> */}


                        {/* Buttons */}
                        <div className="flex flex-col gap-4 mt-8 sm:flex-row">

                            <button
                                onClick={() => navigator('/projects')}
                                className="w-full bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition sm:w-auto"
                            >
                                View Projects
                            </button>

                            <button
                                onClick={() => navigator('/contact')}
                                className="w-full border border-gray-600 px-6 py-3 rounded-lg hover:bg-slate-800 transition sm:w-auto"
                            >
                                Contact Me
                            </button>

                        </div>
                    </div>


                    {/* Right Side - Image */}
                    <div className="w-full flex justify-center md:w-1/2">

                        <img
                            src={ManojPic}
                            alt="Manoj"
                            className="w-full max-w-sm rounded-2xl object-cover sm:max-w-md md:max-w-lg lg:max-w-xl"
                        />

                    </div>

                </div>

            </section>
            <section className="bg-white text-slate-950 px-5 py-20">
                <div className="max-w-6xl mx-auto">

                    <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
                        About Me
                    </p>

                    <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                        Who am I?
                    </h2>

                    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
                        I'm someone who enjoys exploring technology by building with it.
                        Rather than just learning concepts, I like turning ideas into
                        projects, solving problems along the way, and continuously
                        discovering what I can create next.
                    </p>

                </div>
            </section>
        </div>
    )
}

export default Home
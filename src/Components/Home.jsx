import React from 'react'
import { useNavigate } from 'react-router'
import { motion } from 'framer-motion'
import ManojPic from '../Assets/ManojPic.png'

const Home = () => {

  const navigator = useNavigate()

  return (

    <div className="bg-slate-950">

      {/* ================= HERO SECTION ================= */}

      <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 text-white">

        {/* Minimal Background Elements */}

        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl"></div>


        {/* Main Container */}

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-24 md:flex-row md:items-center md:justify-between">


          {/* ================= LEFT SIDE ================= */}

          <motion.div
            className="w-full md:w-1/2"
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.7
            }}
          >

            <p className="mb-3 text-base text-blue-500 sm:text-lg">
              Hi, I'm
            </p>


            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              Manoj H.
            </h1>


            <h2 className="mt-4 text-2xl font-semibold text-gray-400 sm:text-3xl md:text-4xl lg:text-5xl">
              Aspiring Full Stack Developer
            </h2>


            {/* Buttons */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <button
                onClick={() => navigator('/projects')}
                className="w-full rounded-lg bg-blue-600 px-6 py-3 transition hover:bg-blue-700 sm:w-auto"
              >
                View Projects
              </button>


              <button
                onClick={() => navigator('/contact')}
                className="w-full rounded-lg border border-gray-600 px-6 py-3 transition hover:bg-slate-800 sm:w-auto"
              >
                Contact Me
              </button>

            </div>

          </motion.div>


          {/* ================= RIGHT SIDE IMAGE ================= */}

          <motion.div
            className="flex w-full justify-center md:w-1/2"
            initial={{
              opacity: 0,
              x: 50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.7,
              delay: 0.2
            }}
          >

            <img
              src={ManojPic}
              alt="Manoj"
              className="w-full max-w-sm rounded-2xl object-cover sm:max-w-md md:max-w-lg lg:max-w-xl"
            />

          </motion.div>

        </div>

      </section>




     {/* ================= ABOUT ME SECTION ================= */}

<section className="relative overflow-hidden bg-white px-5 py-24 text-slate-950">

  {/* Subtle Background Element */}
  <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

  <motion.div
    className="relative mx-auto max-w-6xl"
    initial={{
      opacity: 0,
      y: 40
    }}
    whileInView={{
      opacity: 1,
      y: 0
    }}
    viewport={{
      once: true,
      amount: 0.3
    }}
    transition={{
      duration: 0.7
    }}
  >

    <p className="text-sm font-medium uppercase tracking-widest text-blue-600">
      About Me
    </p>

    <h2 className="mt-3 text-4xl font-bold text-slate-950 sm:text-5xl">
      Who am I?
    </h2>

    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
      I'm someone who enjoys exploring technology by building with it.
      Rather than just learning concepts, I like turning ideas into
      projects, solving problems along the way, and continuously
      discovering what I can create next.
    </p>

    <button
      onClick={() => navigator('/about')}
      className="mt-8 rounded-lg border border-blue-600 px-6 py-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
    >
      More About Me
    </button>

  </motion.div>

</section>

    </div>
  )
}

export default Home
import React from 'react'
import { motion } from 'framer-motion'

const Project = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 px-5 py-24 text-white">

      {/* Minimal Background Elements */}
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl"></div>


      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            My Work
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            Projects I've Built
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-400">
            A collection of projects where I experiment with ideas,
            solve problems, and turn what I learn into something real.
          </p>

        </motion.div>


        {/* Coming Soon Section */}
        <motion.div
          className="mx-auto mt-20 flex max-w-3xl flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-16 text-center backdrop-blur-sm sm:px-12"
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.2
          }}
        >

          {/* Animated Icon */}
          <motion.div
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10 text-4xl"
          >
            🚀
          </motion.div>


          <h2 className="mt-8 text-2xl font-bold sm:text-3xl">
            Projects are on the way.
          </h2>

          <p className="mt-4 max-w-xl leading-relaxed text-gray-400">
            I'm currently building and improving projects that showcase my
            skills and what I've been learning. They'll be added here soon.
          </p>


          {/* Decorative Progress Line */}
          <div className="mt-10 h-1 w-full max-w-md overflow-hidden rounded-full bg-slate-800">

            <motion.div
              className="h-full rounded-full bg-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: "65%" }}
              transition={{
                duration: 1.5,
                delay: 0.6,
                ease: "easeOut"
              }}
            />

          </div>

          <p className="mt-3 text-sm text-gray-500">
            Building • Learning • Improving
          </p>

        </motion.div>


        {/* Bottom Statement */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5
          }}
        >

          <p className="text-lg text-gray-400">
            Every project starts with an idea.
          </p>

          <p className="mt-2 text-xl font-semibold text-white">
            The interesting part is figuring out how to build it.
          </p>

        </motion.div>

      </div>

    </section>
  )
}

export default Project
import React from 'react'
import { motion } from 'framer-motion'

const Project = () => {
  return (
    <section className="min-h-screen bg-paper text-ink">
      <div className="wrap pt-[140px] pb-12 md:pt-[160px] md:pb-16">
        {/* Heading */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="m">03 · My Work</p>
          <h1 className="mt-5 text-[clamp(44px,6vw,88px)] font-light leading-[1.02] uppercase tracking-[-0.01em]">
            Projects I&apos;ve
            <span className="block text-muted">
              built<span className="text-accent">.</span>
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-[19px] leading-[1.7] text-body">
            A collection of projects where I experiment with ideas,
            solve problems, and turn what I learn into something real.
          </p>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          className="vf mx-auto mt-20 max-w-3xl px-8 py-16 text-center sm:px-14"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="c tl" />
          <span className="c tr" />
          <span className="c bl" />
          <span className="c br" />

          <div className="mb-10 flex items-center justify-between">
            <span className="m">Status</span>
            <span className="m text-accent">● In Progress</span>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="mx-auto flex h-20 w-20 items-center justify-center border border-ink text-4xl"
          >
            🚀
          </motion.div>

          <h2 className="mt-8 text-3xl font-light uppercase sm:text-4xl">
            Projects are on the way.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-[1.7] text-body-muted">
            I&apos;m currently building and improving projects that showcase my
            skills and what I&apos;ve been learning. They&apos;ll be added here soon.
          </p>

          <div className="mx-auto mt-10 h-px w-full max-w-md overflow-hidden bg-line">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: '0%' }}
              animate={{ width: '65%' }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            />
          </div>

          <p className="mt-4 m !text-[10px]">Building · Learning · Improving</p>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          className="mt-20 border-t border-ink pt-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-muted">Every project starts with an idea.</p>
          <p className="mt-3 text-2xl font-light uppercase text-ink sm:text-3xl">
            The interesting part is figuring out how to build it<span className="text-accent">.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Project
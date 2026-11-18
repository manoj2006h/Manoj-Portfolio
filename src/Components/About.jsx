import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } }
  }

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } }
  }

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } }
  }

  return (
    <section className="bg-paper text-ink">
      <div className="wrap pt-[140px] pb-12 md:pt-[160px] md:pb-16">
        {/* Intro */}
        <motion.div
          className="max-w-4xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p className="m">01 · About Me</p>
          <h1 className="mt-5 text-[clamp(44px,6vw,88px)] font-light leading-[1.02] uppercase tracking-[-0.01em]">
            I learn by
            <span className="block text-muted">
              building things<span className="text-accent">.</span>
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-[19px] leading-[1.7] text-body">
            I&apos;m Manoj, a CSBS student and aspiring Full Stack Developer.
            I enjoy exploring technology not just by reading about it, but by
            opening my editor, experimenting with ideas, making mistakes, and
            eventually turning those ideas into something real.
          </p>
        </motion.div>

        {/* Story */}
        <div className="mt-24 grid gap-12 border-t border-ink pt-16 md:grid-cols-2 md:gap-16">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="m text-accent">The Way I Learn</p>
            <h2 className="mt-4 text-3xl font-light uppercase leading-tight sm:text-4xl">
              Curiosity usually comes first.
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6 text-[17px] leading-[1.7] text-body-muted"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>
              When I come across a new technology, my first thought is usually
              not just <span className="text-ink font-medium">&quot;How does this work?&quot;</span>
            </p>
            <p className="border-l-2 border-accent pl-5 text-2xl font-light uppercase leading-snug text-ink">
              It&apos;s &quot;What can I build with this?&quot;
            </p>
            <p>
              That&apos;s why I enjoy development. Every project gives me a chance
              to learn something new, solve unexpected problems, and see an
              idea slowly turn into something people can actually interact
              with.
            </p>
          </motion.div>
        </div>

        {/* Personal Details */}
        <motion.div
          className="mt-24 border-y border-ink py-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <p className="m">Currently</p>
              <p className="mt-2 text-lg font-normal">Learning &amp; Building</p>
            </div>
            <div>
              <p className="m">Interested In</p>
              <p className="mt-2 text-lg font-normal">Full Stack Development</p>
            </div>
            <div>
              <p className="m">Also Exploring</p>
              <p className="mt-2 text-lg font-normal">DSA &amp; AI</p>
            </div>
            <div>
              <p className="m">Based In</p>
              <p className="mt-2 text-lg font-normal">Davangere, India</p>
            </div>
          </div>
        </motion.div>

        {/* My Approach */}
        <motion.div
          className="mt-24 max-w-3xl"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="m">My Approach</p>
          <h2 className="mt-5 text-3xl font-light leading-relaxed uppercase sm:text-4xl">
            I don&apos;t want to collect technologies.
            <span className="text-muted">
              {" "}I want to understand what I can create with them.
            </span>
          </h2>
        </motion.div>

        {/* Workspace Section */}
        <section className="mt-28 border-t border-ink pt-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="m">Behind The Screen</p>
              <h2 className="mt-5 text-[clamp(36px,4.5vw,56px)] font-light uppercase leading-[1.05]">
                Where the ideas
                <span className="block text-muted">
                  come to life<span className="text-accent">.</span>
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-body-muted">
                This is where I spend my time learning, experimenting,
                debugging, and turning ideas into projects. My setup may be
                simple, but it&apos;s where most of my ideas start becoming
                something real.
              </p>
            </motion.div>

            <motion.div
              className="space-y-0 border-t border-ink"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            >
              {[
                { label: 'Machine', title: 'MacBook Air M2', meta: '16GB / 256GB' },
                { label: 'Primary Editor', title: 'VS Code', meta: 'Web Development' },
                { label: 'IDE', title: 'IntelliJ IDEA', meta: 'Java Development' },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeRight}
                  className="flex items-center justify-between gap-4 border-b border-line py-5 transition-colors hover:bg-soft/60"
                >
                  <div>
                    <p className="m !text-[10px]">{item.label}</p>
                    <h3 className="mt-1 text-lg font-normal">{item.title}</h3>
                  </div>
                  <span className="m !text-[10px] text-accent">{item.meta}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default About
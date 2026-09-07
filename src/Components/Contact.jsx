import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <section className="min-h-screen bg-slate-950 px-5 py-24 text-white">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            Contact
          </p>

          <h1 className="mt-5 text-5xl font-bold sm:text-6xl md:text-7xl">
            Let's build something
            <span className="block text-blue-500">
              together.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Have an idea, project, or just want to connect? Feel free to reach
            out. I'm always open to learning, collaborating, and building
            interesting things.
          </p>
        </motion.div>


        {/* Contact Content */}
        <div className="mt-20 grid gap-12 md:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h2 className="text-2xl font-semibold">
              Get in touch
            </h2>

            <p className="mt-4 max-w-md leading-relaxed text-gray-400">
              Whether you have a question, an opportunity, or simply want to
              talk about technology, my inbox is always open.
            </p>


            {/* Contact Links */}
            <div className="mt-10 space-y-4">

              {/* Email */}
              <a
                href="mailto:manoj2006h@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-blue-500 hover:-translate-y-1"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-xl text-blue-500"
                />

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="mt-1">
                    manoj2006h@gmail.com
                  </p>
                </div>

              </a>


              {/* GitHub */}
              <a
                href="https://github.com/manoj2006h"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-blue-500 hover:-translate-y-1"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-xl text-blue-500"
                />

                <div>
                  <p className="text-sm text-gray-500">
                    GitHub
                  </p>

                  <p className="mt-1">
                    github.com/manoj2006h
                  </p>
                </div>

              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/manoj2006h/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-blue-500 hover:-translate-y-1"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-xl text-blue-500"
                />

                <div>
                  <p className="text-sm text-gray-500">
                    LinkedIn
                  </p>

                  <p className="mt-1">
                    Connect with me
                  </p>
                </div>

              </a>

            </div>

          </motion.div>


          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8"
          >

            <h2 className="text-2xl font-semibold">
              Send me a message
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Fill out the form and I'll get back to you as soon as possible.
            </p>


            <form className="mt-8 space-y-5">

              {/* Name */}
              <div>
                <label className="text-sm text-gray-400">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />
              </div>


              {/* Email */}
              <div>
                <label className="text-sm text-gray-400">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />
              </div>


              {/* Message */}
              <div>
                <label className="text-sm text-gray-400">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="mt-2 w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />
              </div>


              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700"
              >
                Send Message

                <FontAwesomeIcon icon={faPaperPlane} />
              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Contact
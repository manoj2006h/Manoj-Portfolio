import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

  const form = useRef()

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")
  const [success, setSuccess] = useState(false)


  const sendEmail = async (e) => {

    e.preventDefault()

    setLoading(true)
    setStatus("")

    try {

      // Send message to Manoj
      await emailjs.sendForm(
        "service_xjj2k5f",
        "template_qet1izp",
        form.current,
        {
          publicKey: "4SZn4l0d9_x7vFTF_"
        }
      )


      // Send automatic reply to the visitor
      await emailjs.sendForm(
        "service_xjj2k5f",
        "template_58y3uez",
        form.current,
        {
          publicKey: "4SZn4l0d9_x7vFTF_"
        }
      )


      setStatus("Message sent successfully! I'll get back to you soon. 🚀")
      setSuccess(true)

      form.current.reset()

    } catch (error) {

      console.error("EmailJS Error:", error)

      setStatus("Something went wrong. Please try again.")
      setSuccess(false)

    } finally {

      setLoading(false)

    }

  }


  return (

    <section className="min-h-screen bg-slate-950 px-5 py-24 text-white">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0, y: 0 }}
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
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:-translate-y-1 hover:border-blue-500"
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
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:-translate-y-1 hover:border-blue-500"
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
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:-translate-y-1 hover:border-blue-500"
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


            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-8 space-y-5"
            >

              {/* Name */}
              <div>

                <label className="text-sm text-gray-400">
                  Your Name
                </label>

                <input
                  type="text"
                  name="user_name"
                  required
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
                  name="user_email"
                  required
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
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message..."
                  className="mt-2 w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />

              </div>


              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >

                {loading ? "Sending..." : "Send Message"}

                <FontAwesomeIcon icon={faPaperPlane} />

              </button>


              {/* Status */}
              {status && (

                <p
                  className={`text-center text-sm ${
                    success
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {status}
                </p>

              )}

            </form>

          </motion.div>

        </div>

      </div>

    </section>

  )
}

export default Contact
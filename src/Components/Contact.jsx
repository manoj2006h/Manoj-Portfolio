import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import {
  faEnvelope,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons'


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

    <section className="min-h-screen bg-paper text-ink">

      <div className="wrap pt-[140px] pb-12 md:pt-[160px] md:pb-16">


        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-3xl"
        >

          <p className="m">04 · Contact</p>

          <h1 className="mt-5 text-[clamp(44px,6vw,88px)] font-light uppercase leading-[1.02] tracking-[-0.01em]">
            Let&apos;s build something

            <span className="block text-muted">
              together<span className="text-accent">.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-[19px] leading-[1.7] text-body">
            Have an idea, project, or just want to connect? Feel free to reach
            out. I&apos;m always open to learning, collaborating, and building
            interesting things.
          </p>

        </motion.div>


        {/* Contact Content */}
        <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-16">


          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >

            <h2 className="text-3xl font-light uppercase">
              Get in touch
            </h2>

            <p className="mt-4 max-w-md text-[17px] leading-[1.7] text-body-muted">
              Whether you have a question, an opportunity, or simply want to
              talk about technology, my inbox is always open.
            </p>


            {/* Contact Links */}
            <div className="mt-10 border-t border-ink">


              {/* Email */}
              <a
                href="mailto:manoj2006h@gmail.com"
                className="group flex items-center justify-between gap-4 border-b border-line py-5 transition-colors hover:bg-soft/60"
              >

                <div className="flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-lg text-accent"
                  />

                  <div>
                    <p className="m !text-[10px]">Email</p>
                    <p className="mt-1 text-[17px]">manoj2006h@gmail.com</p>
                  </div>
                </div>

                <span className="arr text-ink/40 group-hover:text-accent" />

              </a>


              {/* GitHub */}
              <a
                href="https://github.com/manoj2006h"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-line py-5 transition-colors hover:bg-soft/60"
              >

                <div className="flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-lg text-accent"
                  />

                  <div>
                    <p className="m !text-[10px]">GitHub</p>
                    <p className="mt-1 text-[17px]">github.com/manoj2006h</p>
                  </div>
                </div>

                <span className="arr text-ink/40 group-hover:text-accent" />

              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/manoj2006h/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-line py-5 transition-colors hover:bg-soft/60"
              >

                <div className="flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-lg text-accent"
                  />

                  <div>
                    <p className="m !text-[10px]">LinkedIn</p>
                    <p className="mt-1 text-[17px]">Connect with me</p>
                  </div>
                </div>

                <span className="arr text-ink/40 group-hover:text-accent" />

              </a>

            </div>

          </motion.div>


          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="vf p-8 sm:p-10"
          >
            <span className="c tl" />
            <span className="c tr" />
            <span className="c bl" />
            <span className="c br" />

            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="m">Fig. 02 · Message</span>
              <span className="m">Davangere · IST</span>
            </div>

            <h2 className="mt-8 text-3xl font-light uppercase">
              Send me a message
            </h2>

            <p className="mt-3 text-[15px] leading-relaxed text-body-muted">
              Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>


            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-8 space-y-6"
            >


              {/* Name */}
              <div>

                <label className="m !text-[10px]">
                  Your Name
                </label>

                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Enter your name"
                  className="field mt-2"
                />

              </div>


              {/* Email */}
              <div>

                <label className="m !text-[10px]">
                  Your Email
                </label>

                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Enter your email"
                  className="field mt-2"
                />

              </div>


              {/* Message */}
              <div>

                <label className="m !text-[10px]">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message..."
                  className="field mt-2 resize-none"
                />

              </div>


              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="pillb solid w-full disabled:cursor-not-allowed disabled:opacity-60"
              >

                {loading ? "Sending..." : "Send Message"}

                <FontAwesomeIcon icon={faPaperPlane} />

              </button>


              {/* Status Message */}
              {status && (

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center text-sm ${
                    success
                      ? "text-green-700"
                      : "text-red-600"
                  }`}
                >
                  {status}
                </motion.p>

              )}

            </form>

          </motion.div>

        </div>

      </div>

    </section>

  )
}

export default Contact
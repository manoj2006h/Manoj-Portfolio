import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGitAlt,
  faGithub,
  faJava,
  faNodeJs,
  faPython,
  faCuttlefish
} from '@fortawesome/free-brands-svg-icons'

import {
  faWind,
  faCode
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const OverviewSkills = ({ showBorderTop = false, standalone = false }) => {

  const [activeCategory, setActiveCategory] = useState("All")


  const skills = [

    {
      name: "HTML",
      category: "Web Development",
      icon: faHtml5
    },

    {
      name: "CSS",
      category: "Web Development",
      icon: faCss3Alt
    },

    {
      name: "Tailwind CSS",
      category: "Web Development",
      icon: faWind
    },

    {
      name: "JavaScript",
      category: "Languages",
      icon: faJs
    },

    {
      name: "React",
      category: "Frameworks",
      icon: faReact
    },

    {
      name: "Node.js",
      category: "Frameworks",
      icon: faNodeJs
    },

    {
      name: "Python",
      category: "Languages",
      icon: faPython
    },

    {
      name: "Java",
      category: "Languages",
      icon: faJava
    },

    {
      name: "C",
      category: "Languages",
      icon: faCode
    },

    {
      name: "C++",
      category: "Languages",
      icon: faCuttlefish
    },

    {
      name: "Git",
      category: "Tools",
      icon: faGitAlt
    },

    {
      name: "GitHub",
      category: "Tools",
      icon: faGithub
    }

  ]


  const categories = [
    "All",
    "Web Development",
    "Languages",
    "Frameworks",
    "Tools"
  ]


  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter(
          (skill) => skill.category === activeCategory
        )


  /* Animation Variants */

  const containerVariants = {
    hidden: {
      opacity: 0
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.1
      }
    }
  }


  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 0.4
      }
    },

    exit: {
      opacity: 0,
      y: -20,
      scale: 0.98,

      transition: {
        duration: 0.2
      }
    }
  }


  return (

    <section className={`overflow-hidden bg-paper text-ink ${showBorderTop ? 'border-t border-ink' : ''}`}>

      <div className={`wrap pb-12 md:pb-16 ${standalone ? 'pt-[140px] md:pt-[160px]' : 'pt-24 md:pt-28'}`}>


        {/* ================= HEADING ================= */}

        <motion.div
          className="text-center"

          initial={{
            opacity: 0,
            y: 30
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
            duration: 0.6,
            ease: [0.2, 0.8, 0.2, 1]
          }}
        >

          <p className="m">02 · My Skills</p>

          <h2 className="mt-4 text-[clamp(36px,4.5vw,56px)] font-light uppercase leading-[1.05] tracking-[-0.005em]">
            Technologies I work with
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-[1.7] text-body-muted">
            A collection of technologies and tools I have learned
            and use to build modern web applications.
          </p>

        </motion.div>


        {/* ================= CATEGORY BUTTONS ================= */}

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"

          initial={{
            opacity: 0,
            y: 20
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true
          }}

          transition={{
            duration: 0.5,
            delay: 0.2
          }}
        >

          {categories.map((category) => (

            <motion.button
              key={category}

              onClick={() => setActiveCategory(category)}

              whileHover={{
                scale: 1.03
              }}

              whileTap={{
                scale: 0.97
              }}

              className={`border px-5 py-2.5 text-[12px] uppercase tracking-[0.16em] transition duration-300 ${

                activeCategory === category

                  ? "border-ink bg-ink text-paper"

                  : "border-line bg-transparent text-muted hover:border-ink hover:text-ink"

              }`}
            >

              {category}

            </motion.button>

          ))}

        </motion.div>


        {/* ================= SKILLS GRID ================= */}

        <motion.div
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"

          variants={containerVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.2
          }}
        >

          <AnimatePresence mode="popLayout">

            {filteredSkills.map((skill) => (

              <motion.div
                key={skill.name}

                layout

                variants={cardVariants}

                initial="hidden"

                animate="visible"

                exit="exit"

                whileHover={{
                  y: -6
                }}

                className="flex min-h-48 flex-col items-center justify-center border border-line bg-paper p-6 transition-colors hover:border-ink hover:bg-soft/50"
              >

                {/* Icon */}

                <motion.div
                  whileHover={{
                    scale: 1.08
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 300
                  }}
                >

                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="text-4xl text-accent"
                  />

                </motion.div>


                {/* Name */}

                <h3 className="mt-5 text-lg font-normal uppercase tracking-[0.04em]">
                  {skill.name}
                </h3>


                {/* Category */}

                <p className="mt-2 m !text-[10px]">
                  {skill.category}
                </p>

              </motion.div>

            ))}

          </AnimatePresence>

        </motion.div>

      </div>

    </section>

  )
}

export default OverviewSkills
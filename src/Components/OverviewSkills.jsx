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


const OverviewSkills = () => {

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
      scale: 0.95
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
      scale: 0.95,

      transition: {
        duration: 0.2
      }
    }
  }


  return (

    <section className="overflow-hidden bg-slate-950 px-5 py-20 text-white">

      <div className="mx-auto max-w-6xl">


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
            duration: 0.6
          }}
        >

          <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
            My Skills
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-400">
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
                scale: 1.05
              }}

              whileTap={{
                scale: 0.95
              }}

              className={`rounded-lg px-5 py-3 text-sm transition duration-300 ${

                activeCategory === category

                  ? "bg-blue-600 text-white"

                  : "bg-slate-900 text-gray-400 hover:bg-slate-800 hover:text-white"

              }`}
            >

              {category}

            </motion.button>

          ))}

        </motion.div>


        {/* ================= SKILLS GRID ================= */}

        <motion.div
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"

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
                  y: -10,
                  scale: 1.02
                }}

                className="flex min-h-48 flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >

                {/* Icon */}

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.15
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 300
                  }}
                >

                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="text-5xl text-blue-500"
                  />

                </motion.div>


                {/* Name */}

                <h3 className="mt-5 text-lg font-semibold">
                  {skill.name}
                </h3>


                {/* Category */}

                <p className="mt-2 text-sm text-gray-400">
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
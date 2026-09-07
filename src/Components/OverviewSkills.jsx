import React, { useState } from 'react'

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


  return (

    <section className="bg-slate-950 px-5 py-20 text-white">

      <div className="mx-auto max-w-6xl">


        {/* Heading */}

        <div className="text-center">

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

        </div>


        {/* Category Buttons */}

        <div className="mt-10 flex flex-wrap justify-center gap-3">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-lg px-5 py-3 text-sm transition duration-300 ${

                activeCategory === category

                  ? "bg-blue-600 text-white"

                  : "bg-slate-900 text-gray-400 hover:bg-slate-800 hover:text-white"

              }`}
            >
              {category}
            </button>

          ))}

        </div>


        {/* Skills Grid */}

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {filteredSkills.map((skill) => (

            <div
              key={skill.name}
              className="flex min-h-48 flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-slate-800"
            >

              {/* Icon */}

              <FontAwesomeIcon
                icon={skill.icon}
                className="text-5xl text-blue-500"
              />


              {/* Name */}

              <h3 className="mt-5 text-lg font-semibold">
                {skill.name}
              </h3>


              {/* Category */}

              <p className="mt-2 text-sm text-gray-400">
                {skill.category}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default OverviewSkills
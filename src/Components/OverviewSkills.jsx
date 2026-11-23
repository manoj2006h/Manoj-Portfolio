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
  faCode,
  faServer,
  faDatabase,
  faTable,
  faMagnifyingGlass,
  faCloud
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const skills = [
  { name: 'HTML', category: 'Web Development', icon: faHtml5 },
  { name: 'CSS', category: 'Web Development', icon: faCss3Alt },
  { name: 'Tailwind CSS', category: 'Web Development', icon: faWind },
  { name: 'JavaScript', category: 'Languages', icon: faJs },
  { name: 'React', category: 'Frameworks', icon: faReact },
  { name: 'Node.js', category: 'Frameworks', icon: faNodeJs },
  { name: 'Express', category: 'Frameworks', icon: faServer },
  { name: 'MongoDB', category: 'Frameworks', icon: faDatabase },
  { name: 'MySQL', category: 'Frameworks', icon: faTable },
  { name: 'Vector DB', category: 'Frameworks', icon: faMagnifyingGlass },
  { name: 'Python', category: 'Languages', icon: faPython },
  { name: 'Java', category: 'Languages', icon: faJava },
  { name: 'C', category: 'Languages', icon: faCode },
  { name: 'C++', category: 'Languages', icon: faCuttlefish },
  { name: 'Git', category: 'Tools', icon: faGitAlt },
  { name: 'GitHub', category: 'Tools', icon: faGithub },
  { name: 'AWS', category: 'Tools', icon: faCloud }
]

const categories = [
  {
    name: 'Web Development',
    blurb: 'Structure, style, and interaction for the browser.'
  },
  {
    name: 'Languages',
    blurb: 'The foundations behind everything I write.'
  },
  {
    name: 'Frameworks',
    blurb: 'Tools that help me move from idea to working product.'
  },
  {
    name: 'Tools',
    blurb: 'How I track changes, collaborate, and ship.'
  }
]

const counts = categories.reduce((acc, category) => {
  acc[category.name] = skills.filter(
    (skill) => skill.category === category.name
  ).length
  return acc
}, {})

const OverviewSkills = ({ showBorderTop = false, standalone = false }) => {
  const [activeCategory, setActiveCategory] = useState('All')

  const visibleCategories =
    activeCategory === 'All'
      ? categories
      : categories.filter((category) => category.name === activeCategory)

  const visibleSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section className={`bg-paper text-ink ${showBorderTop ? 'border-t border-ink' : ''}`}>
      <div
        className={`wrap pb-16 md:pb-24 ${
          standalone ? 'pt-[140px] md:pt-[160px]' : 'pt-24 md:pt-28'
        }`}
      >
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          {/* Left rail */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p className="m">02 · My Skills</p>

            <h2 className="mt-5 text-[clamp(38px,4vw,58px)] font-light uppercase leading-[1.02] tracking-[-0.01em]">
              What I build
              <span className="block text-muted">
                with<span className="text-accent">.</span>
              </span>
            </h2>

            <p className="mt-6 max-w-sm text-[17px] leading-[1.7] text-body-muted">
              A practical toolkit shaped by the projects I build — from the
              first sketch to the final deploy.
            </p>

            <div className="mt-10">
              <p className="m !mb-4 !text-[10px]">Filter by category</p>

              <div
                className="flex flex-wrap gap-2 lg:flex-col"
                role="group"
                aria-label="Filter skills by category"
              >
                <button
                  type="button"
                  onClick={() => setActiveCategory('All')}
                  aria-pressed={activeCategory === 'All'}
                  className={`flex items-center justify-between gap-4 border px-4 py-3 text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 lg:w-full ${
                    activeCategory === 'All'
                      ? 'border-ink bg-ink text-paper'
                      : 'border-line text-muted hover:border-ink hover:text-ink'
                  }`}
                >
                  <span>All skills</span>
                  <span className="font-mono text-[10px] opacity-70">
                    {String(skills.length).padStart(2, '0')}
                  </span>
                </button>

                {categories.map((category) => (
                  <button
                    key={category.name}
                    type="button"
                    onClick={() => setActiveCategory(category.name)}
                    aria-pressed={activeCategory === category.name}
                    className={`flex items-center justify-between gap-4 border px-4 py-3 text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 lg:w-full ${
                      activeCategory === category.name
                        ? 'border-ink bg-ink text-paper'
                        : 'border-line text-muted hover:border-ink hover:text-ink'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="font-mono text-[10px] opacity-70">
                      {String(counts[category.name]).padStart(2, '0')}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right content */}
          <div>
            <motion.div
              className="mb-8 flex items-center justify-between gap-4 border-b border-ink pb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <span className="m">Toolkit / {activeCategory === 'All' ? 'Overview' : activeCategory}</span>
              <span className="m whitespace-nowrap !text-[10px]">
                {String(visibleSkills.length).padStart(2, '0')} technologies
              </span>
            </motion.div>

            <motion.div layout className="space-y-6">
              <AnimatePresence mode="popLayout">
                {visibleCategories.map((category) => {
                  const categorySkills = skills.filter(
                    (skill) => skill.category === category.name
                  )

                  return (
                    <motion.div
                      key={category.name}
                      layout
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.2, 0.8, 0.2, 1]
                      }}
                      className="vf p-6 sm:p-8"
                    >
                      <span className="c tl" />
                      <span className="c tr" />
                      <span className="c bl" />
                      <span className="c br" />

                      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                        <h3 className="text-2xl font-light uppercase tracking-[0.01em] sm:text-3xl">
                          {category.name}
                        </h3>
                        <span className="m !text-[10px]">
                          {String(categorySkills.length).padStart(2, '0')} / {String(skills.length).padStart(2, '0')}
                        </span>
                      </div>

                      <p className="mt-3 text-[15px] leading-[1.6] text-muted">
                        {category.blurb}
                      </p>

                      <div className="mt-6 grid gap-x-10 sm:grid-cols-2">
                        {categorySkills.map((skill, i) => (
                          <div
                            key={skill.name}
                            className="group/skill flex items-center gap-4 border-t border-line py-4"
                          >
                            <span className="m w-6 shrink-0 !text-[10px]">
                              {String(i + 1).padStart(2, '0')}
                            </span>

                            <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line text-xl text-accent transition-colors duration-300 group-hover/skill:border-accent">
                              <FontAwesomeIcon icon={skill.icon} />
                            </span>

                            <span className="text-[16px] uppercase tracking-[0.04em] transition-colors duration-300 group-hover/skill:text-accent">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OverviewSkills

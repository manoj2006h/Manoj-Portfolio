import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const projects = [
  {
    n: '01',
    title: 'Buildora',
    category: 'AI Website Builder',
    description:
      'Describe a website in plain English and let a Gemini-powered agent build it, preview it live, and publish it to Vercel in one click.',
    tags: ['React', 'Express', 'Gemini', 'Vercel'],
    repo: 'https://github.com/manoj2006h/Buildora',
    demo: 'https://buildora.manoj2006.in',
  },
  {
    n: '02',
    title: 'Terminal RAG',
    category: 'Retrieval Augmented Generation',
    description:
      'A command-line RAG pipeline that loads PDFs, splits them into chunks, embeds them with Gemini, and stores them in Pinecone for retrieval.',
    tags: ['Node.js', 'LangChain', 'Pinecone', 'Gemini'],
    repo: 'https://github.com/manoj2006h/Terminal-RAG',
  },
  {
    n: '03',
    title: 'Sign Language Detector',
    category: 'Computer Vision',
    description:
      'A DETR-style object detector that recognizes hello, iloveyou, and thankyou in images and real-time webcam feeds.',
    tags: ['Python', 'PyTorch', 'DETR', 'OpenCV'],
    repo: 'https://github.com/manoj2006h/Sign-Language-Detector',
  },
]

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

        {/* Project grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="vf group flex flex-col p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.1,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              <span className="c tl" />
              <span className="c tr" />
              <span className="c bl" />
              <span className="c br" />

              <div className="flex items-start justify-between gap-4">
                <span className="m !text-accent">{project.n} / 03</span>
                <span className="m text-right !text-[10px]">{project.category}</span>
              </div>

              <h2 className="mt-10 text-3xl font-light uppercase leading-tight sm:text-4xl">
                {project.title}
              </h2>

              <p className="mt-5 flex-1 text-[16px] leading-[1.7] text-body-muted">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:text-accent"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <FontAwesomeIcon icon={faGithub} className="text-[15px]" />
                  Source
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:text-accent"
                    aria-label={`Open ${project.title} live product`}
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[13px]" />
                    Live product
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

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

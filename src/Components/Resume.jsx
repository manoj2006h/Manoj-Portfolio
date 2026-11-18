import React from 'react'
import { motion } from 'framer-motion'
import resumePdf from '../Assets/Manoj_Resume-2.pdf'

const Resume = () => {
  return (
    <section className="min-h-screen bg-paper text-ink">
      <div className="wrap pt-[115px] pb-2 md:pt-[130px] md:pb-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-4xl">
            <p className="m">05</p>
            <h1 className="mt-2 text-[clamp(44px,6vw,88px)] font-light uppercase leading-[1.02] tracking-[-0.01em]">
              Manoj H<span className="text-accent">.</span>
            </h1>
            <p className="mt-2 text-[17px] leading-[1.7] text-body-muted">
              View my resume below, or{' '}
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                open it in a new tab
              </a>
              .
            </p>
          </div>
          <a
            href={resumePdf}
            download="Manoj_Resume.pdf"
            className="pillb solid inline-flex w-fit shrink-0"
          >
            Download PDF <span className="arr" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-3 hidden md:block"
        >
          <div className="vf overflow-hidden">
            <span className="c tl" />
            <span className="c tr" />
            <span className="c bl" />
            <span className="c br" />
            <div className="flex items-center justify-between border-b border-line px-4 py-1.5 sm:px-5">
              <span className="m">Fig. 01 · Resume Viewer</span>
              <a
                href={resumePdf}
                download="Manoj_Resume.pdf"
                className="m transition-colors hover:text-accent"
              >
                Download
              </a>
            </div>
            <div className="flex w-full justify-center bg-soft">
              <iframe
                src={`${resumePdf}#view=FitH&scrollbar=0`}
                title="Manoj H Resume"
                className="block h-auto w-full max-w-2xl border-0 aspect-[210/297] bg-soft"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-3 md:hidden"
        >
          <div className="vf relative p-6 sm:p-8">
            <span className="c tl" />
            <span className="c tr" />
            <span className="c bl" />
            <span className="c br" />
            <p className="m">Resume PDF</p>
            <p className="mt-3 text-[17px] leading-[1.7] text-body-muted">
              Preview is available on desktop. You can open the resume in a new
              page or download it below.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="pillb solid w-full"
              >
                View in new page <span className="arr" />
              </a>
              <a
                href={resumePdf}
                download="Manoj_Resume.pdf"
                className="pillb w-full"
              >
                Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume

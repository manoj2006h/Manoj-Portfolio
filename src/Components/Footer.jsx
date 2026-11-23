import React from 'react'
import { NavLink } from 'react-router'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className="wrap">
      <footer className="mt-0 border-t border-ink pt-9 pb-10 sm:pt-10 sm:pb-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 sm:gap-x-8 md:grid-cols-4">

          {/* Pages */}
          <div className="col-span-2 sm:col-span-1">
            <div className="m">Pages</div>
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-[14px] leading-[1.7] sm:block sm:space-y-1 sm:text-[15px] sm:leading-[1.8]">
              <NavLink to="/" className="hover:text-accent transition-colors">Home</NavLink>
              <NavLink to="/about" className="hover:text-accent transition-colors">About</NavLink>
              <NavLink to="/skills" className="hover:text-accent transition-colors">Skills</NavLink>
              <NavLink to="/projects" className="hover:text-accent transition-colors">Projects</NavLink>
              <NavLink to="/contact" className="hover:text-accent transition-colors">Contact</NavLink>
              <NavLink to="/resume" className="hover:text-accent transition-colors">Resume</NavLink>
            </div>
          </div>

          {/* Elsewhere */}
          <div>
            <div className="m">Elsewhere</div>
            <div className="mt-3 space-y-1 text-[14px] leading-[1.7] sm:text-[15px] sm:leading-[1.8]">
              <a href="https://github.com/manoj2006h" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/manoj2006h/" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Say hi */}
          <div className="min-w-0">
            <div className="m">Say hi</div>
            <div className="mt-3 space-y-1 text-[13px] leading-[1.7] text-body sm:text-[15px] sm:leading-[1.8]">
              <a href="mailto:manoj2006h@gmail.com" className="block break-all hover:text-accent transition-colors sm:break-normal">manoj2006h@gmail.com</a>
              <span className="block">Davangere, India</span>
            </div>
          </div>

          {/* Copyright — desktop only */}
          <div className="hidden md:block">
            <div className="m">© {new Date().getFullYear()}</div>
            <div className="mt-3 text-[15px] leading-[1.8]">
              <div className="uppercase tracking-[0.12em]">Manoj H</div>
              <div className="mt-4 flex items-center gap-4 text-[18px] text-muted">
                <a href="https://github.com/manoj2006h" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/manoj2006h/" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="mailto:manoj2006h@gmail.com" className="hover:text-ink transition-colors" aria-label="Email">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar — mobile / tablet only */}
        <div className="mt-9 flex flex-wrap items-end justify-between gap-5 border-t border-line pt-6 md:hidden">
          <div>
            <div className="m">© {new Date().getFullYear()}</div>
            <div className="mt-2 text-[14px] uppercase tracking-[0.12em]">Manoj H</div>
          </div>
          <div className="flex items-center gap-5 text-[18px] text-muted">
            <a href="https://github.com/manoj2006h" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/manoj2006h/" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:manoj2006h@gmail.com" className="hover:text-ink transition-colors" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

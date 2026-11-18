import React from 'react'
import { NavLink } from 'react-router'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className="wrap">
      <footer className="mt-0 grid grid-cols-1 gap-5 border-t border-ink pt-10 pb-16 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="m">Pages</div>
          <div className="mt-3 space-y-1 text-[15px] leading-[1.8]">
            <NavLink to="/" className="block hover:text-accent transition-colors">Home</NavLink>
            <NavLink to="/about" className="block hover:text-accent transition-colors">About</NavLink>
            <NavLink to="/skills" className="block hover:text-accent transition-colors">Skills</NavLink>
            <NavLink to="/projects" className="block hover:text-accent transition-colors">Projects</NavLink>
            <NavLink to="/contact" className="block hover:text-accent transition-colors">Contact</NavLink>
          </div>
        </div>

        <div>
          <div className="m">Elsewhere</div>
          <div className="mt-3 space-y-1 text-[15px] leading-[1.8]">
            <a href="https://github.com/manoj2006h" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/manoj2006h/" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </div>

        <div>
          <div className="m">Say hi</div>
          <div className="mt-3 space-y-1 text-[15px] leading-[1.8] text-body">
            <a href="mailto:manoj2006h@gmail.com" className="block hover:text-accent transition-colors">manoj2006h@gmail.com</a>
            <span className="block">Davangere, India</span>
          </div>
        </div>

        <div>
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
      </footer>
    </div>
  )
}

export default Footer
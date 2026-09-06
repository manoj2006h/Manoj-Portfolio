import React, { useState } from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-slate-950 text-white">

      <div className="flex items-center justify-between px-5 py-5 md:px-8">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Manoj H<span className="text-blue-500">.</span>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 text-gray-400 md:flex">
          <li>
            <NavLink
              to="/"
              className="hover:text-white transition duration-300"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className="hover:text-white transition duration-300"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/skills"
              className="hover:text-white transition duration-300"
            >
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className="hover:text-white transition duration-300"
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="hover:text-white transition duration-300"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:hidden"
        >
          ☰
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="flex flex-col gap-6 px-5 pb-6 text-gray-300 md:hidden">

          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/skills" onClick={() => setIsOpen(false)}>
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </li>

        </ul>
      )}

    </nav>
  )
}

export default Navbar
import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-slate-950 text-white">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Manoj H<span className="text-blue-500">.</span>
        </h1>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 text-gray-300">
          <li className="cursor-pointer hover:text-blue-500 transition duration-300">
            <NavLink to='/' >Home</NavLink>
          </li>

          <li className="cursor-pointer hover:text-blue-500 transition duration-300">
            <NavLink to='/about' >About</NavLink>
          </li>

          <li className="cursor-pointer hover:text-blue-500 transition duration-300">
            <NavLink to='/skills' >Skills</NavLink>
          </li>

          <li className="cursor-pointer hover:text-blue-500 transition duration-300">
            <NavLink to='/projects' >Projects</NavLink>
          </li>

          <li className="cursor-pointer hover:text-blue-500 transition duration-300">
            <NavLink to='/contact' >Contact</NavLink>
          </li>
        </ul>

      </nav>
  )
}

export default Navbar
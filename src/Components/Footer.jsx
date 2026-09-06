import React from 'react'
import { NavLink } from 'react-router'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white border-t border-slate-800">

            <div className="max-w-6xl mx-auto px-5 py-12">

                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

                    {/* Logo / About */}
                    <div>
                        <h2 className="text-2xl font-bold">
                            Manoj H<span className="text-blue-500">.</span>
                        </h2>

                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-400">
                            CSBS student and aspiring Full Stack Developer passionate
                            about building modern and user-friendly web applications.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">
                            Quick Links
                        </h3>

                        <ul className="flex flex-col gap-3 text-gray-400">
                            <li>
                                <NavLink
                                    to="/"
                                    className="hover:text-white transition"
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/about"
                                    className="hover:text-white transition"
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/skills"
                                    className="hover:text-white transition"
                                >
                                    Skills
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/projects"
                                    className="hover:text-white transition"
                                >
                                    Projects
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">
                            Let's Connect
                        </h3>

                        <p className="text-sm text-gray-400">
                            Feel free to connect with me.
                        </p>

                        <div className="flex gap-5 mt-4">

                            {/* GitHub */}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/manoj2006h"
                                className="text-2xl text-gray-400 hover:text-white transition"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>

                            {/* LinkedIn */}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/manoj2006h/"
                                className="text-2xl text-gray-400 hover:text-white transition"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:manoj2006h@gmail.com"
                                className="text-2xl text-gray-400 hover:text-white transition"
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>

                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Manoj H. All rights reserved.
                </div>

            </div>

        </footer>
    )
}

export default Footer
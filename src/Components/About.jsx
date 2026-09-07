import React from 'react'

const About = () => {
  return (
    <section className="bg-slate-950 px-5 py-24 text-white">

      <div className="mx-auto max-w-6xl">

        {/* Intro */}
        <div className="max-w-4xl">

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            About Me
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
            I learn by
            <span className="block text-blue-500">
              building things.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
            I'm Manoj, a CSBS student and aspiring Full Stack Developer.
            I enjoy exploring technology not just by reading about it, but by
            opening my editor, experimenting with ideas, making mistakes, and
            eventually turning those ideas into something real.
          </p>

        </div>


        {/* Story */}
        <div className="mt-24 grid gap-12 md:grid-cols-2">

          <div>
            <p className="text-sm uppercase tracking-widest text-blue-500">
              The Way I Learn
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Curiosity usually comes first.
            </h2>
          </div>

          <div className="space-y-6 leading-relaxed text-gray-400">

            <p>
              When I come across a new technology, my first thought is usually
              not just <span className="text-white">"How does this work?"</span>
            </p>

            <p className="text-xl font-medium text-white">
              It's "What can I build with this?"
            </p>

            <p>
              That's why I enjoy development. Every project gives me a chance
              to learn something new, solve unexpected problems, and see an
              idea slowly turn into something people can actually interact
              with.
            </p>

          </div>

        </div>


        {/* Personal Details */}
        <div className="mt-24 border-y border-slate-800 py-10">

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">

            <div>
              <p className="text-sm text-gray-500">Currently</p>
              <p className="mt-2 text-lg font-medium">Learning & Building</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Interested In</p>
              <p className="mt-2 text-lg font-medium">
                Full Stack Development
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Also Exploring</p>
              <p className="mt-2 text-lg font-medium">DSA & AI</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Based In</p>
              <p className="mt-2 text-lg font-medium">
                Davangere, India
              </p>
            </div>

          </div>

        </div>


        {/* My Approach */}
        <div className="mt-24 max-w-3xl">

          <p className="text-sm uppercase tracking-widest text-blue-500">
            My Approach
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-relaxed sm:text-4xl">
            I don't want to collect technologies.
            <span className="text-gray-500">
              {" "}I want to understand what I can create with them.
            </span>
          </h2>

        </div>


        {/* Workspace Section */}
        <section className="mt-28 border-t border-slate-800 pt-20">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            {/* Left Side */}
            <div>

              <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
                Behind The Screen
              </p>

              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                Where the ideas
                <span className="block text-blue-500">
                  come to life.
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-relaxed text-gray-400">
                This is where I spend my time learning, experimenting,
                debugging, and turning ideas into projects. My setup may be
                simple, but it's where most of my ideas start becoming
                something real.
              </p>

            </div>


            {/* Right Side */}
            <div className="space-y-4">

              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-blue-500">

                <div>
                  <p className="text-sm text-gray-500">
                    Machine
                  </p>

                  <h3 className="mt-1 text-lg font-semibold">
                    MacBook Air M2
                  </h3>
                </div>

                <span className="text-sm text-blue-500">
                  16GB / 256GB
                </span>

              </div>


              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-blue-500">

                <div>
                  <p className="text-sm text-gray-500">
                    Primary Editor
                  </p>

                  <h3 className="mt-1 text-lg font-semibold">
                    VS Code
                  </h3>
                </div>

                <span className="text-sm text-blue-500">
                  Web Development
                </span>

              </div>


              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-blue-500">

                <div>
                  <p className="text-sm text-gray-500">
                    IDE
                  </p>

                  <h3 className="mt-1 text-lg font-semibold">
                    IntelliJ IDEA
                  </h3>
                </div>

                <span className="text-sm text-blue-500">
                  Java Development
                </span>

              </div>

            </div>

          </div>

        </section>

      </div>

    </section>
  )
}

export default About
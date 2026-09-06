import React from 'react'
import { useNavigate } from 'react-router'


const Home = () => {
    const navigator = useNavigate()

  return (
    <>
      <section className="min-h-screen bg-slate-950 text-white flex items-center">
      
      <div className="max-w-6xl mx-auto w-full px-8">

        <p className="text-blue-500 text-lg mb-4">
          Hi, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold">
          Manoj H.
        </h1>

        <h2 className="text-3xl md:text-5xl font-semibold text-gray-400 mt-4">
          Aspiring Full Stack Developer
        </h2>

        <p className="text-gray-400 mt-6 max-w-xl leading-relaxed">
          I'm a CSBS student passionate about building modern,
          responsive, and user-friendly web applications.
        </p>

        <div className="flex gap-4 mt-8">
          <button onClick={()=>{
            navigator('/projects')
          }
          } className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            View Projects
          </button>

          <button 
          onClick={()=>{
            navigator('/contact')
          }}
          className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-slate-800 transition">
            Contact Me
          </button>
        </div>

      </div>

    </section>
    </>
  )
}

export default Home
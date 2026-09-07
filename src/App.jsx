import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Home from './Components/Home'
import Navbar from './Components/Navbar';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import OverviewSkills from './Components/OverviewSkills';

import PageTransition from './Components/PageTransition';
import ScrollToTop from './Components/ScrollToTop';


function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: (
        <div>
          <ScrollToTop />
          <Navbar />

          <PageTransition>
            <Home />
            <OverviewSkills />
          </PageTransition>

          <Footer />
        </div>
      )
    },


    {
      path: "/about",
      element: (
        <div>
          <ScrollToTop />
          <Navbar />

          <PageTransition>
            <About />
          </PageTransition>

          <Footer />
        </div>
      )
    },
    {
      path: "/projects",
      element: (
        <div>
          <ScrollToTop />
          <Navbar />

          <PageTransition>
            <Project />
          </PageTransition>

          <Footer />
        </div>
      )
    },
    {
      path: "/skills",
      element: (
        <div>
          <ScrollToTop />
          <Navbar />

          <PageTransition>
            <OverviewSkills />
          </PageTransition>

          <Footer />
        </div>
      )
    },
    {
      path: "/contact",
      element: (
        <div>
          <ScrollToTop />
          <Navbar />

          <PageTransition>
            <Contact />
          </PageTransition>

          <Footer />
        </div>
      )
    },

  ]);


  return (
    <RouterProvider router={router} />
  )
}

export default App
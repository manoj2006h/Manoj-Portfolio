import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Home from './Components/Home'
import Navbar from './Components/Navbar';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import OverviewSkills from './Components/OverviewSkills';

import PageTransition from './Components/PageTransition';
import ScrollToTop from './Components/ScrollToTop';

const Layout = ({ children }) => (
  <div className="min-h-screen bg-paper text-ink">
    <ScrollToTop />
    <Navbar />
    <PageTransition>
      {children}
    </PageTransition>
    <Footer />
  </div>
)

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
          <OverviewSkills showBorderTop />
        </Layout>
      )
    },
    {
      path: "/about",
      element: (
        <Layout>
          <About />
        </Layout>
      )
    },
    {
      path: "/projects",
      element: (
        <Layout>
          <Project />
        </Layout>
      )
    },
    {
      path: "/skills",
      element: (
        <Layout>
          <OverviewSkills standalone />
        </Layout>
      )
    },
    {
      path: "/contact",
      element: (
        <Layout>
          <Contact />
        </Layout>
      )
    },
    {
      path: "/resume",
      element: (
        <Layout>
          <Resume />
        </Layout>
      )
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
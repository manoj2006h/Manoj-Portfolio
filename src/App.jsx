import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import About from './Components/About';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element:<div>
      <Navbar />
      <Home />
      <Footer/>
    </div>
  },
  {
    path: "/about",
    element:<div>
      <Navbar />
      <About />
      <Footer/>
    </div>
  },
  {
    path: "/projects",
    element:<div>
      <Navbar />
      <Project />
      <Footer/>
    </div>
  },
  {
    path: "/skills",
    element:<div>
      <Navbar />
      <Skills />
      <Footer/>
    </div>
  },
  {
    path: "/contact",
    element:<div>
      <Navbar />
      <Contact />
      <Footer/>
    </div>
  },
  
]);

  return (
    <>
    {/* <RouterProvider router={router} /> */}
    <h1>Under Maintainance</h1>
    <h1>Will be back soon</h1>
    </>
  )
}

export default App
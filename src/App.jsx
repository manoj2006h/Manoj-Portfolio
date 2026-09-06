import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import About from './Components/About';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element:<div>
      <Navbar />
      <Home />
    </div>
  },
  {
    path: "/about",
    element:<div>
      <Navbar />
      <About />
    </div>
  },
  {
    path: "/projects",
    element:<div>
      <Navbar />
      <Project />
    </div>
  },
  {
    path: "/skills",
    element:<div>
      <Navbar />
      <Skills />
    </div>
  },
  {
    path: "/contact",
    element:<div>
      <Navbar />
      <Contact />
    </div>
  },
]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
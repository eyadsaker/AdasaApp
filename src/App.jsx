import { useState } from 'react'
import heroImg from './assets/hero.png'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import About from './pages/About.jsx'
import './App.css'
import Layout from './Layout/Layout.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound.jsx"
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'


const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement:<NotFound/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        
        children:[
          {index:true, element:<Blog/>},
          {path:":slug", element:<BlogPost/>},
        ]
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      
    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router}/> 
    </>
  )
}

export default App

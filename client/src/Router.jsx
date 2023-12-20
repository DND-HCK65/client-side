

import {
  createBrowserRouter, redirect,
} from "react-router-dom";
import LandingPage from "./views/LandingPage";
import HomePage from "./views/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    loader: () => {
      const name = localStorage.getItem('name')
      if(!name) {
        return null
      } else {
        throw redirect ('/home-page')
      }
    }
  },
  {
    path: '/home-page',
    element: <HomePage />,
    loader: () => {
      const name = localStorage.getItem('name')
      if(name) {
        return null
      } else {
        throw redirect ('/')
      }
    }
  }

]);

export default router
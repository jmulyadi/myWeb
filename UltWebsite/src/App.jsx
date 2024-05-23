import React from "react";
import { useState } from "react";
import "./input.css";
import Profile from "./pages/Profile";
import Navbar from "./pages/Navbar";
import Gallery from "./pages/Projects";
import Home from "./Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import End from "./pages/End";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import PP from "./pages/PP";
import ScrollToHashElement from "./ScrollToHashElement";

function App() {
  const [pressed, setPressed] = React.useState(false);
  const handleClick = () => {
    setPressed(true);
    console.log("worked");
  };
  const changeBack = () => {
    setPressed(false);
    console.log("back to false");
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar sendToParent={handleClick} />
          <ScrollToHashElement />
          <div className="px-4 py-2"></div>
          <Home props={pressed} function={changeBack} />
          <div className="mr-10 ml-10">
            <Gallery />
          </div>
          <Experience />
          <Education />
          <Skills />
          <div className="py-10"></div>
          <End />
        </>
      ),
    },
    {
      path: "/Social",
      element: <PP />,
    },
    {
      path: "/Robot",
      element: <PP />,
    },
    {
      path: "/ML",
      element: <PP />,
    },
    {
      path: "Meme",
      element: <PP />,
    },
    {
      path: "/Data",
      element: <PP />,
    },
    {
      path: "/IOS",
      element: <PP />,
    },
    {
      path: "/Black",
      element: <PP />,
    },
    {
      path: "/Software",
      element: <PP />,
    },
    {
      path: "/Systems",
      element: <PP />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

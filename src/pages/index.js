import React, { useState, useEffect } from "react";
// import React from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import MainName from "../components/MainName";
import About from "../components/About";
import Work from "../components/Work";
import LogoAnimation from "../components/LogoAnimation";

const Home = () => {
  // const [animated, setAnimated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [countInTimeout, setCountInTimeout] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // const animateToggle = () => {
  //   setAnimated(!animated);
  // };

  useEffect(() => {
    setTimeout(() => {
      setCountInTimeout(count); // count is 0 here
    }, 7000);
    setCount(5); // Update count to be 5 after timeout is scheduled
  }, [count]);

  return (
    <>
      {countInTimeout < 5 ? (
        <LogoAnimation />
      ) : (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <MainName />
          <About />
          <Work />
        </>
      )}
    </>
  );
};

export default Home;

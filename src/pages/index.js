import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import MainName from "../components/MainName";
import About from "../components/About";
import Work from "../components/Work";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MainName />
      <About />
      <Work />
    </>
  );
};

export default Home;

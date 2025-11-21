import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import { RiMenu3Fill } from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi";
import { FaHome, FaDownload } from "react-icons/fa";
import { MdWork } from "react-icons/md";

// Reusable Resume button
const ResumeButton = () => (
  <a
    href="https://drive.google.com/file/d/19rnbukAhf9oPhadMhsvI3xnWF6FIYeMT/view"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 rounded-md text-white hover:bg-orange-600 transition"
  >
    Resume <FaDownload />
  </a>
);

export default function Navbar() {
  // ONLY Home + Project
  const navLinks = [
    { title: "Home", link: "/", icon: <FaHome /> },
    { title: "Project", link: "/project", icon: <MdWork /> },
  ];

  /* Drawer State */
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen((v) => !v);

  /* Hide Navbar on Scroll Down */
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (y > lastY.current && y > 60) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 bg-neutral-800 shadow-lg transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="w-full flex items-center justify-between px-4 md:px-20 py-3">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl text-orange-500 font-lobster">
            Gilbert Hutapea
          </h1>
        </Link>

        {/* Desktop Menu (Aligned Right) */}
        <nav className="hidden lg:flex items-center gap-8 ml-auto pr-4 md:pr-8">
          {navLinks.map((item) => (
            <NavLink
              key={item.title}
              to={item.link}
              className={({ isActive }) =>
                `transition hover:text-orange-400 ${
                  isActive ? "text-orange-400 font-medium" : "text-white"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}

          <ResumeButton />
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleDrawer}
          aria-label="Open navigation"
          className="lg:hidden text-white text-2xl ml-auto"
        >
          <RiMenu3Fill />
        </button>

        {/* Mobile Drawer */}
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="bg-neutral-900 text-white p-5 flex flex-col justify-between"
        >
          {/* Close Button */}
          <button
            onClick={toggleDrawer}
            aria-label="Close navigation"
            className="text-3xl mb-6 hover:text-orange-500 transition"
          >
            <GiCrossMark />
          </button>

          {/* Links */}
          <ul>
            {navLinks.map((item) => (
              <li key={item.title} className="mb-4" onClick={toggleDrawer}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `flex items-center gap-3 hover:text-orange-400 transition ${
                      isActive ? "text-orange-400" : "text-white"
                    }`
                  }
                >
                  {item.icon}
                  {item.title}
                </NavLink>
              </li>
            ))}

            {/* Resume Button */}
            <div className="mt-6">
              <ResumeButton />
            </div>
          </ul>

          <p className="text-center text-neutral-500 text-sm mt-10">
            © 2023 Gilbert Hutapea. All Rights Reserved.
          </p>
        </Drawer>
      </div>
    </header>
  );
}

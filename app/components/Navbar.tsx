"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navItemClass = (id: string) =>
  `relative transition duration-300 
   ${active === id ? "text-blue-400 font-semibold" : "text-gray-300"}
   hover:text-white
   before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 
   before:bg-gradient-to-r before:from-blue-400 before:to-purple-500 
   before:transition-all before:duration-300 hover:before:w-full`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-xl border-b border-white/20 z-50 shadow-[0_0_20px_rgba(0,0,0,0.4)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
          Shashank.dev
      </h1>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li>
            <Link href="#home" className={navItemClass("home")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#projects" className={navItemClass("projects")}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#about" className={navItemClass("about")}>
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" className={navItemClass("contact")}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-gray-200 hover:text-white transition 
             hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
          onClick={() => setOpen(!open)}
        >
        ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 space-y-3">
          <Link href="#home" className={navItemClass("home")} onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="#projects" className={navItemClass("projects")} onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link href="#about" className={navItemClass("about")} onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="#contact" className={navItemClass("contact")} onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
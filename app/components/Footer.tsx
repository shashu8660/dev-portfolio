"use client";

import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-20 px-6 py-10 bg-black/30 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4">

        {/* Brand */}
        <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Shashank.dev
        </h2>

        {/* Socials */}
        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/shashu8660"
            target="_blank"
            className="text-gray-300 hover:text-white transition"
          >
            <SiGithub className="text-2xl" />
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="text-gray-300 hover:text-white transition"
          >
            <SiLinkedin className="text-2xl" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 mt-4" />

        {/* Copyright */}
        <p className="text-gray-400 text-sm mt-2">
          © {new Date().getFullYear()} Shashank. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
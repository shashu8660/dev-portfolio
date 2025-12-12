"use client";

import { useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "idle" | "sending" | "success" | "error">( "idle" );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName(""); setEmail(""); setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 py-24 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get in touch
          </h2>
          <p className="mt-3 text-gray-300">Have a project or want to say hi? Send a message — I reply fast.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Info + Socials */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <p className="text-gray-300">Email me at <a className="text-blue-400 underline" href="mailto:shashu8660@gmail.com">shashu8660@gmail.com</a></p>

            <div className="mt-6 flex gap-4">
              <a href="https://github.com/shashu8660" target="_blank" className="p-3 rounded-lg bg-white/3 hover:bg-white/6 transition">
                <SiGithub className="text-2xl" />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" className="p-3 rounded-lg bg-white/3 hover:bg-white/6 transition">
                <SiLinkedin className="text-2xl" />
              </a>
              <a href="mailto:shashank@example.com" className="p-3 rounded-lg bg-white/3 hover:bg-white/6 transition">
                <FiMail className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 space-y-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your name"
              className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Your email"
              className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              placeholder="How can I help?"
              className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
            />
            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && <span className="text-green-400">Message sent — thank you!</span>}
              {status === "error" && <span className="text-red-400">Failed to send — try again.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
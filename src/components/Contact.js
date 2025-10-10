"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-transparent">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-md border border-transparent dark:border-slate-800">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">Contact Me</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
            Interested in collaborating or have a question? Let's connect — I'd love to hear from you!
          </p>

          <form
            action="https://formspree.io/f/mzzbrvne"
            method="POST"
            className="max-w-xl mx-auto grid grid-cols-1 gap-4"
          >
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 border border-slate-200 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
            />

            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 border border-slate-200 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
            />

            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="p-3 border border-slate-200 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
            ></textarea>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-8 flex items-center justify-center gap-6 text-slate-600 dark:text-slate-300">
            <a href="https://github.com/shashu8660" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-slate-900 dark:hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.52.11-3.16 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.5 3.17-1.18 3.17-1.18.63 1.64.23 2.86.11 3.16.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.41-5.25 5.7.42.36.79 1.06.79 2.14 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A10.52 10.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-slate-900 dark:hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.64 1.34 2.98 2.98 2.98 1.64 0 2.98-1.34 2.98-2.98C7.96 4.84 6.62 3.5 4.98 3.5zM2.4 8.98h5.17V21H2.4zM9.7 9h4.96v1.6h.07c.69-1.31 2.38-2.69 4.9-2.69 5.24 0 6.2 3.45 6.2 7.94V21h-5.17v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V21H9.7z" />
              </svg>
            </a>

            <a href="mailto:your.email@example.com" aria-label="Email" className="hover:text-slate-900 dark:hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M1.5 6.75A2.25 2.25 0 013.75 4.5h16.5A2.25 2.25 0 0122.5 6.75v10.5A2.25 2.25 0 0120.25 19.5H3.75A2.25 2.25 0 011.5 17.25V6.75zM3.75 6.75l8.25 5.25L20.25 6.75" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
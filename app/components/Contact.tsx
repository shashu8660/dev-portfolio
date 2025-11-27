export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-10 md:px-20 bg-black text-white border-t border-white/10"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-10">Contact</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE — Message */}
        <div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Interested in working together?  
            Have a project idea?  
            Or just want to say hello?  
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            Feel free to reach out. I usually reply within 24 hours.
          </p>

          <div className="mt-8 space-y-3 text-gray-300">
            <p>
              📧 Email:{" "}
              <a
                href="mailto:shashu8660@gmail.com"
                className="text-blue-400 underline"
              >
                shashu8660@gmail.com
              </a>
            </p>

            <p>
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/shashank-s-11647423b/"
                className="text-blue-400 underline"
                target="_blank"
              >
                linkedin.com/in/shashank-s
              </a>
            </p>

            <p>
              🧑‍💻 GitHub:{" "}
              <a
                href="https://github.com/shashu8660"
                className="text-blue-400 underline"
                target="_blank"
              >
                github.com/shashu8660
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE — Contact Form */}
        <form className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
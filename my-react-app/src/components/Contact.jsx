export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-800 text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Contact Me
        </h2>

        <p className="text-slate-400 text-center mt-4 mb-12">
          Have a project or opportunity? Feel free to reach out.
        </p>


        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact information */}

          <div>

            <h3 className="text-2xl font-semibold">
              Let's talk
            </h3>

            <p className="text-slate-400 mt-4 leading-8">
              I'm always interested in new opportunities,
              collaborations, and interesting projects.
            </p>


            <div className="mt-8 space-y-4">

                <a href="mailto:jonathan.scazzola@gmail.com" className="block text-blue-400 hover:text-blue-300">
                    📧 jonathan.scazzola@gmail.com
                </a>

                <a href="https://github.com/JohnToni" target="_blank" className="block text-blue-400 hover:text-blue-300">
                    🐙 GitHub
                </a>

                <a href="https://www.linkedin.com/in/jonathan-scazzola-9b190641a" target="_blank" className="block text-blue-400 hover:text-blue-300">
                    💼 LinkedIn
                </a>

                <a href="tel:+393513166725" className="block text-blue-400 hover:text-blue-300">
                    📱(+39) 3513166725
                </a>

            </div>
          </div>



          {/* Form */}
          <form className="bg-slate-900 p-8 rounded-2xl space-y-5" action="https://formspree.io/f/xpqvjlpn" method="POST">

            <input type="text" placeholder="Your Name" className="w-full bg-slate-800 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Your Email" className="w-full bg-slate-800 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"/>
            <textarea rows="5" placeholder="Your Message" className="w-full bg-slate-800 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"/>

            <button type="submit" className="w-full bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}
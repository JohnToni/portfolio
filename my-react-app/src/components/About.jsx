export function About() {
  return (
    <section id="about-section" className="py-24 bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-lg text-slate-300 leading-8 max-w-3xl">
            Hi, i'm Jonathan Scazzola.
            I've always been passionate about computer science, which led me to pursue a degree in the field and graduate in 2023. 
            Throughout my studies, I gained experience in various programming languages, including C, C++, C#, Java, HTML, CSS, JavaScript, PHP, SQL, and database systems.
            After graduating, I chose to continue expanding my skills through self-directed learning. 
            Since then, I've started learning new languages such as React.js and Python, building personal projects and exploring modern development practices.
            I'm eager to take on new challenges, contribute to meaningful projects, and continue growing as a software developer. 
            I value integrity, teamwork, adaptability, and continuous learning, and I'm always ready to embrace new technologies and programming languages.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

            <div className="bg-slate-700 p-6 rounded-xl hover:-translate-y-2 hover:bg-slate-600 transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-400">
                  3+
                </h3>
                <p className="text-slate-300 mt-2">
                Years Learning
                </p>
            </div>

            <div className="bg-slate-700 p-6 rounded-xl hover:-translate-y-2 hover:bg-slate-600 transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-400">
                  10+
                </h3>
                <p className="text-slate-300 mt-2">
                Projects Built
                </p>
            </div>

            <div className="bg-slate-700 p-6 rounded-xl hover:-translate-y-2 hover:bg-slate-600 transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-400">
                  7+
                </h3>
                <p className="text-slate-300 mt-2">
                Technologies
                </p>
            </div>

        </div>

      </div>
    </section>
  );
}
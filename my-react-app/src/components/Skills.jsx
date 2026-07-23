import { skills } from '../data/skills'
import { motion } from 'framer-motion'

export  function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-20 left-1/2-translate-x-1/2 w-96 h-96 bg-blue-600 opacity-10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          My Skills
        </h2>


        <p className="text-slate-400 text-center mt-4 mb-14">
          Technologies and tools I use to build applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill) => {

            const Icon = skill.icon;
            return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-slate-800/70 backdrop-blur border border-slate-700 rounded-2xl p-8 flex flex-col items-center gap-4 shadow-lg hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
                >
                  <Icon className="text-5xl text-blue-400" />

                  <h3 className="font-semibold text-lg">
                      {skill.name}
                  </h3>
                </motion.div>
            );

          })}

        </div>
      </div>
    </section>
  );
}
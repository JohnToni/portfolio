import profilePic from '/img/profile-pic.jpg'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    // min-h-screen     -> This makes the section at least as tall as the viewport, creating a strong landing section.

    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

            <div className="grid md:grid-cols-2 items-center gap-15">
                
                {/* Text on the left - with transition effect */}
                <motion.div id='leftSide'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                
                    <p className="text-blue-500 font-semibold">
                        Hello, I'm
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Jonathan Scazzola
                    </h1>
                    <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                        🚀 Backend/Frontend Developer
                    </div>
                    <p className="mt-6 max-w-xl text-lg text-white leading-8 text-slate-400">
                        I build modern, responsive web applications using React, HTML, CSS, JavaScript, Tailwind CSS, PHP, MySQL, and SQL, 
                        while developing software projects in C, C++, C#, Java, and working with databases.
                    </p>

                    <div id='leftSide-buttons' className="flex gap-4 mt-8">

                        <a href="#contact" className="bg-blue-600 px-7 py-3 roundedx1 font-medium hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                            Contact Me</a>
                    </div>
                
                </motion.div>


                <motion.div id='rightSide'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center"
                    >
                    {/* Image */}
                    <img src={ profilePic } alt="Jonathan Scazzola" 
                    className="w-72 md:w-96 rounded-full border-4 border-blue-500 shadow-2xl"
                    />
                </motion.div>
            </div>

        </div>
    </section>
  );
}
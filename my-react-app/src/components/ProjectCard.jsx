export function ProjectCard({ project }) {

  return (
    <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:-translate-y-2 transition-all duration-300">

      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="text-slate-400 mt-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.technologies.map((tech) => (

            <span key={tech} className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>

          ))}

        </div>


        {/* Button */}
        <div className="flex gap-4 mt-6">
          <a href={project.github} target="_blank" className="px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600">
            GitHub
          </a>
        </div>


      </div>

    </div>
  );
}
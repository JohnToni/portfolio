import { projects } from "../data/projects";
import {ProjectCard} from "./ProjectCard";


export function Projects() {

  return (

    <section id="projects" className="py-24 bg-slate-900 text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          My Projects
        </h2>

        <p className="text-slate-400 text-center mt-4 mb-14">
          Some things I've worked on
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


          {projects.map((project) => (

            <ProjectCard
              key={project.title}
              project={project}
            />

          ))}

        </div>
      </div>
    </section>
  );
}
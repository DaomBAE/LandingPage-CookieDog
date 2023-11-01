import React from 'react';
import projectData from "../../projectData.json";
import ProjectCard from "../presentational/ProjectCard";

function Projects() {
  return (
    <div className="flex justify-center items-center w-full bg-neutral-900">
      <ul className="rounded-3xl mx-auto my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 p-8 w-full">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            title={project.title}
            desc={project.desc}
            image={project.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default Projects;

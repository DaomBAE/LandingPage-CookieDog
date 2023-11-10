import React from 'react';
import projectData from "../../projectData.json";
import ProjectCard from "../presentational/ProjectCard";

function Projects() {
  return (
    <div className="flex justify-center items-center w-full h-300 bg-black">
      <div className="rounded-3xl my-5 p-4 md:p-8 mx-auto w-full max-w-7xl"> 
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 justify-items-center px-4">
          {projectData.map((project, index) => (
            <li key={index} className="flex justify-center">
              <ProjectCard
                title={project.title}
                desc={project.desc}
                image={project.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;

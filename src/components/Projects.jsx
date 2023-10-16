import projectData from "../projectData.json";
import PriojectCard from "./PriojectCard";

function Projects() {
  return (
    <ul className="bg-gray-100 max-w-screen-xl rounded-3xl mx-5 my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 p-8">
      {projectData.map((v, i) => {
        return (
          <PriojectCard
            key={i}
            index={i}
            title={v.title}
            desc={v.desc}
            image={v.image}
          />
        );
      })}
    </ul>
  );
}

export default Projects;

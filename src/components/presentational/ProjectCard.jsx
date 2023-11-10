import { Link } from "react-router-dom";

function ProjectCard({ index, title, desc, image }) {
  const buttonBaseClass = "absolute bottom-0 right-0 mb-4 mr-4 px-4 py-2 rounded-xl text-black shadow-md transition duration-300 ease-in-out";
  const buttonPinkClass = "bg-pink-400 hover:bg-pink-500";

  return (
    <div className="relative bg-slate-800 bg-opacity-60 w-60 h-72 rounded-3xl shadow-xl">
      {/* Container for the image and overlay */}
      <div className="w-full h-2/3 rounded-t-3xl overflow-hidden relative">
        <img
          className="w-full h-full object-cover"
          src={`${process.env.PUBLIC_URL}/${image}`}
          alt="Project"
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-t-3xl">
          <span className="text-white text-2xl font-bold text-center">
            Coming<br/>Soon!
          </span>
        </div>
      </div>
      <div className="text-xl text-white font-bold mt-4 mx-4">{title}</div>
      <div className="mt-1 mx-4 text-white">{desc}</div>
      <Link to={`/projects/${index}?title=${title}&desc=${desc}&image=${image}`}>
        <button className={`${buttonBaseClass} ${buttonPinkClass}`}>
          View
        </button>
      </Link>
    </div>
  );
}

export default ProjectCard;




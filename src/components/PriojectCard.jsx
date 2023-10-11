import { Link } from "react-router-dom";

function PriojectCard({ index, title, desc, image }) {
  const colors = [
    "bg-green-500"
  ];

  return (
    <li className="relative bg-white w-60 h-72 rounded-xl shadow-lg">
      <div className="w-full h-1/2 rounded-t-xl">
        <img
          className="w-full h-full object-cover rounded-t-xl"
          src={`${process.env.PUBLIC_URL}/${image}`}
          alt="project"
        />
      </div>
      <div className="text-xl font-bold mt-2 mx-2">{title}</div>
      <div className="mt-2 mx-2">{desc}</div>
      <Link
        to={`/projects/${index}?title=${title}&desc=${desc}&image=${image}`}
      >
        <button
          className={`absolute bottom-0 right-0 m-4 px-4 py-2 rounded-md ${
            colors[index % colors.length]
          }`}
        >
          View
        </button>
      </Link>
    </li>
  );
}

export default PriojectCard;

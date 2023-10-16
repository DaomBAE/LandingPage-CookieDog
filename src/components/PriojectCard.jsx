import { Link } from "react-router-dom";

function PriojectCard({ index, title, desc, image }) {
  const colors = [
    "bg-gray-500"
  ];

  return (
    <li className="relative bg-white w-60 h-72 rounded-3xl shadow-xl">
      <div className="w-full h-2/3 rounded-t-xl">
        <img
          className="w-full h-full object-cover rounded-t-3xl"
          src={`${process.env.PUBLIC_URL}/${image}`}
          alt="project"
        />
      </div>
      <div className="text-xl font-bold mt-4 mx-4">{title}</div>
      <div className="mt-1 mx-4">{desc}</div>
      <Link
        to={`/projects/${index}?title=${title}&desc=${desc}&image=${image}`}
      >
        <button
          className={`absolute bottom-0 right-0 m-4 px-4 py-2 text-white rounded-full ${
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

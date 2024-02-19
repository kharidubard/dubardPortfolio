import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Example",
    date: "February 2024",
    description:
      "This project is a User Experience and Interface redesign of the National Park Service (NPS) App incorporating regional division.",
    image: "",
    link: "",
  },
  {
    id: 2,
    title: "Example",
    date: "January 2024",
    description:
      "A website for the Design and Code club at the University of Central Florida. I am lead designer for the site assisting with UI/UX design and front-end development.",
    image: "",
    link: "",
  },
  {
    id: 3,
    title: "Example",
    date: "May 2023",
    description:
      "A custom website that I have started creating for a future startup company. The site is functional but is still under development.",
    image: "",
    link: "",
  },
];

function DesignSection() {
  return (
    <>
      {/* Title */}
      <div className="text-center">
        <h1 className="text-[44px] font-semibold mb-20">My Designs</h1>
      </div>

      {/* Project Cards */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              className="hover:no-underline"
              rel="noreferrer"
            >
              <div className="bg-white rounded-lg overflow-hidden hover:drop-shadow-[0.1rem_0.1rem_15px_rgba(235,94,40,0.2)] hover:shadow-2xl">
                {/* Add your existing card content here */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-[14px] text-gray-600">{project.date}</p>
                  <h2 className="text-md font-semibold mt-2">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-gray-800">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
      <NavLink
								to="/contact"
								className="nav-link block lg:mt-0 text-primaryOrange text-[1.5rem] hover:text-primaryOrange mr-4 relative">
								View All Designs
                                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
								<span className="underline-animation"></span>
							</NavLink>
      </div>
    </>
  );
}

export default DesignSection;

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import DCLogoBlack from '../assets/projectFiles/DCLogoBlack.png';
import KhariRedesignMac from '../assets/projectFiles/designFiles/Khari RedesignMac.png';
import InternPageMockup from "../../src/assets/projectFiles/designFiles/intern_redesign_mockups.webp"

const projects = [
  {
    id: 1,
    title: "Design & Code Branding",
    date: "Fall 2023 - Spring 2024",
    description:
      "My designs and promotional material for the Design & Code club at the University of Central Florida.",
    image: DCLogoBlack,
    link: "/designs/DC_Branding",
  },
  {
    id: 2,
    title: "Limbitless Solutions Intern Page Redesign",
    date: "September 2023 - October 2023",
    description:
      "My redesign the Limbitless Solutions Internship Page.",
    image: InternPageMockup,
    link: "/designs/InternPageRedesign",
  },
  {
    id: 3,
    title: "Design & Code Website Page Designs",
    date: "Fall 2023",
    description: "A collection of page designs for the Design & Code website.",
    image: KhariRedesignMac,
    link: "/designs/DC_webdesigns",
  },
];

function DesignSection() {
  return (
    <>
      {/* Title */}
      <div className="px-6">
        <div className="text-center">
          <h1 className="text-[44px] text-white font-semibold mb-20">
            My Designs
          </h1>
        </div>

        {/* Project Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {projects.map((project) => (
              <NavLink
                key={project.id}
                to={project.link}
                className="hover:no-underline"
                rel="noreferrer"
              >
                <div className="bg-white transition duration-200 md:hover:scale-105 rounded-lg overflow-hidden hover:drop-shadow-[0.1rem_0.1rem_15px_rgba(235,94,40,0.7)] hover:shadow-2xl overflow-x-hidden">
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
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <NavLink
            to="/designs"
            className="nav-link block lg:mt-0 text-primaryOrange text-[1.5rem] hover:text-primaryOrange mr-4 relative"
          >
            View All Designs
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            <span className="underline-animation"></span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default DesignSection;


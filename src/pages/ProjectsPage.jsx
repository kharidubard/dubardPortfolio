import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import npsProjectCover from "../assets/projectFiles/npsProjectCover.png";
import DCHome from "../assets/projectFiles/DCHome.png";
import AliveLogo from "../assets/projectFiles/AliveLogo.jpg";
import WebsiteMockup from "../assets/projectFiles/hero_mockup_updated.webp";

const projects = [
  {
    id: 1,
    title: "National Park System App Pacific Northwest Division",
    date: "September 2023",
    description:
      "This project is a User Experience and Interface redesign of the National Park Service (NPS) App.",
    image: npsProjectCover,
    link: "/projects/NPS_PNW",
  },
  {
    id: 2,
    title: "Design & Code Website",
    date: "October 2023",
    description:
      "A website for the Design and Code club at the University of Central Florida. I served as lead designer for the site, assisting with UI/UX design and front-end development.",
    image: DCHome,
    link: "/projects/dcSite",
  },
  {
    id: 3,
    title: "Portfolio Website",
    date: "July 2024",
    description:
      "A redesign and development of my portfolio website involving an overhaul, focusing on improving the user experience, visual design, and functionality.",
    image: WebsiteMockup,
    link: "/projects/Portfolio",
  },
];

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-primaryDarkBrown">
      {/* Main Content */}
      <div className="flex-grow px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[32px] sm:text-[44px] font-semibold mt-10 mb-10 sm:mb-20 text-white">
            My Projects
          </h1>
        </div>

        {/* Project Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mb-8">
            {projects.map((project) => (
              <NavLink
                key={project.id}
                to={project.link}
                className="hover:no-underline"
                rel="noreferrer"
              >
                <div className="bg-white transition duration-200 md:hover:scale-105 rounded-lg overflow-hidden hover:drop-shadow-[0.1rem_0.1rem_15px_rgba(235,94,40,0.7)] hover:shadow-2xl">
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
      </div>

      {/* Footer */}
      <Footer className="mt-auto" />
    </div>
  );
}

export default Projects;

import React from 'react';
import Footer from "../components/Footer";

const projects = [
  {
    id: 1,
    title: "National Park System App Pacific Northwest Division",
    date: "February 2024",
    description:
      "This project is a User Experience and Interface redesign of the National Park Service (NPS) App incorporating regional division.",
    image: "src/assets/projectFiles/npsProjectCover.png",
    link: "/pages/projects/NPS_PNW",
  },
  {
    id: 2,
    title: "Design & Code Website",
    date: "January 2024",
    description:
      "A website for the Design and Code club at the University of Central Florida. I am lead designer for the site assisting with UI/UX design and front-end development.",
    image: "/src/assets/projectFiles/DCHome.png",
    link: "/pages/projects/dcSite",
  },
  {
    id: 3,
    title: "Alive IV Lounge",
    date: "May 2023",
    description:
      "A custom website that I have started creating for a future startup company. The site is functional but is still under development.",
    image: "src/assets/projectFiles/AliveLogo.jpg",
    link: "pages/projects/AliveIV",
  },
  // {
  //   id: 4,
  //   title: "Example",
  //   date: "Date",
  //   description:
  //     "This project is a User Experience and Interface redesign of the National Park Service (NPS) App incorporating regional division.",
  //   image: "src/assets/projectFiles/npsProjectCover.png",
  //   link: "https://www.figma.com/proto/e4uHt2eeN0YSs22dRAq3ZJ/Prototype?type=design&node-id=578-1120&t=20eGXt1nB0FweV2E-1&scaling=scale-down&page-id=249%3A70&starting-point-node-id=578%3A1120&mode=design",
  // },
];

function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-primaryDarkBrown">
      {/* Main Content */}
      <div className="flex-grow px-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[44px] font-semibold mt-10 mb-20 text-white">
            My Projects
          </h1>
        </div>

        {/* Project Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mb-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                className="hover:no-underline"
                rel="noreferrer"
              >
                <div className="bg-white rounded-lg overflow-hidden hover:drop-shadow-[0.1rem_0.1rem_15px_rgba(235,94,40,0.2)] hover:shadow-2xl">
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
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Projects;

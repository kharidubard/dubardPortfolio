import React from 'react';
import Footer from "../components/Footer";

const projects = [
    {
        id: 1,
        title: "Design & Code Branding",
        date: "Fall 2023 - Spring 2024",
        description:
          "My designs and promotional material for the Design & Code club at the University of Central Florida.",
        image: "src/assets/projectFiles/DCLogoBlack.png",
        link: "pages/designs/DC_Branding",
      },
      {
        id: 2,
        title: "Task Page",
        date: "August 2023",
        description:
          "A proposed redesign of the Limbitless Solutions tasking page on the team site.",
        image: "/src/assets/projectFiles/designFiles/TaskPageNew.webp",
        link: "pages/designs/Task_Page",
      },
      {
        id: 3,
        title: "Design & Code Website Page Designs",
        date: "Fall 2023",
        description: "A collection of page designs for the Design & Code website.",
        image: "/src/assets/projectFiles/designFiles/Khari RedesignMac.png",
        link: "pages/designs/DC_webdesigns",
      },
      // {
      //   id: 4,
      //   title: "Example",
      //   date: "May 2023",
      //   description:
      //     "",
      //   image: "",
      //   link: "",
      // },
];

function Designs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow">
        {/* Title */}
        <div className="bg-primaryDarkBrown mt-10 mb-10 px-10">
          <div className="text-center">
            <h1 className="text-[44px] font-semibold mb-20 text-white">My Designs</h1>
          </div>

          {/* Project Cards */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
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
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Designs;


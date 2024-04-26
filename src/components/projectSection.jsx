import { NavLink } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projects = [
  {
    id: 1,
    title: "National Park System App Pacific Northwest Division",
    date: "September 2023",
    description:
      "This project is a User Experience and Interface redesign of the National Park Service (NPS) App incorporating regional division.",
    image: "src/assets/projectFiles/npsProjectCover.png",
    link: "https://www.figma.com/proto/e4uHt2eeN0YSs22dRAq3ZJ/Prototype?type=design&node-id=578-1120&t=20eGXt1nB0FweV2E-1&scaling=scale-down&page-id=249%3A70&starting-point-node-id=578%3A1120&mode=design",
  },
  {
    id: 2,
    title: "Design & Code Website",
    date: "October 2023",
    description:
      "A website for the Design and Code club at the University of Central Florida. I am lead designer for the site assisting with UI/UX design and front-end development.",
    image: "src/assets/projectFiles/DCLogoBlack.png",
    link: "https://designandcodeucf.com/",
  },
  {
    id: 3,
    title: "Alive IV Lounge",
    date: "May 2023",
    description:
      "A custom website that I have started creating for a future startup company. The site is functional but is still under development.",
    image: "src/assets/projectFiles/AliveLogo.jpg",
    link: "https://kharidubard.github.io/ALIVE-IV-LOUNGE/",
  },
];

function ProjectSection() {
  return (
    <>
      {/* Title */}
      <div className="text-center">
        <h1 className="text-[44px] text-white font-semibold mb-20">My Projects</h1>
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
								to="/projects"
								className="nav-link block lg:mt-0 text-primaryOrange text-[1.5rem] hover:text-primaryOrange mr-4 relative">
								View All Projects
                                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
								<span className="underline-animation"></span>
							</NavLink>
      </div>
    </>
  );
}

export default ProjectSection;

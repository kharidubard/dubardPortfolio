import React from "react";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { FaFigma } from "react-icons/fa6";

import TaskPageNew from "../../assets/projectFiles/designFiles/TaskPageNew.webp";
import TaskPageHomeSS from "../../assets/projectFiles/designFiles/TaskPageHomeSS.webp";
import TaskPagePopUp from "../../assets/projectFiles/designFiles/TaskPagePopUp.webp";

function TaskPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-primaryDarkBrown min-h-screen">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="py-[30px]"></div>
        <div className="w-full md:max-w-[1200px] mx-auto gap-y-10 gap-x-10">
          <div className="flex justify-end">
            <div className="bg-primaryOrange text-white rounded-tl-lg rounded-tr-lg px-2 py-1 text-xs z-10">
              Design
            </div>
          </div>

          <div className="bg-primaryLightBiege text-black rounded-tl-md rounded-bl-md rounded-br-md flex flex-col md:flex-row md:shadow-[0px_5px_4px_rgba(0,0,0,0.2)]">
            {/* Left Column */}
            <div className="p-4 md:w-1/2 mt-4">
              {/* Content for the left column */}
              <h1 className="text-left text-[36px] mb-4 font-bold text-primaryDarkBrown">
                Task Page Redesign
              </h1>
              <h2 className="font-bold text-[24px]">Overview</h2>
              <p className="xs:text-[14px] md:text-[16px]">
                The Task Page Redesign project focuses on enhancing the user
                experience of the Limbitless Solutions tasking page through a
                proposed redesign. The goal is to streamline navigation, improve
                accessibility, and create a more intuitive interface that
                enhances user productivity and engagement.
              </p>
              <div className="mt-16">
                <h2 className="font-bold text-[24px]">Goal</h2>
                <p className="text-16 md:text-20">
                  {" "}
                  to transform the existing tasking page into a user-centric
                  design that prioritizes ease of use and functionality. This
                  involves conducting user research, refining information
                  architecture, and creating interactive prototypes to validate
                  design decisions. The redesigned interface aims to optimize
                  user workflows and elevate overall user satisfaction with the
                  platform.
                </p>
              </div>

              <div className="mt-16">
                <h2 className="font-bold text-[24px]">
                  My Role in this project
                </h2>
                <p className="text-16 md:text-20">UI/UX Designer</p>
              </div>
            </div>

            {/* Right Column Content */}
            <div className="p-4 px-8 md:w-1/2 mt-4">
              <img
                src={TaskPageNew}
                className="w-full h-auto rounded-md shadow-[0px_6px_4px_rgba(0,0,0,0.3)]"
                alt="Task Page New Design"
              />

              <div className="mt-8 flex flex-col md:flex-row">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.figma.com/proto/YBBtpdmfBaOtiAmQyLfEeZ?node-id=0-1&t=eDvNvuNKruYTYsL7-6"
                >
                  <button className="transition duration-200 hover:scale-105 text-white text-s bg-primaryOrange rounded-xl py-2 px-4 mb-4 md:mb-0 md:mr-4">
                    Figma Prototype
                  </button>
                </a>
              </div>

              {/* Tools Used Section */}

              <div className="mt-6">
                <h2 className="font-bold text-[24px] xs:text-[20px]">
                  Tool Used:
                </h2>
                <div className="grid grid-cols-3 gap-x-6 mt-4">
                  <div className="flex flex-col items-center">
                    <FaFigma
                      style={{
                        fontSize: "3rem",
                        color: "#000",
                        marginTop: "1rem",
                      }}
                    />
                    <p className="text-[16px] py-2 text-center">Figma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Row Layout */}
          {/* Mockups */}
          <div className="py-8">
            <h1 className="text-[28px] font-medium text-white">Design Process</h1>
          </div>
          <div className="bg-gray-200 w-full h-[560px]  rounded-md shadow-md">
              {/* Embedded Video */}
              <iframe
                src="https://youtube.com/embed/ZqKCruD9xjo"
                className="w-full h-full rounded-md"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded Video"
              ></iframe>
            </div>
            
          <div className="py-8">
            <h1 className="text-[28px] font-medium text-white">Mockups</h1>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="w-full rounded-md shadow-md">
              <img
                src={TaskPageHomeSS}
                className="sm:w-full sm:h-full object-contain rounded-md"
                alt="Task Page Home Screen"
              />
            </div>
            <div className="w-full rounded-md shadow-md">
              <img
                src={TaskPageNew}
                className="w-full h-full object-contain rounded-md"
                alt="Task Page New Design"
              />
            </div>
            <div className="w-full rounded-md shadow-md">
              <img
                src={TaskPagePopUp}
                className="w-full h-full object-contain rounded-md"
                alt="Task Page Pop Up"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default TaskPage;

import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import npsProjectCover from "../../assets/projectFiles/npsProjectCover.png";
import npsMockup1 from "../../assets/projectFiles/npsMockups/NPS-PNW-Mockups-1.webp";
import npsMockup2 from "../../assets/projectFiles/npsMockups/NPS-PNW-Mockups-2.webp";
import npsMockup3 from "../../assets/projectFiles/npsMockups/NPS-PNW-Mockups-3.webp";
import { FaFigma } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { SiAdobeillustrator } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

function NPS_PNW() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-primaryDarkBrown min-h-screen">
      <div className="container mx-auto px-0 sm:px-6 lg:px-8">
        <div className="py-[30px]"></div>
        <div className="w-full md:max-w-[1200px] mx-auto gap-y-10 gap-x-10">
          <div className="flex justify-end">
            <div className="bg-primaryOrange text-white rounded-tl-lg rounded-tr-lg px-2 py-1 text-xs z-10">
              Mobile App
            </div>
          </div>

          <div className="bg-primaryLightBiege text-black rounded-tl-md rounded-bl-md rounded-br-md flex flex-col md:flex-row md:shadow-[0px_5px_4px_rgba(0,0,0,0.2)]">
            {/* Left Column */}
            <div className="p-4 md:w-1/2 mt-4">
              {/* Content for the left column */}
              <h1 className="text-left text-[36px] mb-4 font-bold text-primaryDarkBrown">
                National Park Service: Pacific Northwest
              </h1>
              <h2 className="font-bold text-[24px]">Overview</h2>
              <p className="xs:text-[14px] md:text-[16px]">
                The National Park Service: Pacific Northwest app is a
                comprehensive mobile tool designed to facilitate exploration of
                the diverse national parks in the region. With a primary
                emphasis on functionality, usability, and engagement, the app
                aims to immerse users in their park experiences. Its features
                include park discovery, live updates, and access to essential
                information. The project prioritized accessibility of
                information, ensuring all users, regardless of ability or
                technical proficiency, can navigate the app easily. Design
                elements such as high contrast and readable fonts were also
                incorporated, along with multiple pathways for task completion
                to accommodate varying levels of expertise.
              </p>
              <div className="mt-4">
                <h2 className="font-bold text-[24px]">Achievements</h2>
                <p className="text-16 md:text-20">
                  Selected for and showcased at the{" "}
                  <a
                    href="https://communication.ucf.edu/digital-media-students-make-an-impression-during-showcase/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primaryOrange font-semibold hover:underline"
                  >
                    Nicholson School of Communication and Media Web Design
                    Showcase.
                  </a>
                </p>
              </div>

              <div className="mt-4">
                <h2 className="font-bold text-[24px]">
                  My Role in this project
                </h2>
                <p className="text-16 md:text-20">
                  UI/UX Designer
                  <br />
                  Full Stack Developer
                </p>
              </div>
              <div className="mt-4">
                <h2 className="font-bold text-[24px]">Team Size</h2>
                <p className="text-16 md:text-20">5 Members</p>
              </div>
            </div>

            {/* Right Column Content */}
            <div className="p-4 md:w-1/2 mt-4">
              <img
                src={npsProjectCover}
                className="w-full h-auto rounded-md shadow-[0px_10px_4px_rgba(0,0,0,0.5)]"
                alt="NPS PNW Project Cover"
              />

              <div className="mt-8 flex flex-col md:flex-row">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.figma.com/proto/e4uHt2eeN0YSs22dRAq3ZJ/Prototype?node-id=578-1120&t=X9x8E6vJYOcPiRab-1&scaling=scale-down&content-scaling=responsive&page-id=249%3A70&starting-point-node-id=578%3A1120"
                >
                  <button className="transition duration-200 hover:scale-105 text-white text-s bg-primaryOrange rounded-xl py-2 px-4 mb-4 md:mb-0 md:mr-4">
                    Figma Prototype
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.figma.com/proto/e4uHt2eeN0YSs22dRAq3ZJ/Prototype?node-id=1147-1653&t=S4vQIdRPsuk2hlal-1&scaling=scale-down&content-scaling=fixed&page-id=1110%3A2178&starting-point-node-id=1147%3A1653"
                >
                  <button className="transition duration-200 hover:scale-105 text-white text-s bg-primaryOrange rounded-xl py-2 px-4">
                    Style Guide
                  </button>
                </a>
              </div>

              {/* Tools Used Section  */}
              <div className="mt-6 ">
                <h2 className="font-bold text-[24px] xs:text-[20px]">
                  Tools, Programs, and Languages Used:
                </h2>
                <div className="grid grid-cols-3 gap-x-6">
                  <div className="">
                    <FaFigma
                      style={{
                        fontSize: "3rem",
                        color: "#000",
                        marginTop: "1rem",
                      }}
                    />
                    <p className="text-[16px] py-2">Figma</p>
                  </div>

                  <div className="">
                    <SiAdobeillustrator
                      style={{
                        fontSize: "3rem",
                        color: "#000",
                        marginTop: "1rem",
                      }}
                    />
                    <p className="text-[16px] py-2 mr-">
                      Adobe <br />
                      Illustrator
                    </p>
                  </div>
                  <div className="">
                    <VscVscode
                      style={{
                        fontSize: "3rem",
                        color: "#000",
                        marginTop: "1rem",
                      }}
                    />
                    <p className="text-[16px] py-2">
                      Visual Studio <br /> Code
                    </p>
                  </div>

                  <div className="">
                    <TbBrandReactNative
                      style={{
                        fontSize: "3rem",
                        color: "#000",
                        marginTop: "1rem",
                      }}
                    />
                    <p className="text-[16px] py-2">
                      React <br /> Native
                    </p>
                  </div>
                  <div className="">
                    <FaGithub
                      style={{
                        fontSize: "3rem",
                        color: "#000",
                        marginTop: "1rem",
                      }}
                    />
                    <p className="text-[16px] py-2">
                      GitHub
                    </p>
                  </div>
                  <div className="">
                  <IoLogoFirebase
                      style={{
                        fontSize: "3rem",
                        color: "#000",
                        marginTop: "1rem",
                      }}
                    />
                    <p className="text-[16px] py-2">
                      Firebase
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-8">
            <h1 className="text-[28px] font-medium text-white">
              App Walkthrough
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="bg-gray-200 w-full h-[560px] rounded-md shadow-md">
              {/* Embedded Video */}
              <iframe
                src="https://www.youtube.com/embed/p4DC5M7nXEc"
                className="w-full h-full rounded-md"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded Video"
              ></iframe>
            </div>
          </div>

          <div className="py-8">
            <h1 className="text-[28px] font-medium text-white">Mockups</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="w-full h-[750px] rounded-md shadow-md">
              {/* First Image */}
              <img
                src={npsMockup2}
                className="w-full h-full object-contain rounded-md"
                alt="NPS App Mockup"
              />
            </div>
            <div className="w-full h-[750px] rounded-md shadow-md">
              {/* Second Image */}
              <img
                src={npsMockup1}
                className="w-full h-full object-contain rounded-md"
                alt="NPS App Mockup"
              />
            </div>
            <div className="w-full h-[750px] rounded-md shadow-md">
              {/* Third Image */}
              <img
                src={npsMockup3}
                className="w-full h-full object-contain rounded-md"
                alt="NPS App Mockup"
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

export default NPS_PNW;

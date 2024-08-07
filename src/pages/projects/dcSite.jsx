import React from "react";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import DCHome from "../../assets/projectFiles/DCHome.png";
import { FaFigma } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaJira } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";

function DCSite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-primaryDarkBrown">
      <div className="container mx-auto px-0 sm:px-6 lg:px-8">
        <div className="p-[30px]"></div>
        <div className="w-full md:max-w-[1200px] mx-auto gap-y-10 gap-x-10">
          <div className="flex justify-end">
            <div className="bg-primaryOrange text-white rounded-tl-lg rounded-tr-lg px-2 py-1 text-xs z-10">
              Website
            </div>
          </div>

          <div className="bg-primaryLightBiege text-black rounded-tl-md rounded-bl-md rounded-br-md flex flex-col md:flex-row md:shadow-[0px_5px_4px_rgba(0,0,0,0.2)]">
            {/* Left Column */}
            <div className="p-4 md:w-1/2 mt-4">
              {/* Content for the left column */}
              <h1 className="text-left text-[36px] mb-4 font-bold text-primaryDarkBrown">
                Design & Code Website
              </h1>
              <h2 className="font-bold text-[24px]">Overview</h2>
              <p className="xs:text-[14px] md:text-[16px]">
                A website for the Design and Code club at the University of
                Central Florida. I served as the lead designer for the site
                assisting with UI/UX design and front-end development.
              </p>

              <div className="mt-8">
                <h2 className="font-bold text-[24px]">Goal</h2>
                <p className="text-16 md:text-20">
                  The goal for this site is to offer insight to what the club
                  has to offer and how to become a member.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="font-bold text-[24px]">
                  My Role in this project
                </h2>
                <p className="text-16 md:text-20">
                  Lead Designer
                  <br />
                  Front-End Web Developer
                </p>
              </div>

              <div className="mt-4">
                <h2 className="font-bold text-[24px]">Team Size</h2>
                <p className="text-16 md:text-20">4 Members</p>
              </div>
            </div>

            {/* Right Column Content */}
            <div className="p-4 md:w-1/2 mt-4">
              <img
                src={DCHome}
                className="w-full h-auto rounded-md shadow-[0px_6px_4px_rgba(0,0,0,0.3)]"
                alt="Design & Code Website Home Page"
              />

              <div className="mt-8 flex flex-col md:flex-row">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://designandcodeucf.com/"
                >
                  <button className="transition duration-200 hover:scale-105 text-white text-s bg-primaryOrange rounded-xl py-2 px-4 mb-4 md:mb-0 md:mr-4">
                    Link to website
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.figma.com/file/k33Rg2VkeGLI5NGqc3SvTx/Design-%26-Code-Website?type=design&node-id=0%3A1&mode=design&t=ey1d54VHEa0CVxms-1"
                >
                  <button className="transition duration-200 hover:scale-105 text-white text-s bg-primaryOrange rounded-xl py-2 px-4">
                    Figma Files
                  </button>
                </a>
              </div>
              
              {/* Tools Used Section */}
              <div className="mt-6">
                <h2 className="font-bold text-[24px] xs:text-[20px]">
                  Tools, Programs, and Languages Used:
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

                  <div className="flex flex-col items-center">
                    <VscVscode
                      style={{
                        fontSize: "3rem",
                        color: "#000",
                        marginTop: "1rem",
                      }}
                    />
                    <p className="text-[16px] py-2 text-center">
                      Visual Studio <br /> Code
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <FaReact
                      style={{
                        fontSize: "3rem",
                        color: "#000",
                        marginTop: "1rem",
                      }}
                    />
                    <p className="text-[16px] py-2 text-center">React</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <FaGithub
                      style={{
                        fontSize: "3rem",
                        color: "#000",
                        marginTop: "1rem",
                      }}
                    />
                    <p className="text-[16px] py-2 text-center">GitHub</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <FaJira
                      style={{
                        fontSize: "3rem",
                        color: "#000",
                        marginTop: "1rem",
                      }}
                    />
                    <p className="text-[16px] py-2 text-center">Jira</p>
                  </div>
                </div>
              </div>
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

export default DCSite;

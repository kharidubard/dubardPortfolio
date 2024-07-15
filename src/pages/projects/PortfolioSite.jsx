import React from "react";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import HeroMac from "../../assets/projectFiles/hero_MacMockup.png";
import mobileSS from "../../assets/projectFiles/mobileSS_Mockup.png";
import { FaFigma } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";

function PortfolioSite() {
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
                Portfolio Website
              </h1>
              <h2 className="font-bold text-[24px]">Overview</h2>
              <p className="xs:text-[14px] md:text-[16px]">
                A redesign and development of my portfolio website. The process
                involved an overhaul, focusing on improving the user experience,
                visual design, and functionality. I redesigned and developed
                this portfolio website from scratch to showcase my projects,
                designs, and other works more effectively. This custom portfolio
                website serves as a central hub for all my professional work,
                demonstrating my web development and UI/UX design skills through
                a intuitive and engaging user interface.
              </p>

              <div className="mt-8">
                <h2 className="font-bold text-[24px]">Goal</h2>
                <p className="text-16 md:text-20">
                  Showcase my expertise in web development and UI/UX design
                  through a visually appealing and user-friendly portfolio that
                  highlights my projects, designs, and professional achievements
                  effectively.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="font-bold text-[24px]">
                  My Role in this project
                </h2>
                <p className="text-16 md:text-20">
                  UI/UX Designer
                  <br />
                  Web Developer
                </p>
              </div>

              <div className="mt-4">
                <h2 className="font-bold text-[24px]">Team Size</h2>
                <p className="text-16 md:text-20">1 Member</p>
              </div>
            </div>

            {/* Right Column Content */}
            <div className="p-4 px-8 md:w-1/2 mt-4">
              <img
                src={HeroMac}
                className="w-full h-auto rounded-md shadow-[0px_6px_4px_rgba(0,0,0,0.3)]"
                alt="Alive Website Home Page"
              />

              <img
                src={mobileSS}
                className="w-full h-auto rounded-md shadow-[0px_6px_4px_rgba(0,0,0,0.3)] mt-5"
                alt="Alive IV Lounge Logo"
              />

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
export default PortfolioSite;

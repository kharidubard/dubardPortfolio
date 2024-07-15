import React from "react";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import KhariRedesignMac from "../../assets/projectFiles/designFiles/Khari RedesignMac.png";
import KhariAboutRedesign from "../../assets/projectFiles/designFiles/KhariAboutRedesign.webp";
import ContactPageWeb from "../../assets/projectFiles/designFiles/Contact Page-Web.webp";
import MembershipPageWeb from "../../assets/projectFiles/designFiles/MembershipPage-Web.webp";
import { FaFigma } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaJira } from "react-icons/fa";

function DC_Web() {
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
              Designs
            </div>
          </div>

          <div className="bg-primaryLightBiege text-black rounded-tl-md rounded-bl-md rounded-br-md flex flex-col md:flex-row md:shadow-[0px_5px_4px_rgba(0,0,0,0.2)]">
            {/* Left Column */}
            <div className="p-4 md:w-1/2 mt-4">
              {/* Content for the left column */}
              <h1 className="text-left text-[36px] mb-4 font-bold text-primaryDarkBrown">
                Design & Code Website Page Designs
              </h1>
              <h2 className="font-bold text-[24px]">Overview</h2>
              <p className="xs:text-[14px] md:text-[16px]">
                A collection of Figma page designs for the Design & Code
                website. These designs were developed but unimplemented on to
                the website.
              </p>

              <div className="mt-16">
                <h2 className="font-bold text-[24px]">Goal</h2>
                <p className="text-16 md:text-20">
                  The goal of this project was to design new pages for the Design & Code
                  website to better showcase our club's offerings and engage
                  with our audience more effectively. This includes the
                  creation of new pages such as an About Us page, providing
                  insights into our club and its members. Additionally, a
                  Membership page was designed to outline membership benefits
                  and opportunities, encouraging new sign-ups and fostering
                  community participation. Lastly, a Contact page was developed
                  to facilitate easier communication with our club through
                  integrated social media links and contact information.
                </p>
              </div>
              <div className="mt-16">
                <h2 className="font-bold text-[24px]">
                  My Role in this project
                </h2>
                <p className="text-16 md:text-20">
                  UI/UX Designer
                  <br />
                  Front-End Developer
                </p>
              </div>
            </div>

            {/* Right Column Content */}
            <div className="p-4 px-8 md:w-1/2 mt-4">
              <img
                src={KhariRedesignMac}
                className="w-full h-auto rounded-md shadow-[0px_6px_4px_rgba(0,0,0,0.3)]"
                alt="Design & Code About Page Figma Design"
              />

              <div className="mt-8 flex flex-col md:flex-row">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.figma.com/design/k33Rg2VkeGLI5NGqc3SvTx/Design-%26-Code-Website?node-id=567-2&t=PA825dKSmXZHinBA-1"
                >
                  <button className="transition duration-200 hover:scale-105 text-white text-s bg-primaryOrange rounded-xl py-2 px-4 mb-4 md:mb-0 md:mr-4">
                    Figma File
                  </button>
                </a>
              </div>
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

          {/* Grid Row Layout */}
          {/* About Page Design */}
          <div className="py-8">
            <h1 className="text-[28px] font-medium text-white">
              About Page Design
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full h-full rounded-md shadow-md">
              <img
                src={KhariAboutRedesign}
                className="w-full h-full object-contain rounded-md"
                alt="Design & Code About Page Figma Design"
              />
            </div>
          </div>

          {/* Contact Page Design */}
          <div className="py-8">
            <h1 className="text-[28px] font-medium text-white">
              Contact Page Design
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full h-full rounded-md shadow-md">
              <img
                src={ContactPageWeb}
                className="w-full h-full object-cover rounded-md"
                alt="Design & Code Contact Page Figma Design"
              />
            </div>
          </div>

          {/* Membership Page Design */}
          <div className="py-8">
            <h1 className="text-[28px] font-medium text-white">
              Membership Page Design
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full h-full rounded-md shadow-md">
              <img
                src={MembershipPageWeb}
                className="w-full h-full object-cover rounded-md"
                alt="Design & Code Membership Page Figma Design"
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

export default DC_Web;

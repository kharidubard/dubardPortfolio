import React from "react";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import InternPageMockup from "../../assets/projectFiles/designFiles/intern_redesign_mockups.webp"
import HowToApply from "../../assets/projectFiles/designFiles/howToApply_TeamBreakdown.webp"
import { FaFigma } from "react-icons/fa6";


function InternPage() {
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
                Limbitless Solutions Intern Page Redesign
              </h1>
              <h2 className="font-bold text-[24px]">Overview</h2>
              <p className="xs:text-[14px] md:text-[16px]">
                In this project, I redesigned the Limbitless Solutions
                Internship Page to provide clear and comprehensive information
                for prospective interns. The redesigned page highlights the
                various positions available, details the two distinct levels of
                positions, outlines the application process, and showcases the
                diverse teams that make up the program. 
              </p>

              <div className="mt-16">
                <h2 className="font-bold text-[24px]">Goal</h2>
                <p className="text-16 md:text-20">
                  The main goals of the redesign were to clearly outline the
                  various internship positions offered by Limbitless Solutions,
                  differentiate between the two levels of positions with
                  detailed role descriptions, simplify the application process
                  with a step-by-step guide, highlight the diverse team
                  structure within the program, and showcase the representation
                  of various UCF colleges to encourage interdisciplinary
                  participation.
                </p>
              </div>
              <div className="mt-16">
                <h2 className="font-bold text-[24px]">
                  My Role in this project
                </h2>
                <p className="text-16 md:text-20">
                  UI/UX Designer
                  <br />
                  UX Researcher
                </p>
              </div>
            </div>

            {/* Right Column Content */}
            <div className="p-4 px-8 md:w-1/2 mt-4">
              <img
                src={InternPageMockup}
                className="w-full h-auto rounded-md shadow-[0px_6px_4px_rgba(0,0,0,0.3)]"
                alt="Design & Code About Page Figma Design"
              />
               <img
                src={HowToApply}
                className="mt-4 w-full h-auto rounded-md shadow-[0px_6px_4px_rgba(0,0,0,0.3)]"
                alt="Design & Code About Page Figma Design"
              />

              <div className="mt-8 flex flex-col md:flex-row">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.figma.com/design/Ely4eW2Q1aRAVNSO2sbMO5/Join-Our-Team-Page-(Design-File)?node-id=0-1&t=anaS8lOT3eyG3Nsa-1"
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
                </div>
              </div>
            </div>
          </div>

          {/* Grid Row Layout */}
          
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default InternPage;

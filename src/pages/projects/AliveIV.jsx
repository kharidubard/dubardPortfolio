import React from "react";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import AliveIVHome from "../../assets/projectFiles/AliveIVHome.png";
import AliveLogo from "../../assets/projectFiles/AliveLogo.jpg";

function AliveIV() {
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
                Alive IV Lounge
              </h1>
              <h2 className="font-bold text-[24px]">Overview</h2>
              <p className="xs:text-[14px] md:text-[16px]">
                A website design for a potential IV Lounge company. The project
                scope included creating key pages such as the home page, about
                page, services page, products page, and contact page. The goal
                was to design a visually appealing and user-friendly website
                that effectively promotes IV therapy services and related
                products while maintaining a clean and healthy aesthetic. The
                website is not fully complete and is merely a design and lacks
                full functionality.
              </p>

              <div className="mt-8">
                <h2 className="font-bold text-[24px]">Goal</h2>
                <p className="text-16 md:text-20">
                  The site was a proposed design for a potential IV Lounge
                  company.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="font-bold text-[24px]">
                  My Role in this project
                </h2>
                <p className="text-16 md:text-20">
                  Designer
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
                src={AliveIVHome}
                className="w-full h-auto rounded-md shadow-[0px_10px_4px_rgba(0,0,0,0.5)]"
                alt="Alive Website Home Page"
              />

              <img
                src={AliveLogo}
                className="w-full h-auto rounded-md shadow-[0px_10px_4px_rgba(0,0,0,0.5)] mt-5"
                alt="Alive IV Lounge Logo"
              />

              <div className="mt-8 flex flex-col md:flex-row">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://kharidubard.github.io/ALIVE-IV-LOUNGE/"
                >
                  <button className="transition duration-200 hover:scale-105 text-white text-s bg-primaryOrange rounded-xl py-2 px-4 mb-4 md:mb-0 md:mr-4">
                    Link to website
                  </button>
                </a>
                {/* <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.figma.com/file/k33Rg2VkeGLI5NGqc3SvTx/Design-%26-Code-Website?type=design&node-id=0%3A1&mode=design&t=ey1d54VHEa0CVxms-1"
              >
                <button className="transition duration-200 hover:scale-105 text-white text-s bg-primaryOrange rounded-xl py-2 px-4">
                  Figma Files
                </button>
              </a> */}
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
export default AliveIV;

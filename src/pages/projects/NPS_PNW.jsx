import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUtensils,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer";

function NPS_PNW() {
  return (
    <div className="bg-primaryDarkBrown">
      <div className="p-[30px]"></div>
      <div className="w-full md:max-w-[1200px] mx-auto gap-y-10 gap-x-10">
      
      <div className="flex justify-end">
  <div className="bg-primaryOrange text-white rounded-tl-lg rounded-tr-lg px-2 py-1 text-xs z-10">
    Mobile App
  </div>
</div>

        <div className="bg-primaryLightBiege text-black rounded-tl-md rounded-bl-md rounded-br-md flex flex-col md:flex-row md:shadow-[0px_5px_4px_rgba(0,0,0,0.2)]">
          {/* Left Column */}
          <div className="p-4 px-8 md:w-1/2 mt-4">
            {/* Content for the left column */}
            <h1 className="text-left text-[36px] mb-4 font-bold text-primaryDarkBrown">
              National Park Service: Pacific Northwest
            </h1>
            <h2 className="font-bold text-[24px]">Overview</h2>
            <p className="xs:text-[14px] md:text-[16px]">
              The National Park Service: Pacific Northwest app is a
              comprehensive mobile tool designed to facilitate exploration of
              the diverse national parks in the region. With a primary emphasis
              on functionality, usability, and engagement, the app aims to
              immerse users in their park experiences. Its features include park
              discovery, live updates, and access to essential information. The
              project prioritized accessibility of information, ensuring all
              users, regardless of ability or technical proficiency, can
              navigate the app easily. Design elements such as high contrast and
              readable fonts were also incorporated, along with multiple
              pathways for task completion to accommodate varying levels of
              expertise.
            </p>

            <div className="mt-16">
              <h2 className="font-bold text-[24px]">My Role in this project</h2>
              <p className="text-16 md:text-20">
                UI/UX Designer
                <br />
                Full Stack Developer
              </p>
            </div>
            <div className="mt-4">
              <h2 className="font-bold text-[24px]">Team Size</h2>
              <p className="text-16 md:text-20">
                5 Members
              </p>
            </div>
          </div>

          {/* Right Column Content */}
          <div className="p-4 px-8 md:w-1/2 mt-4">

            <img
              src="/src\assets\projectFiles\npsProjectCover.png"
              className="w-full h-auto rounded-md shadow-[0px_10px_4px_rgba(0,0,0,0.5)]"
              alt="NPS PNW Project Cover"
            />

            <div className="mt-8 flex flex-col md:flex-row">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/khari-dubard-b90ba2248/">
            <button className="transition duration-200 hover:scale-105 text-white text-s bg-primaryOrange rounded-xl py-2 px-4 mb-4 md:mb-0 md:mr-4">
              Figma Prototype
            </button>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1ZeJz13SMJnYZyWHPRH7ANosq5xtI2f2M/view?usp=sharing">
            <button className="transition duration-200 hover:scale-105 text-white text-s bg-primaryOrange rounded-xl py-2 px-4">
              Style Guide
            </button>
          </a>
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

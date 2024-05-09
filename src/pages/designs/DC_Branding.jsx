import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUtensils,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer";

function DCBrand() {
  return (
    <div className="bg-primaryDarkBrown">
      <div className="p-[30px]"></div>
      <div className="w-full md:max-w-[1200px] mx-auto gap-y-10 gap-x-10">
        <div className="flex justify-end">
          <div className="bg-primaryOrange text-white rounded-tl-lg rounded-tr-lg px-2 py-1 text-xs z-10">
            Branding
          </div>
        </div>

        <div className="bg-primaryLightBiege text-black rounded-tl-md rounded-bl-md rounded-br-md flex flex-col md:flex-row md:shadow-[0px_5px_4px_rgba(0,0,0,0.2)]">
          {/* Left Column */}
          <div className="p-4 px-8 md:w-1/2 mt-4">
            {/* Content for the left column */}
            <h1 className="text-left text-[36px] mb-4 font-bold text-primaryDarkBrown">
              Design & Code Branding and Promotional Materials
            </h1>
            <h2 className="font-bold text-[24px]">Overview</h2>
            <p className="xs:text-[14px] md:text-[16px]">
              As Marketing Coordinator for the Design & Code club at UCF, I've
              designed a plethora of promotional materials and products. From
              the club logo to t-shirts here is a showcase of some of the items
              I created for the club.
            </p>
          </div>

          {/* Right Column Content */}
          <div className="p-4 px-8 md:w-1/2 mt-4">
            <img
              src="/src\assets\projectFiles\DCLogoBlack.png"
              className="w-full h-auto rounded-md shadow-[0px_10px_4px_rgba(0,0,0,0.5)]"
              alt="NPS PNW Project Cover"
            />
          </div>
        </div>

        {/* Grid Row Layout */}
        {/* Merch */}
        <div className="py-8">
          <h1 className="text-[28px] font-medium text-white">Merch and Promotional Products</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-200 h-[300px] rounded-md shadow-md">
            {/* First Image */}
            <img
              src="/src\assets\projectFiles\brandingFiles\"
              className="w-full h-full object-cover rounded-md"
              alt="Image 1"
            />
          </div>
          <div className="bg-gray-200 h-[300px] rounded-md shadow-md">
            {/* Second Image */}
            <img
              src="/src\assets\projectFiles\image2.jpg"
              className="w-full h-full object-cover rounded-md"
              alt="Image 2"
            />
          </div>
          <div className="bg-gray-200 h-[300px] rounded-md shadow-md">
            {/* Third Image */}
            <img
              src="/src\assets\projectFiles\image3.jpg"
              className="w-full h-full object-cover rounded-md"
              alt="Image 3"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-gray-200 h-[300px] rounded-md shadow-md">
            {/* First Image */}
            <img
              src="/src\assets\projectFiles\brandingFiles\"
              className="w-full h-full object-cover rounded-md"
              alt="Image 1"
            />
          </div>
          <div className="bg-gray-200 h-[300px] rounded-md shadow-md">
            {/* Second Image */}
            <img
              src="/src\assets\projectFiles\image2.jpg"
              className="w-full h-full object-cover rounded-md"
              alt="Image 2"
            />
          </div>
          <div className="bg-gray-200 h-[300px] rounded-md shadow-md">
            {/* Third Image */}
            <img
              src="/src\assets\projectFiles\image3.jpg"
              className="w-full h-full object-cover rounded-md"
              alt="Image 3"
            />
          </div>
        </div>

        {/*Flyer Designs*/}

        <div className="py-8">
          <h1 className="text-[28px] font-medium text-white">Flyers</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-200 h-[300px] rounded-md shadow-md">
            {/* First Image */}
            <img
              src="/src\assets\projectFiles\brandingFiles\"
              className="w-full h-full object-cover rounded-md"
              alt="Image 1"
            />
          </div>
          <div className="bg-gray-200 h-[300px] rounded-md shadow-md">
            {/* Second Image */}
            <img
              src="/src\assets\projectFiles\image2.jpg"
              className="w-full h-full object-cover rounded-md"
              alt="Image 2"
            />
          </div>
          <div className="bg-gray-200 h-[300px] rounded-md shadow-md">
            {/* Third Image */}
            <img
              src="/src\assets\projectFiles\image3.jpg"
              className="w-full h-full object-cover rounded-md"
              alt="Image 3"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-gray-200 h-[300px] rounded-md shadow-md">
            {/* First Image */}
            <img
              src="/src\assets\projectFiles\brandingFiles\"
              className="w-full h-full object-cover rounded-md"
              alt="Image 1"
            />
          </div>
          <div className="bg-gray-200 h-[300px] rounded-md shadow-md">
            {/* Second Image */}
            <img
              src="/src\assets\projectFiles\image2.jpg"
              className="w-full h-full object-cover rounded-md"
              alt="Image 2"
            />
          </div>
          <div className="bg-gray-200 h-[300px] rounded-md shadow-md">
            {/* Third Image */}
            <img
              src="/src\assets\projectFiles\image3.jpg"
              className="w-full h-full object-cover rounded-md"
              alt="Image 3"
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default DCBrand;

import React from "react";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import DCLogoBlack from "../../assets/projectFiles/DCLogoBlack.png";
import DCShirtsInstagramPost from "../../assets/projectFiles/brandingFiles/dcBranding/Design & Code Shirts - Instagram Post.webp";
import NavyBlueShirt from "../../assets/projectFiles/brandingFiles/dcBranding/Navy-Blue.webp";
import HowtoAceYourInterview from "../../assets/projectFiles/brandingFiles/dcBranding/HowtoAceYourInterview.webp";
import FigmaWorkshop from "../../assets/projectFiles/brandingFiles/dcBranding/FigmaWorkshop.webp";
import FrozenYogurtSocial from "../../assets/projectFiles/brandingFiles/dcBranding/FrozenYogurtSocial.webp";
import GameKnight from "../../assets/projectFiles/brandingFiles/dcBranding/GameKnight.webp";
import JavaScriptWorkshop from "../../assets/projectFiles/brandingFiles/dcBranding/JavaScriptWorkshop.webp";

function DCBrand() {
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
              Branding & Designs
            </div>
          </div>

          <div className="bg-primaryLightBiege text-black rounded-tl-md rounded-bl-md rounded-br-md flex flex-col md:flex-row md:shadow-[0px_5px_4px_rgba(0,0,0,0.2)]">
            {/* Left Column */}
            <div className="p-4 md:w-1/2 mt-4">
              {/* Content for the left column */}
              <h1 className="text-left text-[36px] mb-4 font-bold text-primaryDarkBrown">
                Design & Code Branding and Promotional Materials
              </h1>
              <h2 className="font-bold text-[24px]">Overview</h2>
              <p className="xs:text-[14px] md:text-[16px]">
                As Marketing Coordinator for the Design & Code club at UCF, I've
                designed a plethora of promotional materials and products. From
                the club logo to t-shirts here is a showcase of some of the
                items I created for the club.
              </p>
            </div>

            {/* Right Column Content */}
            <div className="p-4 px-8 md:w-1/2 mt-4">
              <img
                src={DCLogoBlack}
                className="w-full h-auto rounded-md shadow-[0px_10px_4px_rgba(0,0,0,0.5)]"
                alt="Design & Code Logo"
              />
            </div>
          </div>

          {/* Grid Row Layout */}
          {/* Merch */}
          <div className="py-8">
            <h1 className="text-[28px] font-medium text-white">
              Merch and Promotional Products
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-gray-200 w-full h-[360px] rounded-md shadow-md">
              {/* First Image */}
              <img
                src={DCShirtsInstagramPost}
                className="w-full h-full object-contain rounded-md"
                alt="Design & Code Shirts - Instagram Post"
              />
            </div>
            <div className="bg-gray-200 w-full h-[360px] rounded-md shadow-md">
              {/* Second Image */}
              <img
                src={NavyBlueShirt}
                className="w-full h-full object-cover rounded-md"
                alt="Navy Blue Design & Code Shirt Design Front and Back"
              />
            </div>
            <div className="bg-gray-200 w-full h-[360px] rounded-md shadow-md">
              {/* Embedded Video */}
              <iframe
                src="https://youtube.com/embed/Y6H4EGDD7-E?feature=share"
                className="w-full h-full rounded-md"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded Video"
              ></iframe>
            </div>
          </div>

          {/* Flyer Designs */}
          <div className="py-8">
            <h1 className="text-[28px] font-medium text-white">Flyers</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-200 w-full h-[360px] rounded-md shadow-md">
              {/* First Image */}
              <img
                src={HowtoAceYourInterview}
                className="w-full h-full object-contain rounded-md"
                alt="How to Ace Your Interview Flyer"
              />
            </div>
            <div className="bg-gray-200 w-full h-[360px] rounded-md shadow-md">
              {/* Second Image */}
              <img
                src={FigmaWorkshop}
                className="w-full h-full object-contain rounded-md"
                alt="Figma Workshop Flyer"
              />
            </div>
            <div className="bg-gray-200 w-full h-[360px] rounded-md shadow-md">
              {/* Third Image */}
              <img
                src={FrozenYogurtSocial}
                className="w-full h-full object-contain rounded-md"
                alt="Frozen Yogurt Social Flyer"
              />
            </div>
            <div className="bg-gray-200 w-full h-[360px] rounded-md shadow-md">
              {/* Fourth Image */}
              <img
                src={GameKnight}
                className="w-full h-full object-contain rounded-md"
                alt="Game Knight Flyer"
              />
            </div>
            <div className="bg-gray-200 w-full h-[360px] rounded-md shadow-md">
              {/* Fifth Image */}
              <img
                src={JavaScriptWorkshop}
                className="w-full h-full object-contain rounded-md"
                alt="JavaScript Workshop Flyer"
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

export default DCBrand;


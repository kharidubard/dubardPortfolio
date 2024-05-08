import { Component } from "react";
import React, { useState } from "react";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="App">
      <div className="text-white flex flex-col items-center justify-center mb-4">
        <div className=" relative flex flex-col flex-none justify-center content-center h-[120px] max-w-[473px] mt-10">
          <h1 className=" flex flex-col text-center text-[44px] font-bold">
            Contact Me
          </h1>
        </div>
        <div className="relative flex flex-col flex-none justify-center content-center h-[156px] md:w-[632px] xs:w-[398px]">
          <p className="text-center md:text-[18px] xs:text-[18px] font-regular xs:p-[25px]">
            Feel free to reach out to me for any inquiries or collaborations.
            Whether you have a project in mind, want to discuss opportunities,
            or just want to say hello, I'd love to hear from you!
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 w-[650px] md:w-[650px] xs:w-[350px] m-auto gap-y-[10px] gap-x-[10px] xs:grid xs:grid-cols-1 mb-40">
        {/* Instagram social box*/}
        <div className="bg-primaryLightBiege  text-black rounded-[18px] text-[16px]  shadow-inner hover:shadow-[#101010] hover:brightness-[0.7]">
          <a
            href="https://www.instagram.com/designandcodeucf/"
            rel="noreferrer"
            target="_blank"
          >
            <div className=" flex flex-row items-center ">
              <svg
                className="h-auto w-[35px] pt-[20px] mr-[11.7px] ml-[25px] "
                fill="#EB5E28"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="pt-[27.3px] font-semibold">LinkedIn</span>
            </div>
            <p className="text-left mt-[10px] ml-[30px] mb-[14px]">
              Connect With Me On LinkedIn .
            </p>
          </a>
        </div>

        {/* Instagram social box*/}
        <div className="bg-primaryLightBiege  text-black rounded-[18px] text-[16px]  shadow-inner hover:shadow-[#101010] hover:brightness-[0.7]">
          <a
            href="https://www.instagram.com/designandcodeucf/"
            rel="noreferrer"
            target="_blank"
          >
            <div className=" flex flex-row items-center ">
              <svg
                className="h-auto w-[35px] pt-[20px] mr-[11.7px] ml-[25px] "
                fill="#EB5E28"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="pt-[27.3px] font-semibold">Instagram</span>
            </div>
            <p className="text-left mt-[10px] ml-[30px] mb-[14px]">
              Check Me Out On Instagram.
            </p>
          </a>
        </div>

        {/* Mail social box*/}
        <div className="bg-primaryLightBiege text-black rounded-[18px] text-[16px] shadow-inner hover:shadow-[#101010] hover:brightness-[0.7]">
          <a
            href="mailto:kharidubard@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="  "
          >
            <div className=" flex flex-row items-center ">
              <svg
                className="h-auto w-[35px] text-[#EB5E28] pt-[20px] mr-[11.7px] ml-[25px] "
                fill="currentColor"
                viewBox="0 0 31 28"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M27.9 0L3.1 0C1.395 0 0.0155 1.42083 0.0155 3.15741L0 22.1019C0 23.8384 1.395 25.2593 3.1 25.2593H27.9C29.605 25.2593 31 23.8384 31 22.1019V3.15741C31 1.42083 29.605 0 27.9 0ZM27.9 6.31482L15.5 14.2083L3.1 6.31482V3.15741L15.5 11.0509L27.9 3.15741V6.31482Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="pt-[27.3px] font-semibold">Email</span>
            </div>
            <p className="text-left mt-[10px] ml-[30px] mb-[14px]">
              Feek Free to Reach Out Via Emaill
            </p>
          </a>
        </div>

        {/* KnightsConnect social box*/}
        <div className="bg-primaryLightBiege  text-black rounded-[18px] text-[16px]  shadow-inner hover:shadow-[#101010] hover:brightness-[0.7]">
          <a
            href="https://www.instagram.com/designandcodeucf/"
            rel="noreferrer"
            target="_blank"
          >
            <div className=" flex flex-row items-center ">
              <svg
                className="h-auto w-[35px] pt-[20px] mr-[11.7px] ml-[25px] "
                fill="#EB5E28"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="pt-[27.3px] font-semibold">GitHub</span>
            </div>
            <p className="text-left mt-[10px] ml-[30px] mb-[14px]">
              Check out my GitHub.
            </p>
          </a>
        </div>
      </div>

      {/* Address & Location*/}
      {/* <div className="flex flex-col items-center justify-center">
        <div className="h-[156px] max-w-[632px] flex flex-col items-center justify-center text-white rounded-[18px] text-[16px]   hover:shadow-[#101010] hover:brightness-[0.7]">
          <a
            href="https://maps.app.goo.gl/9ZajUbmRADzmoBnz8"
            rel="noreferrer"
            target="_blank"
            className="  "
          >
            <div className="flex flex-row items-center ">
              <svg
                width="26"
                height="32"
                viewBox="0 0 26 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 12.6667C25 19.11 19.6274 31 13 31C6.37258 31 1 19.11 1 12.6667C1 6.22334 6.37258 1 13 1C19.6274 1 25 6.22334 25 12.6667Z"
                  stroke="white"
                  stroke-width="1.5"
                />
                <ellipse
                  cx="13"
                  cy="11"
                  rx="5.14286"
                  ry="5"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>

              <span className="text-[20px] pt-[16px] font-semibold pl-[24px]">
                The University of Central Florida
              </span>
              
            </div>
            <span className="text-[20px] pt-[16px]font-semibold pl-[48px]">
                Orlando, FL
              </span>
          </a>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src="src\assets\Design and Code Full Logo (White Text).png"
            width={250}
          ></img>
        </div>
      </div> */}
    </div>
  );
}

export default Contact;

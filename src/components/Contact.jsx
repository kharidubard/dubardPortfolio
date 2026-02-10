

function Contact() {
  return (
    <div className="App">
      <div className="text-white flex flex-col items-center justify-center mb-4">
        <div className=" relative flex flex-col flex-none justify-center content-center h-[120px] max-w-[473px] mt-10">
          <h1 className=" flex flex-col text-center text-[44px] font-bold">
            Contact Me
          </h1>
        </div>
        <div className="relative flex flex-col flex-none justify-center content-center h-auto md:w-[632px] xs:w-[398px]">
          <p className="text-center md:text-[20px] xs:text-[20px] font-regular xs:p-[25px]">
            Where to find me & get in touch:
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 w-[650px] md:w-[650px] xs:w-[350px] m-auto gap-y-[20px] gap-x-[20px] xs:grid xs:grid-cols-1 mb-40">
        {/* LnkedIn social box*/}
        <div className="bg-primaryLightBiege  text-black rounded-[18px] text-[16px] transition duration-200 md:hover:scale-105 hover:drop-shadow-[0.1rem_0.1rem_5px_rgba(235,94,40,0.7)] hover:shadow-lg">
          <a
            href="https://www.linkedin.com/in/khari-dubard-b90ba2248/"
            rel="noreferrer"
            target="_blank"
            title="Opens LinkedIn in a new tab"
          >
            <div className=" flex flex-row items-center ">
              <svg
                className="h-auto w-[35px] pt-[20px] mr-[11.7px] ml-[25px] "
                fill="#EB5E28"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M21 4.32353V19.6765C21 20.0275 20.8606 20.3641 20.6123 20.6123C20.3641 20.8606 20.0275 21 19.6765 21H4.32353C3.97251 21 3.63586 20.8606 3.38765 20.6123C3.13944 20.3641 3 20.0275 3 19.6765V4.32353C3 3.97251 3.13944 3.63586 3.38765 3.38765C3.63586 3.13944 3.97251 3 4.32353 3H19.6765C20.0275 3 20.3641 3.13944 20.6123 3.38765C20.8606 3.63586 21 3.97251 21 4.32353V4.32353ZM8.29412 9.88235H5.64706V18.3529H8.29412V9.88235ZM8.53235 6.97059C8.53375 6.77036 8.49569 6.57182 8.42035 6.3863C8.34502 6.20078 8.23387 6.03191 8.09328 5.88935C7.95268 5.74678 7.78537 5.6333 7.60091 5.5554C7.41646 5.47749 7.21846 5.43668 7.01824 5.43529H6.97059C6.5634 5.43529 6.1729 5.59705 5.88497 5.88497C5.59705 6.1729 5.43529 6.5634 5.43529 6.97059C5.43529 7.37777 5.59705 7.76828 5.88497 8.05621C6.1729 8.34413 6.5634 8.50588 6.97059 8.50588V8.50588C7.17083 8.51081 7.37008 8.47623 7.55696 8.40413C7.74383 8.33202 7.91467 8.2238 8.0597 8.08565C8.20474 7.94749 8.32113 7.78212 8.40223 7.59897C8.48333 7.41582 8.52755 7.21848 8.53235 7.01824V6.97059ZM18.3529 13.2071C18.3529 10.6606 16.7329 9.67059 15.1235 9.67059C14.5966 9.6442 14.0719 9.75644 13.6019 9.9961C13.1318 10.2358 12.7328 10.5945 12.4447 11.0365H12.3706V9.88235H9.88235V18.3529H12.5294V13.8476C12.4911 13.3862 12.6365 12.9283 12.9339 12.5735C13.2313 12.2186 13.6567 11.9954 14.1176 11.9524H14.2182C15.06 11.9524 15.6847 12.4818 15.6847 13.8159V18.3529H18.3318L18.3529 13.2071Z"
                  fill="#EB5E28"
                />
              </svg>
              <span className="pt-[27.3px] font-semibold">LinkedIn</span>
            </div>
            <p className="text-left mt-[10px] ml-[30px] mb-[14px]">
              Connect With Me On LinkedIn.
            </p>
          </a>
        </div>

        {/* Instagram social box*/}
        {/* <div className="bg-primaryLightBiege  text-black rounded-[18px] text-[16px]  transition duration-200 md:hover:scale-105 hover:drop-shadow-[0.1rem_0.1rem_5px_rgba(235,94,40,0.7)] hover:shadow-lg">
          <a
            href="https://www.instagram.com/kharidubard/"
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
        </div> */}

        {/* Mail social box*/}
        <div className="bg-primaryLightBiege text-black rounded-[18px] text-[16px] transition duration-200 md:hover:scale-105 hover:drop-shadow-[0.1rem_0.1rem_5px_rgba(235,94,40,0.7)] hover:shadow-lg">
          <a
            href="mailto:kharidubard@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="  "
            title="Send an email to Khari DuBard"
          >
            <div className=" flex flex-row items-center ">
              <svg
                className="h-auto w-[35px] text-[#EB5E28] pt-[20px] mr-[11.7px] ml-[25px] "
                fill="currentColor"
                viewBox="0 0 36 24"
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
              Feel Free to Reach Out Via Email.
            </p>
          </a>
        </div>

        {/* Github box*/}
        <div className="bg-primaryLightBiege  text-black rounded-[18px] text-[16px]  transition duration-200 md:hover:scale-105 hover:drop-shadow-[0.1rem_0.1rem_5px_rgba(235,94,40,0.7)] hover:shadow-lg">
          <a
            href="https://github.com/kharidubard"
            rel="noreferrer"
            target="_blank"
            title="Opens GitHub in a new tab"
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
                  clipRule="evenodd"
                  d="M12 2.24658C6.475 2.24658 2 6.72158 2 12.2466C2 16.6716 4.8625 20.4091 8.8375 21.7341C9.3375 21.8216 9.525 21.5216 9.525 21.2591C9.525 21.0216 9.5125 20.2341 9.5125 19.3966C7 19.8591 6.35 18.7841 6.15 18.2216C6.0375 17.9341 5.55 17.0466 5.125 16.8091C4.775 16.6216 4.275 16.1591 5.1125 16.1466C5.9 16.1341 6.4625 16.8716 6.65 17.1716C7.55 18.6841 8.9875 18.2591 9.5625 17.9966C9.65 17.3466 9.9125 16.9091 10.2 16.6591C7.975 16.4091 5.65 15.5466 5.65 11.7216C5.65 10.6341 6.0375 9.73408 6.675 9.03408C6.575 8.78408 6.225 7.75908 6.775 6.38408C6.775 6.38408 7.6125 6.12158 9.525 7.40908C10.325 7.18408 11.175 7.07158 12.025 7.07158C12.875 7.07158 13.725 7.18408 14.525 7.40908C16.4375 6.10908 17.275 6.38408 17.275 6.38408C17.825 7.75908 17.475 8.78408 17.375 9.03408C18.0125 9.73408 18.4 10.6216 18.4 11.7216C18.4 15.5591 16.0625 16.4091 13.8375 16.6591C14.2 16.9716 14.5125 17.5716 14.5125 18.5091C14.5125 19.8466 14.5 20.9216 14.5 21.2591C14.5 21.5216 14.6875 21.8341 15.1875 21.7341C17.1727 21.0639 18.8977 19.7881 20.1198 18.0861C21.3419 16.3842 21.9995 14.3418 22 12.2466C22 6.72158 17.525 2.24658 12 2.24658Z"
                  fill="#EB5E28"
                />
              </svg>
              <span className="pt-[27.3px] font-semibold">GitHub</span>
            </div>
            <p className="text-left mt-[10px] ml-[30px] mb-[14px]">
              Check out my GitHub.
            </p>
          </a>
        </div>

        {/* YouTube*/}
        <div className="bg-primaryLightBiege  text-black rounded-[18px] text-[16px]  transition duration-200 md:hover:scale-105 hover:drop-shadow-[0.1rem_0.1rem_5px_rgba(235,94,40,0.7)] hover:shadow-lg">
          <a
            href="https://www.youtube.com/@EarBlessingss"
            rel="noreferrer"
            target="_blank"
            title="Opens YouTube in a new tab"
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
                  clipRule="evenodd"
                  d="M19.792 5.41471C20.6521 5.64577 21.3325 6.32614 21.5635 7.18621C21.9872 8.75232 22 12.0001 22 12.0001C22 12.0001 22 15.2607 21.5764 16.8139C21.3453 17.674 20.665 18.3544 19.8049 18.5854C18.2516 19.0091 12 19.0091 12 19.0091C12 19.0091 5.74839 19.0091 4.19512 18.5854C3.33504 18.3544 2.65469 17.674 2.42362 16.8139C2 15.2478 2 12.0001 2 12.0001C2 12.0001 2 8.75232 2.41078 7.19905C2.64185 6.33897 3.32221 5.65861 4.18229 5.42755C5.73556 5.00392 11.9872 4.99109 11.9872 4.99109C11.9872 4.99109 18.2388 4.99109 19.792 5.41471ZM15.1836 12.0001L9.99743 15.0039V8.99623L15.1836 12.0001Z"
                  fill="EB5E28"
                />
              </svg>
              <span className="pt-[27.3px] font-semibold">YouTube</span>
            </div>
            <p className="text-left mt-[10px] ml-[30px] mb-[14px]">
              My YouTube Channel.
            </p>
          </a>
        </div>
      </div>

      {/* Address & Location*/}
    </div>
  );
}

export default Contact;

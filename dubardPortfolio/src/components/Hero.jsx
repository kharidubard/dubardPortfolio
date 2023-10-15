function Hero() {
    return (
        <>
          <section className="relative flex flex-col flex-none flex-nowrap overflow-visible content-center items-center justify-center h-min w-full ">
            {/* hero inner */}
            <div className="relative flex flex-col flex-none flex-nowrap content-center overflow-visible items-center justify-center py-0 px-8 h-min max-w-[50rem] w-full">
              {/* heading & cta */}
              <div className="z-2 relative flex flex-col flex-none flex-nowrap content-center overflow-visible items-center justify-center h-min max-w-[44.8rem] w-full">
                <div className="relative flex flex-col flex-none flex-nowrap items-center justify-center gap-4 overflow-hidden h-min w-full">
                  <div className="relative flex flex-col flex-none shrink-0	break-words whitespace-pre-wrap justify-start h-auto w-full">
                    <h1 className="z-10 text-[white] text-center text-lg font-bold">
                      Hi, I'm <br />
                      <span className="text-[#ffffff]">Khari DuBard</span>
                    </h1>
                  </div>
                  <div className="relative flex flex-col flex-none shrink-0	break-words whitespace-pre-wrap justify-start h-auto w-full">
                    <p className="text-white  text-md text-center font-medium">
                    UI/UX Designer and Front-End Web Developer with a strong commitment to inclusivity, innovation, and cutting-edge design.{" "}
                    </p>
                  </div>
                </div>
    
                {/* <div className="flex items-center justify-center gap-10 h-min-content overflow-hidden relative w-min-content"> */}
                <a href="https://knightconnect.campuslabs.com/engage/organization/designandcode">
                  <button className="transition duration-200 hover:scale-105 text-md bg-white font-bold rounded-xl py-4 px-4 mt-8">
                    Contact
                  </button>
                </a>
                <a href="https://knightconnect.campuslabs.com/engage/organization/designandcode">
                  <button className="transition duration-200 hover:scale-105 text-md bg-white font-bold rounded-xl py-4 px-4 mt-8">
                    My Resume
                  </button>
                </a>
                {/* </div> */}
              </div>
            </div>
          </section>
        </>
      );
    }
    export default Hero

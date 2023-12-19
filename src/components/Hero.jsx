import { Star } from "./HeroMotionEffect";

function Hero() {
  return (
    <>
      <div className="px-[50px] flex">
        {/* Left Column */}
        <div className="flex-1 p-4">
          {/* Content for the left column */}
          <h2 className="text-lg mb-2">Hello! I'm</h2>
          <h2 className="text-[4.2rem] font-semibold">Khari</h2>
          <h2 className="text-[4.2rem] font-semibold pl-[58px] mb-2">DuBard</h2>
          <p className="text-[1.2rem] pl-[58px]">
            Web Developer | UI/UX Designer
          </p>
          <a href="https://knightconnect.campuslabs.com/engage/organization/designandcode">
            <button className="transition duration-200 hover:scale-105 text-white text-md bg-primaryOrange rounded-xl py-2 px-4 mt-8 mr-2">
              Contact Me
            </button>
          </a>
          <a href="https://knightconnect.campuslabs.com/engage/organization/designandcode">
            <button className="transition duration-200 hover:scale-105 text-white text-md bg-primaryOrange rounded-xl py-2 px-4 mt-8">
              My Resume
            </button>
          </a>
        </div>

        <Star
            hex="#FACC15"
            width={52}
            position="-left-[.4rem] -top-[1.6rem]"
            delay={5}
            rotate={[10, -10]}
          />

          
        {/* Right Column */}
        <div className="flex-1 justify-center items-center">
          {/* Content for the right column */}
          <img
            src="src\assets\headshot1square.jpg"
            className="h-[384px w-[384px] rounded-full shadow-[0px_10px_4px_rgba(0,0,0,0.5)] "
          />
          <h2 className="text-lg font-semibold mb-2"></h2>
          <p></p>
        </div>
      </div>
    </>
  );
}
export default Hero;

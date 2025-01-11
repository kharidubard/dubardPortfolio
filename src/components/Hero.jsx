import { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import headshot1square from '../../src/assets/khariHeadshot_23.webp';
import { NavLink } from "react-router-dom";
import ScrollingIcons from "./ScrollingIcons";

function Hero() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  useEffect(() => {
    // Additional setup or actions on component mount can be placed here
  }, []);
  
  return (
    <div className="bg-gradient-to-r overflow-x-hidden">
      <animated.div 
        style={fadeIn} 
        className="container mx-auto flex flex-col md:flex-row max-w-screen-lg" // Adjusted max width for the container
      >
        {/* Left Column */}
        <div className="flex-1 p-4 md:p-6 text-white pl-2 md:pl-16"> {/* Adjusted padding here */}
          <h2 className="text-lg mb-4 sm:px-12 py-1  overflow-y-hidden">Hello! I&apos;m</h2>
          <h2 className="text-lg font-semibold sm:px-8 py-1 overflow-y-hidden">Khari</h2>
          <h2 className="text-lg font-semibold sm:px-12 mb-1 py-1  overflow-y-hidden">DuBard</h2>
          <p className="text-md md:text-base sm:px-12 md:pl-16">Web Developer <br /> UI/UX Designer</p>
          <div className="sm:pl-12 mt-6 flex flex-col md:flex-row">
            <NavLink to="/contact">
              <button className="transition duration-200 hover:scale-105 text-white text-[20px] bg-primaryOrange rounded-xl py-2 px-4 mb-4 md:mb-0 md:mr-4">
                Contact Me
              </button>
            </NavLink>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://drive.google.com/file/d/1SB9lL8gtnJ9aheSCGDBOP7K1Pc56RN9h/view?usp=sharing"
            >
              <button className="transition duration-200 hover:scale-105 text-white text-[20px] bg-primaryOrange rounded-xl py-2 px-4">
                My Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={headshot1square}
            className="h-56 w-56 md:h-96 md:w-96 rounded-full shadow-lg object-contain" // Adjusted sizes
            alt="Khari DuBard Profile Picture"
          />
        </div>
      </animated.div>

      {/* Scrolling Icons */}
      <div className="xs:hidden lg:block mt-6"> {/* Added margin-top for spacing */}
        <ScrollingIcons />
      </div>
    </div>
  );
}

export default Hero;

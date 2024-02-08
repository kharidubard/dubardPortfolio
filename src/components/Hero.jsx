import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

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
    <>
      <animated.div style={fadeIn} className="px-[50px] flex bg-gradient-to-r ">
        <div className="flex  bg-gradient-to-r ">
          {/* Left Column */}
          <div className="flex-1 p-4">
            {/* Content for the left column */}
            <h2 className="text-lg mb-2">Hello! I'm</h2>
            <h2 className="text-[4.2rem] font-semibold">Khari</h2>
            <h2 className="text-[4.2rem] font-semibold pl-[58px] mb-2">
              DuBard
            </h2>
            <p className="text-[1.2rem] pl-[58px]">
              Web Developer | UI/UX Designer
            </p>
            <a target="blank" href="https://www.linkedin.com/in/khari-dubard-b90ba2248/">
              <button className="transition duration-200 hover:scale-105 text-white text-md bg-primaryOrange rounded-xl py-2 px-4 mt-8 mr-2">
                Contact Me
              </button>
            </a>
            <a target="blank" href="https://docs.google.com/document/d/1gw3sIqi1cULHrWO2MN5zlwJk7p5wIPfTjvfdcrL9Lr4/edit?usp=sharing">
              <button className="transition duration-200 hover:scale-105 text-white text-md bg-primaryOrange rounded-xl py-2 px-4 mt-8">
                My Resume
              </button>
            </a>
          </div>

          

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
      </animated.div>
    </>
  );
}
export default Hero;

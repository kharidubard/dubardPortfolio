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
    <animated.div style={fadeIn} className="px-4 md:px-8 lg:px-16 flex flex-col md:flex-row bg-gradient-to-r ">
      {/* Left Column */}
      <div className="flex-1 p-4 md:p-8">
        {/* Content for the left column */}
        <h2 className="text-lg mb-5">Hello! I&apos;m</h2>
        <h2 className="text-lg font-semibold">Khari</h2>
        <h2 className="text-lg font-semibold mb-2 md:pl-14">DuBard</h2>
        <p className="text-md md:text-base md:pl-14">Web Developer | UI/UX Designer</p>
        <div className="mt-8 flex flex-col md:flex-row">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/khari-dubard-b90ba2248/">
            <button className="transition duration-200 hover:scale-105 text-white text-md bg-primaryOrange rounded-xl py-2 px-4 mb-4 md:mb-0 md:mr-4">
              Contact Me
            </button>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1ZeJz13SMJnYZyWHPRH7ANosq5xtI2f2M/view?usp=sharing">
            <button className="transition duration-200 hover:scale-105 text-white text-md bg-primaryOrange rounded-xl py-2 px-4">
              My Resume
            </button>
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex justify-center items-center">
        {/* Content for the right column */}
        <img
  src="src\assets\headshot1square.jpg"
  className="h-64 w-64 md:h-[384px] md:w-[384px] rounded-full shadow-lg object-cover"
  alt="Profile"
/>

      </div>
    </animated.div>
  </>
);
}
export default Hero;

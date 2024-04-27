import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faRunning } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from "react-spring";


function About() {

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <>
      <animated.div style={fadeIn}>
      <div className="w-full md:max-w-[1200px] mx-auto gap-y-10 gap-x-10">
        
        <div className="bg-primaryLightBiege text-black rounded-md text-16 flex flex-col md:flex-row md:shadow-[0px_5px_4px_rgba(0,0,0,0.2)]">
          {/* Left Column */}
          <div className="p-4 md:w-1/2">
            {/* Content for the left column */}
            <img
              src="src\assets\KhariInVegasResized.jpg"
              className="w-full h-auto rounded-md shadow-[0px_10px_4px_rgba(0,0,0,0.5)]"
              alt="Profile"
            />
          </div>

          {/* Right Column Text */}
          <div className="p-4 md:w-1/2">
            <p className="text-left md:text-[24px] mb-4 font-bold text-primaryOrange">
              A bit about me...
            </p>
            <p className="xs:text-[16px]  md:text-[18px]">
              Highly motivated UI/UX Designer and Front-End Web Developer with a
              strong commitment to inclusivity, innovation, and cutting-edge
              design. Demonstrated success in transforming digital experiences
              and driving engagement through empathetic, user-centered design.
              Adept at collaborating with multidisciplinary teams, implementing
              accessibility standards, and delivering fully responsive web
              applications.
            </p>

            <div className="mt-4">
              <p className="text-20 xs:text-[20px] md:text-[24px] font-semibold text-primaryOrange">Bio:</p>
              <div className='p-1'></div>
              <p className="xs:text-[16px] md:text-[18px]">
                <b><FontAwesomeIcon icon={faHome} /> Hometown:</b> Orlando, FL
                <br />
                <div className='p-1'></div>
                <b><FontAwesomeIcon icon={faUtensils} /> Favorite Meal:</b> Salmon with a side of Mashed Potatoes and Broccoli.
                <br />
                <div className='p-1'></div>
                <b><FontAwesomeIcon icon={faRunning} /> Free Time Activities:</b> Playing sports, video games and learning geography.
              </p>
            </div>
          </div>
        </div>
      </div>
      </animated.div>
      </>
  );
}

export default About;

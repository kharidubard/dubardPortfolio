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
            <p className="text-left text-24 md:text-28 mb-4 font-bold text-primaryOrange">
              A bit about me...
            </p>
            <p className="text-20 md:text-24">
              Highly motivated UI/UX Designer and Front-End Web Developer with a
              strong commitment to inclusivity, innovation, and cutting-edge
              design. Demonstrated success in transforming digital experiences
              and driving engagement through empathetic, user-centered design.
              Adept at collaborating with multidisciplinary teams, implementing
              accessibility standards, and delivering fully responsive web
              applications.
            </p>

            <div className="mt-4">
              <p className="text-20 md:text-24 font-semibold text-primaryOrange">Bio:</p>
              <p className="text-16 md:text-20">
                <b><FontAwesomeIcon icon={faHome} /> Hometown:</b> Orlando, FL
                <br />
                <b><FontAwesomeIcon icon={faUtensils} /> Favorite Meal:</b> Salmon with a side of Mashed Potatoes and Broccoli.
                <br />
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

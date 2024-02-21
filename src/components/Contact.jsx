import {
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaPhone,
} from "react-icons/fa";

function ContactMe() {
  return (
    <div className="App py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <h2 className="text-[34px] md:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6 flex items-center justify-center">
           
            Contact Me 
            <FaPhone className="text-primaryOrange ml-2"/>
          </h2>

          <div className="flex flex-col items-center mt-6 space-y-4">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-primaryOrange" />
              <a
                href="mailto:kharidubard@gmail.com"
                target="_blank"
                className="text-gray-500 font-bold hover:text-gray-800 text-md"
              >
                Email
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaLinkedin className="text-primaryOrange" />
              <a
                href="https://www.linkedin.com/in/khari-dubard-b90ba2248/"
                target="_blank"
                className="text-gray-500 font-bold hover:text-gray-800 text-md"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaInstagram className="text-primaryOrange" />
              <a
                href="https://www.instagram.com/kharidubard/"
                target="_blank"
                className=" text-gray-500 font-bold hover:text-gray-800 text-md"
              >
                Instagram
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaGithub className="text-primaryOrange" />
              <a
                href="https://github.com/kharidubard"
                target="_blank"
                className="text-gray-500 font-bold hover:text-primaryDarkBrown text-md"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;

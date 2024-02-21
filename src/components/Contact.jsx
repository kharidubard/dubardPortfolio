import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

function ContactMe() {
  return (
    <div className="App py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <h2 className="text-[34px] md:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6">
            Contact Me
          </h2>
         
          <div className="flex flex-col items-center mt-6 space-y-4">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-600" />
              <a href="mailto:your-email@example.com" className="text-gray-600 hover:text-gray-800">
                Email
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaLinkedin className="text-gray-600" />
              <a href="https://www.linkedin.com/in/your-linkedin" className="text-gray-600 hover:text-gray-800">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaInstagram className="text-gray-600" />
              <a href="https://www.instagram.com/your-instagram" className="text-gray-600 hover:text-gray-800">
                Instagram
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaGithub className="text-gray-600" />
              <a href="https://github.com/your-github" className="text-gray-600 hover:text-gray-800">
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



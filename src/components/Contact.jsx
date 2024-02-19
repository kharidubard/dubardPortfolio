function ContactMe() {
  return (
    <div className="App py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <h2 className="text-[34px] md:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6">
            Contact Me
          </h2>
         
          <div className="flex justify-center mt-6 space-x-4">
            <a href="mailto:your-email@example.com" className="text-gray-600 hover:text-gray-800">
              Email
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin" className="text-gray-600 hover:text-gray-800">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/your-instagram" className="text-gray-600 hover:text-gray-800">
              Instagram
            </a>
            <a href="https://github.com/your-github" className="text-gray-600 hover:text-gray-800">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;


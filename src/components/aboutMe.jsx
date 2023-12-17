function About() {
  return (
    <div className="App">
      <div className="w-[650px] md:w-[1200px] md:h-[400px] xs:w-[350px] m-auto gap-y-[10px] gap-x-[10px] xs:grid xs:grid-cols-1">
        {/* Instagram social box*/}
        <div className="bg-[#252422] text-white rounded-md text-[16px] flex flex-col">
          <div className="px-[50px] flex">
            {/* Left Column */}
            <div className="flex-1 p-4">
              {/* Content for the left column */}
              <img
                src="src\assets\headshot1.jpg"
                className="h-[256px w-[256px] ml-[100px] mt-[50px] rounded-md shadow-[0px_10px_4px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* Right Column */}
            <div className="flex-1 justify-center items-center">
              <p className="text-left mt-[50px] mb-[14px] font-bold text-primaryOrange">
                A bit about me.
              </p>
              <p>
                Highly motivated UI/UX Designer and Front-End Web Developer with
                a strong commitment to inclusivity, innovation, and cutting-edge
                design. Demonstrated success in transforming digital experiences
                and driving engagement through empathetic, user-centered design.
                Adept at collaborating with multidisciplinary teams,
                implementing accessibility standards, and delivering fully
                responsive web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

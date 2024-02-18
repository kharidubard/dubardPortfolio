function About() {
  return (
    <div className="App">
      <div className="w-full md:max-w-[1200px] mx-auto gap-y-10 gap-x-10">
        {/* Instagram social box*/}
        <div className="bg-[#252422] text-white rounded-md text-16 flex flex-col md:flex-row md:shadow-[0px_10px_4px_rgba(0,0,0,0.5)]">
          {/* Left Column (Image) */}
          <div className="p-4 md:w-1/2">
            {/* Content for the left column */}
            <img
              src="src\assets\KhariInVegasResized.jpg"
              className="w-full h-auto rounded-md shadow-[0px_10px_4px_rgba(0,0,0,0.5)]"
              alt="Profile"
            />
          </div>

          {/* Right Column (Text) */}
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
                Hometown: Orlando, FL
                <br />
                Favorite Meal: Salmon with a side Mashed Potatoes and Broccoli
                <br />
                Free Time Activities: Playing Sports, Vi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

import ContactMe from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/aboutMe.jsx";
import DesignSection from "../components/designsSection.jsx";
import ProjectSection from "../components/projectSection.jsx";

function App() {
  return (
    <div className="App bg-primaryDarkBrown">
      <main className=" mb-[8rem] box-border m-0 p-0 relative flex flex-col flex-none flex-nowrap overflow-visible overflow-x-hidden content-center items-center justify-center h-min w-full">
        <div className=" flex flex-col gap-[4rem]">
          <Hero />
        </div>
      </main>
      <About />
      <div className="mb-[8rem]"></div>
      <ProjectSection />
      <div className="mb-[4rem]"></div>
      <DesignSection />
      <ContactMe />
      <div className="mb-[8rem]"></div>
      <Footer />
    </div>
  );
}

export default App;

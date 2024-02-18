import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import About from "../components/aboutMe.jsx";
import ProjectSection from "../components/projectSection.jsx";

function App() {
  return (
    <div className="App">
      <main className=" mb-[8rem] mt-[1rem] box-border m-0 p-0 relative flex flex-col flex-none flex-nowrap overflow-visible content-center items-center justify-center h-min w-full">
        <div className=" flex flex-col gap-[4rem]">
          <Hero />
        </div>
      </main>
      <About />
      <div className="mb-[20rem]"></div>
      <ProjectSection />
    </div>
  );
}

export default App;

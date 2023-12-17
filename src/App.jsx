import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className="mt-[1rem] box-border m-0 p-0">
        <div className=" flex flex-col gap-[4rem]">
          <Hero />
        </div>
      </main>
    </div>
  );
}

export default App;

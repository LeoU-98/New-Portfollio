import "./App.css";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Footer from "./Contact/Footer";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className=" overflow-x-hidden text-stone-300 antialiased  ">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <div className="relative h-full w-full bg-black [&>div]:absolute [&>div]:left-0 [&>div]:right-0 [&>div]:top-[-10%] [&>div]:h-[1000px] [&>div]:w-[1000px] [&>div]:rounded-full [&>div]:bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]">
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-8 bg-black/30 rounded-2xl ">
        <Toaster />
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

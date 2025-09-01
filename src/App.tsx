// import Routespath from "../routes";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "./features/home/components/Hero";
import Navbar from "./shared/components/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  );
};

export default App;

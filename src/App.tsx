// import Routespath from "../routes";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "./features/home/components/Hero";
import Navbar from "./shared/components/Navbar";
import Cocktails from "./features/home/components/Cocktails";
import AboutPage from "./features/about/aboutPage";
import Art from "./features/art/Art";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <AboutPage />
      <Art />
    </main>
  );
};

export default App;

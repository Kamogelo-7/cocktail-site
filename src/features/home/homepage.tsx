import AboutPage from "../about/aboutPage";
import Cocktails from "./components/Cocktails";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Cocktails />
      <AboutPage />
    </main>
  );
};

export default HomePage;

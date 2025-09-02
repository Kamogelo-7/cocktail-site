import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const AboutPage = () => {
  useGSAP(() => {
    // GSAP animations or effects can be added here
    const titleSplit = SplitText.create("#about h2", {
      type: " words",
    });

    const scrollTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeLine
      .from(titleSplit.words, {
        yPercent: 100,
        duration: 1,
        opacity: 0,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          duration: 1,
          opacity: 0,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  }, []);

  return (
    <section id="about" aria-label="About Page">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best cocktails</p>
            <h2>
              Where every detail matters{" "}
              <span className="text-gray-500 mr-2.5">-</span>
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.{" "}
            </p>

            <div>
              <p className="md:text-3xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-image-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="grid-image-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="grid-image-5" />
        </div>
      </section>

      <section className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-image-3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-image-4" />
        </div>
      </section>
    </section>
  );
};

export default AboutPage;

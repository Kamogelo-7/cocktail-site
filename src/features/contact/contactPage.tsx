import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../../constants";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const ContactPage = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", {
      type: "words",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    tl.from(titleSplit.words, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.02,
    })
      .from("#contact h3, #contact p", {
        yPercent: 100,
        opacity: 0,
        stagger: 0.02,
      })
      .to("#f-right-leaf", { y: -50, duration: 1, ease: "power1.inOut" })
      .to("#f-left-leaf", { y: -50, duration: 1, ease: "power1.inOut" }, "<");
  }, []);

  return (
    <footer id="contact">
      <img
        src="images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img src="images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

      <div className="content">
        <h2>Where To Find Us</h2>
        <div>
          <h3>Visit Our Bar</h3>
          <p>101 Strand St, Cape Town City Centre, Cape Town, 74600</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p> 081 437 1916</p>
          <p>
            <a
              href="mailto:hello@cocktailbar.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              hello@cocktailbar.com
            </a>
          </p>
        </div>

        <div>
          <h3>Open every day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}: {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((socialLinks) => (
              <a
                key={socialLinks.name}
                href={socialLinks.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialLinks.name}
              >
                <img src={`${socialLinks.icon}`} alt={socialLinks.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactPage;

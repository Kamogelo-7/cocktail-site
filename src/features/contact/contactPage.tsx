import { openingHours, socials } from "../../constants";

const ContactPage = () => {
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

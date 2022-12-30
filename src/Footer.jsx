// Import brand icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
const year = new Date().getFullYear();
const socialLinks = {
  linkedin: "https://www.linkedin.com/in/dapoadedire/",
  github: "https://www.github.com/dapoadedire",
  twitter: "https://www.twitter.com/dapo_adedire",
};
const Footer = () => {
  return (
    <footer>
      <p>
        <FontAwesomeIcon icon={faCopyright} /> {year} -
        <a href="https://www.google.com/search?q=dapo+adedire&oq=dapo+adedire">
          Built by Dapo Adedire
        </a>
      </p>
      <ul className="social-links">
        <li>
          <a href={socialLinks.linkedin}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href={socialLinks.github}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href={socialLinks.twitter}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

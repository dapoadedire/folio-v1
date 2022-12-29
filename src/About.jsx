import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "./assets/profile-photo.jpeg";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import resume from "./assets/___dapoadedire.pdf";
import { faFile } from "@fortawesome/free-regular-svg-icons";


const About = () => {
  return (
    <section className="about__container" id="about">
      <div className="about__content">
        <h2 className="about__title">About Me</h2>
        <p className="about__text">
          As an electronics and electrical engineering major with a background
          in software development, I have a strong foundation in both technical
          and creative fields. With over two years of experience, I am
          constantly learning and improving my skills to become a
          <Italics> senior-level developer</Italics>.In addition to my passion
          for technology and programming, I am also curious and enjoy exploring
          new areas, such as psychology and non-fiction literature. I also enjoy
          participating in open source projects and writing technical articles.
          In my free time, I enjoy gardening and photography as a way to relax
          and engage in creative pursuits.
        
        </p>
        <a href={resume} target="_blank" rel="noreferrer">
          <button className="resume">
            Résumé/CV <FontAwesomeIcon icon={faFile} />
          </button>
        </a>

        <button className="about__sayhello">
          Say Hello
          <span className="paper-plane">
            <FontAwesomeIcon icon={faPaperPlane} className="about__icon" />
          </span>
        </button>
      </div>
      <div className="about__image">
        <img src={profile} alt="profile" />
      </div>
    </section>
  );
};

const Italics = ({ children }) => (
  <span className="italic text-gray-500">{children}</span>
);

export default About;

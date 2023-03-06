import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../assets/profile-photo.jpeg";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";

const About = () => {
  return (
    <section className="about__container" id="about">
      <div className="about__content">
        <h2 className="about__title">About Me</h2>
        <p className="about__text">
          I am an electronics/electrical engineering student and software developer with
          strong technical and practical skills. I am eager to learn and
          improve, and have a particular interest in exploring new technologies.
          In addition to being a front-end developer, I enjoy writing <Italics text="technical articles" /> and contributing to 
          <Italics text=" open-source software projects."/> I am a curious and dedicated individual who is always
          looking for new ways to grow and expand my knowledge and skills.
        </p>
        <a href="/" target="_blank" rel="noreferrer">
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

const Italics = ({ text }) => (
  <span style={{ fontStyle: "italic" }}>{text}</span>
);


export default About;

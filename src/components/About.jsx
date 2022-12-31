import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../assets/profile-photo.jpeg";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import resume from "../assets/___dapoadedire.pdf";
import { faFile } from "@fortawesome/free-regular-svg-icons";

const About = () => {
  return (
    <section className="about__container" id="about">
      <div className="about__content">
        <h2 className="about__title">About Me</h2>
        <p className="about__text">
          As an electronics/electrical engineering student and software
          developer with over <Italics>two years</Italics> of experience, I have
          a strong foundation in both technical and practical skills. I am
          constantly seeking to learn and improve, and have a particular
          interest in psychology, non-fiction books, and exploring new
          technologies. In addition to my work as a{" "}
          <Italics> back-end developer with some front-end experience</Italics>,
          I enjoy writing <Italics>technical articles</Italics> and contributing
          to
          <Italics>open source software projects.</Italics> In my free time, I
          enjoy gardening and taking photos as hobbies. Overall, I am a curious
          and dedicated individual who is always looking for new ways to grow
          and expand my knowledge and skills.
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

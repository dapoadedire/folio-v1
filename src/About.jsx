// import image from assets folder

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "./assets/profile-photo.jpeg";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Italics = ({ children }) => (
  <span className="italic text-gray-500">{children}</span>
);

const About = () => {
  return (
    <section className="about__container" id="about">
      <div className="about__content">
        <h2 className="about__title">About Me</h2>
        <p className="about__text">
          A townhall ... different from balablu , blublu bulaba.
          <Italics>voluptatum</Italics> quod quia. Quisquam, quae. Quisquam,
          quae. vitae veniam eaque minus autem tempore cum! Similique quisquam
          aliquid autem. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Laudantium quo incidunt aut eveniet sapiente, repellat enim
          minima rem distinctio quidem deserunt expedita
        </p>

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

export default About;

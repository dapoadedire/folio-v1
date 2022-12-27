// Import project images from assets/project folder

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import project1 from "./assets/project/project1.png";
import project2 from "./assets/project/project2.png";
import project3 from "./assets/project/project3.png";
import project4 from "./assets/project/project4.png";
import project5 from "./assets/project/project5.png";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const all_projects = [
  {
    id: 1,
    name: "Project 1",
    image: project1,
    description: "This is a project description",
    link: "https://www.google.com",
    github: "https://www.google.com",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    name: "Project 1",
    image: project2,
    description: "This is a project description",
    link: "https://www.google.com",
    github: "https://www.google.com",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    name: "Project 3",
    image: project3,
    description:
      "This is a project descriptionLorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,cimpedit in ratione omnis, consequuntur quis magni reiciendis earum,quod quia.Quisquam, quae.Quisquam,quae.vitae veniam eaque minus autem tempore cum! Similique quisquamaliquid autem.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laudantium quo incidunt aut eveniet sapiente, repellat enimminima rem distinctio quidem deserunt expedita",
    link: "https://www.google.com",
    github: "https://www.google.com",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    name: "Project 4",
    image: project4,
    description: "This is a project description",
    link: "https://www.google.com",
    github: "https://www.google.com",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    name: "Project 5",
    image: project5,
    description: "This is a project description",
    link: "https://www.google.com",
    github: "https://www.google.com",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    name: "Project 6",
    image: project5,
    description: "This is a project description",
    link: "https://www.google.com",
    github: "https://www.google.com",
    languages: ["HTML", "CSS", "JavaScript"],
  },
];

const Project = () => {
  return (
    <section className="project__container" id="projects">
      <h2 className="project__title">Projects</h2>
      <p className="project__subtitle">
        Here are some of my projects. You can find more on my{" "}
        <a href="https://www.github.com/dapoadedire">Github</a>
      </p>

      <div className="project__content">
        {all_projects.map((project) => {
          const { id, name, image, description, link, github, languages } =
            project;
          return (
            <div className="project__card" key={id}>
              <div className="project__image">
                <img src={image} alt={name} />
              </div>
              <div className="project__description">
                <h3 className="project__name">{name}</h3>
                <p className="project__text">{description}</p>
                <div className="project__links">
                  <a href={link} className="live__link">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                  <a href={github} className="github__link">
                    <FontAwesomeIcon icon={faGithub} id="github__link" />
                  </a>
                </div>
                <div className="project__languages">
                  {languages.map((language, index) => {
                    return (
                      <span className="project__language" key={index}>
                        {language}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;

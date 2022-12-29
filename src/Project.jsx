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
    name: "Django Blog v2",
    image: project1,
    description:
      "Blog application that allows users to leave comments on posts. This functionality enables readers to engage with the content and contribute their own thoughts and perspectives.",
    link: "https://github.com/dapoadedire/django-blog-v2",
    github: "https://github.com/dapoadedire/django-blog-v2",
    languages: ["HTML,", "CSS,", "JavaScript,", "Django,"],
  },
  {
    id: 2,
    name: "GitIgnore CLI",
    image: project2,
    description:
      "Python package that generates a .gitignore file for different programming languages. With this package, you can quickly and easily create a .gitignore file that will help you manage your Git repository by ignoring files that you don't want to track.",
    link: "https://pypi.org/project/creategitignore/",
    github: "https://github.com/dapoadedire/gitignore-cli",
    languages: ["Python,", "PyPI."],
  },
  {
    id: 3,
    name: "🚧 Yoruba Proverb API 🚧",
    image: project3,
    description:
      " REST API that generates Yoruba proverbs, their translations, and the wisdom contained in them. This API allows users to easily access and learn from these traditional African sayings.",
    link: "https://github.com/dapoadedire/yoruba-proverb-api",
    github: "https://github.com/dapoadedire/yoruba-proverb-api",
    languages: ["HTML,", "CSS,", "JavaScript."],
  },
  {
    id: 4,
    name: "🚧 Cozy Library 🚧",
    image: project4,
    description:
      "Cozy Library is a website that allows users to download books of various genres, offering a wide selection of literature to choose from. Whether you're looking for a classic novel, a contemporary best-seller, or a non-fiction title, Cozy Library has something for everyone.",
    link: "https://github.com/dapoadedire/cozylibrary",
    github: "https://github.com/dapoadedire/cozylibrary",
    languages: ["HTML,", "CSS,", "JavaScript."],
  },
  {
    id: 5,
    name: "Todo List API",
    image: project5,
    description:
      "API for a todo list application that can perform all the basic functions of a todo app, such as creating, retrieving, updating, and deleting todo items. This API allows users to manage and organize their tasks in a convenient and efficient manner.",
    link: "https://github.com/dapoadedire/django-todolistapi",
    github: "https://github.com/dapoadedire/django-todolistapi",
    languages: ["Django,", "Django REST Framework."],
  },
  {
    id: 6,
    name: "Gab Scrapper",
    image: project5,
    description:
      "Python script that scrapes user and post data from the social media platform Gab and writes the data to a CSV file.",
    link: "https://github.com/dapoadedire/gab-scraper",
    github: "https://github.com/dapoadedire/gab-scraper",
    languages: ["Python."],
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
              </div>
              <div className="project__others">

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

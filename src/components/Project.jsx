import { _ } from "lodash";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const all_projects = _.shuffle([
  // {
  //   id: nanoid(),
  //   name: "",
  //   description: "",
  //   link: "",
  //   github: "",
  //   languages: [],
  // },
  {
    id: nanoid(),
    name: "BooksExplorer",
    description: "A React-based application that allows users to search for books and view book details.",
    link: "https://booksexplorer.vercel.app/",
    github: "https://github.com/dapoadedire/booksexplorer",
    languages: ["React", "Vanilla CSS"],
  },
  {
    id: nanoid(),
    name: "Jokes World",
    description: "A simple accordion-style app that displays a list of jokes, allowing the user to expand and collapse the answers",
    link: "https://jokes-world.vercel.app/",
    github: "https://github.com/dapoadedire/jokes-world",
    languages: ["React", "Tailwind CSS"],
  },
  {
    id: nanoid(),
    name: "NASA APOD",
    description: "This is a simple app that allows users to search and view the NASA Astronomy Picture of the Day (APOD). Users can also generate a random APOD.",
    link: "https://astro-pic-of-the-day.vercel.app/",
    github: "https://github.com/dapoadedire/astro-pic-of-the-day",
    languages: ["React", "Vanilla CSS"],
  },
  {
    id: nanoid(),
    name: "BrainBusters",
    description: "BrainBusters is a React-based Quiz application that allows users to answer questions, track their score, and view their results at the end of the quiz.",
    link: "https://brainbusters.vercel.app/",
    github: "https://github.com/dapoadedire/brainbusters",
    languages: ["React", "Tailwind CSS"],
  },
  {
    id: nanoid(),
    name: "TaskMaster",
    description: "TaskMaster is a to-do list application built with React. It allows users to add, mark as done, delete, move up and down tasks. The tasks are also stored in local storage so that they persist even after the browser is closed.",
    link: "https://taskmaster-15.vercel.app/",
    github: "https://github.com/dapoadedire/taskmaster",
    languages: ["React", "Tailwind CSS"],
  },
  {
    id: nanoid(),
    name: "Django Blog v2",
    description:
      "Blog application that allows users to leave comments on posts. This functionality enables readers to engage with the content and contribute their own thoughts and perspectives.",
    link: "https://github.com/dapoadedire/django-blog-v2",
    github: "https://github.com/dapoadedire/django-blog-v2",
    languages: ["HTML,", "CSS,", "JavaScript,", "Django"],
  },
  {
    id: 2,
    name: "GitIgnore CLI",
    description:
      "Python package that generates a .gitignore file for different programming languages. With this package, you can quickly and easily create a .gitignore file that will help you manage your Git repository by ignoring files that you don't want to track.",
    link: "https://pypi.org/project/creategitignore/",
    github: "https://github.com/dapoadedire/gitignore-cli",
    languages: ["Python,", "PyPI"],
  },
  {
    id: 3,
    name: "Yoruba Proverb API 🚧",
    description:
      " REST API that generates Yoruba proverbs, their translations, and the wisdom contained in them. This API allows users to easily access and learn from these traditional African sayings.",
    link: "https://github.com/dapoadedire/yoruba-proverb-api",
    github: "https://github.com/dapoadedire/yoruba-proverb-api",
    languages: ["HTML,", "CSS,", "JavaScript"],
  },
  {
    id: 4,
    name: "Cozy Library 🚧",
    description:
      "Cozy Library is a website that allows users to download books of various genres, offering a wide selection of literature to choose from. Whether you're looking for a classic novel, a contemporary best-seller, or a non-fiction title, Cozy Library has something for everyone.",
    link: "https://github.com/dapoadedire/cozylibrary",
    github: "https://github.com/dapoadedire/cozylibrary",
    languages: ["HTML,", "CSS,", "JavaScript"],
  },
  {
    id: 5,
    name: "Todo List API",
    description:
      "API for a todo list application that can perform all the basic functions of a todo app, such as creating, retrieving, updating, and deleting todo items. This API allows users to manage and organize their tasks in a convenient and efficient manner.",
    link: "https://github.com/dapoadedire/django-todolistapi",
    github: "https://github.com/dapoadedire/django-todolistapi",
    languages: ["Django,", "Django REST Framework"],
  },
  {
    id: 6,
    name: "Gab Scrapper",
    description:
      "Python script that scrapes user and post data from the social media platform Gab and writes the data to a CSV file.",
    link: "https://github.com/dapoadedire/gab-scraper",
    github: "https://github.com/dapoadedire/gab-scraper",
    languages: ["Python"],
  },
]);

const Project = () => {
  return (
    <section className="project__container" id="projects">
      <h2 className="project__title">Projects</h2>
      <p className="project__subtitle">
        Here are some of my projects. You can find more on my{" "}
        <a href="https://www.github.com/dapoadedire">Github Profile.</a>
      </p>

      <div className="project__content">
        {all_projects.map((project) => {
          const { id, name, description, link, github, languages } = project;
          return (
            <div className="project__card" key={id}>
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

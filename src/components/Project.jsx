import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp} from "@fortawesome/free-solid-svg-icons";

const all_projects = [
  {
    id: 7,
    name: "TrendHub",
    description: "TrendHub is an e-commerce website that allows users to view items in different categories and add them to a cart. The frontend is built with React and TailwindCSS, and additional libraries like React-Icons, Sonner, Hamburger-React, React-Router, Framer Motion, and ESLint are used to enhance the user experience.",
    link: ' https://trend-hub.vercel.app',
    github: "https://github.com/dapoadedire/trendhub",
    languages: ["React","Tailwind CSS"],
  },
  {
    id: 6,
    name: "Movie/Book Recommender",
    description: "A React-based application that allows users to input their favorite movies and books and get recommendations based on their input.",
    link: 'https://movie-and-book-recommender.vercel.app/',
    github: "https://github.com/dapoadedire/movie-and-book-recommender",
    languages: ["NextJS", "Typescript", "Tailwind CSS", "OpenAI API"],
  },
  {
    id: 5,
    name: "Wordsmith",
    description: "WordSmith is a dictionary application that provides definitions, synonyms, antonyms and examples of English words. It utilizes the API from dictionaryapi.dev.",
    link: "https://wordsmith-d.vercel.app/",
    github: "https://github.com/dapoadedire/wordsmith",
    languages: ["React", "Tailwind CSS"],

  },
  
  {
    id: 4,
    name: "BooksExplorer",
    description: "A React-based application that allows users to search for books and view book details.",
    link: "https://bookexplorer.vercel.app/",
    github: "https://github.com/dapoadedire/booksexplorer",
    languages: ["React", "Vanilla CSS"],
  },
 
  {
    id: 3,
    name: "NASA APOD",
    description: "This is a simple app that allows users to search and view the NASA Astronomy Picture of the Day (APOD). Users can also generate a random APOD.",
    link: "https://astro-pic-of-the-day.vercel.app/",
    github: "https://github.com/dapoadedire/astro-pic-of-the-day",
    languages: ["React", "Vanilla CSS"],
  },
  {
    id: 2,
    name: "BrainBusters",
    description: "BrainBusters is a React-based Quiz application that allows users to answer questions, track their score, and view their results at the end of the quiz.",
    link: "https://brainbusters.vercel.app/",
    github: "https://github.com/dapoadedire/brainbusters",
    languages: ["React", "Tailwind CSS"],
  },

  {
    id: 0,
    name: "GitIgnore CLI",
    description:
      "Python package that generates a .gitignore file for different programming languages. With this package, you can quickly and easily create a .gitignore file that will help you manage your Git repository by ignoring files that you don't want to track.",
    link: "https://pypi.org/project/creategitignore/",
    github: "https://github.com/dapoadedire/gitignore-cli",
    languages: ["Python,", "PyPI"],
  },
];

const Project = () => {
  return (
    <section className="project__container" id="projects">
      <h2 className="project__title">Projects</h2>
      <p className="project__subtitle">
        Here are some of my projects. You can find more on my{" "}
        <a href="https://www.github.com/dapoadedire" target="_blank" rel="noreferrer">Github Profile.</a>
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
                  
                  <a href={github} className="github__link" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} id="github__link" />
                  </a>
                  <a href={link} className="live__link" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faArrowUp}
                      style={
                        {

                          transform: "rotate(45deg)",
                          marginLeft: "0.5rem",
                          
                        }
                      }
                    />
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

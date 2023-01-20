const skills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "ReactJS",
  "Python",
  "Tailwind CSS",
  "Django",
  "Git & GitHub",
  "Responsive Design",
  "Web Accessibility",
];

const Skills = () => {
  return (
    <div className="skills__container">
      <div className="skills__intro">
        <h2>Skills</h2>
        <p>
          The following are the skills I have acquired over the years. I am
          always learning new skills and technologies.
        </p>
      </div>

      <div className="skills__list">
        {skills.map((skill, index) => {
          return (
            <div className="skill" key={index}>
              <p>{skill}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

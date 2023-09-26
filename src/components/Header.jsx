import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <header>
      <div className="logo">
        <h2>
          <a href="#home">Dapo Adedire</a>
        </h2>
      </div>

   
      <ul>
        <li>
        {theme === "light" ? (
            <FontAwesomeIcon
              icon={faMoon}
              className="toggle light"
              onClick={toggleTheme}
            />
          ) : (
            <FontAwesomeIcon
              icon={faSun}
              className="toggle dark"
              onClick={toggleTheme}
            />
          )}
        </li>
       
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#articles">Articles</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h2>
          <a href="#home">Dapo Adedire</a>
        </h2>
      </div>
      <nav className="navbar" role={"navigation"}>
        <ul>
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
      </nav>
      
    </header>
  );
};

export default Header;

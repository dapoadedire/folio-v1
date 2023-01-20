const articles_list = [
  {
    title: "Creating a .gitignore file with a Python Package.",
    link: "https://dapoadedire.hashnode.dev/creating-a-gitignore-file-with-a-python-package",
  },
  {
    title: "How to Convert Images to PDF in Python.",
    link: "https://dapoadedire.hashnode.dev/how-to-convert-images-to-pdf-in-python/",
  },
  {
    title: "Best Articles I've Read This Year.",
    link: "https://www.dapoadedire.tech/blog/my-best-articles-of-the-year/",
  },
  {
    title: "How To Add A Custom Rich Text-Editor In Your Django Website.",
    link: "https://dapoadedire.hashnode.dev/how-to-add-a-custom-rich-text-editor-in-your-django-website",
  },
  {
    title: "Setting Up EmailJS With A React App.",
    link: "https://dapoadedire.hashnode.dev/setting-up-emailjs-with-a-react-app",
  },
];

const Articles = () => {
  return (
    <section className="articles__container" id="articles">
      <h2 className="articles__title">Articles</h2>
      <p className="articles__subtitle">
        Here are some of my articles. You can find more on my{" "}
        <a
          href="https://www.dapoadedire.hashnode.dev/"
          target="_blank"
          rel="noreferrer"
        >
          Hashnode Blog.
        </a>
      </p>

      <div className="articles__content">
        {articles_list.map((article) => {
          const { title, link } = article;
          return (
            <div className="articles__card" key={title}>
              <a
                href={link}
                className="articles__link"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="articles__name">{title}</h3>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Articles;

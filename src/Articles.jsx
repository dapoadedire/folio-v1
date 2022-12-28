const articles_list = [
    {
        title: "Best Practices for Writing React Components",
        link: "https://www.freecodecamp.org/news/best-practices-for-writing-react-components/",
    },
    {
        title: "How to use the React Context API",
        link: "https://www.freecodecamp.org/news/how-to-use-the-react-context-api/",
    },
]

const Articles = () => {
    return (
        <section className="articles__container" id="articles">
            <h2 className="articles__title">Articles</h2>
            <p className="articles__subtitle">
                Here are some of my articles. You can find more on my{" "}
                <a href="https://www.dapoadedire.hashnode.dev/">Hashnode Blog.</a>
            </p>

            <div className="articles__content">
                {articles_list.map((article) => {
                    const { title, link } = article;
                    return (
                        <div className="articles__card" key={title}>
                            
                            <a href={link} className="articles__link">
                                <h3 className="articles__name">{title}</h3>
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}


export default Articles;
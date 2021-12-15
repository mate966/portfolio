import { HashLink } from "react-router-hash-link";

const Portfolio = () => {
    return (
        <section className="portfolio wrapper" id="portfolio">
            <h3 className="section__heading">Portfolio.</h3>
            <div className="portfolio__container">
                <div data-aos="zoom-in">
                    <HashLink smooth to="/portfolio/starwars">
                        <div className="portfolio__project lol-signup">
                            <h4 className="project__hover box__heading">
                                Star Wars Compedium
                            </h4>
                            <p className="project__hover section__paragraph">
                                Sprawdź szczegóły na temat swoich ulubionych
                                filmów, bohaterów, pojazdów w największej
                                encyklopedii Star Wars.
                            </p>
                        </div>
                    </HashLink>
                </div>
                <div data-aos="zoom-in">
                    <HashLink smooth to="/portfolio/lol-signup">
                        <div className="portfolio__project lol-signup">
                            <h4 className="project__hover box__heading">
                                Formularz rejestracyjny
                            </h4>
                            <p className="project__hover section__paragraph">
                                Zarejestruj się w League of Legends i rusz na
                                podbój Summoner Rift.
                            </p>
                        </div>
                    </HashLink>
                </div>
                <div data-aos="zoom-in">
                    <HashLink smooth to="/portfolio/weather-app">
                        <div className="portfolio__project lol-signup">
                            <h4 className="project__hover box__heading">
                                Weather App
                            </h4>
                            <p className="project__hover section__paragraph">
                                Sprawdź prognozę pogody w swoim mieście na
                                najbliższe dni.
                            </p>
                        </div>
                    </HashLink>
                </div>
                <div data-aos="zoom-in">
                    <HashLink smooth to="/portfolio/todo-list">
                        <div className="portfolio__project lol-signup">
                            <h4 className="project__hover box__heading">
                                Lista TODO
                            </h4>
                            <p className="project__hover section__paragraph">
                                Zaplanuj swój dzień i spraw aby był wyjątkowy za
                                pomocą listy TODO.
                            </p>
                        </div>
                    </HashLink>
                </div>
                <div data-aos="zoom-in">
                    <HashLink smooth to="/portfolio/potfolio">
                        <div className="portfolio__project lol-signup">
                            <h4 className="project__hover box__heading">
                                Portfolio
                            </h4>
                            <p className="project__hover section__paragraph">
                                Dowiedz się więcej na temat projektu portfolio,
                                na którym się aktualnie znajdujesz.
                            </p>
                        </div>
                    </HashLink>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

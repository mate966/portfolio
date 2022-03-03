import { HashLink } from "react-router-hash-link";

const Portfolio = () => {
    return (
        <section className="portfolio wrapper" id="portfolio">
            <h2 className="section__heading">Portfolio.</h2>
            <div className="portfolio__container">
                <div data-aos="zoom-in">
                    <HashLink
                        smooth
                        to="/portfolio/law-office#project__present"
                    >
                        <div className="portfolio__project law-office-image">
                            <h3 className="project__hover box__heading">
                                Kancelaria Radcy Prawnego Jan Karolak
                            </h3>
                            <p className="project__hover section__paragraph">
                                Sprawdź szczegóły na temat swoich ulubionych
                                filmów, bohaterów, pojazdów w największej
                                encyklopedii Star Wars.
                            </p>
                        </div>
                    </HashLink>
                </div>
                <div data-aos="zoom-in">
                    <HashLink
                        smooth
                        to="/portfolio/portfolio-site#project__present"
                    >
                        <div className="portfolio__project portfolio-image">
                            <h3 className="project__hover box__heading">
                                Portfolio
                            </h3>
                            <p className="project__hover section__paragraph">
                                Dowiedz się więcej na temat projektu portfolio,
                                na którym się aktualnie znajdujesz.
                            </p>
                        </div>
                    </HashLink>
                </div>
                <div data-aos="zoom-in">
                    <HashLink smooth to="/portfolio/todo-list#project__present">
                        <div className="portfolio__project todo-image">
                            <h3 className="project__hover box__heading">
                                Lista TODO
                            </h3>
                            <p className="project__hover section__paragraph">
                                Zaplanuj swój dzień i spraw aby był wyjątkowy za
                                pomocą listy TODO.
                            </p>
                        </div>
                    </HashLink>
                </div>
                <div data-aos="zoom-in">
                    <HashLink
                        smooth
                        to="/portfolio/weather-app#project__present"
                    >
                        <div className="portfolio__project weather-app-image">
                            <h3 className="project__hover box__heading">
                                Weather App
                            </h3>
                            <p className="project__hover section__paragraph">
                                Sprawdź prognozę pogody w swoim mieście na
                                najbliższe dni.
                            </p>
                        </div>
                    </HashLink>
                </div>
                <div data-aos="zoom-in">
                    <HashLink smooth to="/portfolio/lol-form#project__present">
                        <div className="portfolio__project lol-form-image">
                            <h3 className="project__hover box__heading">
                                Formularz rejestracyjny
                            </h3>
                            <p className="project__hover section__paragraph">
                                Zarejestruj się w League of Legends i rusz na
                                podbój Summoner Rift.
                            </p>
                        </div>
                    </HashLink>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

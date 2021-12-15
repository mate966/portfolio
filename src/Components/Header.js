import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Button from "./Button";

import Nav from "./Nav";

const Header = () => {
    return (
        <header className="header">
            <Nav />
            <div className="header__slider wrapper">
                <Splide
                    options={{
                        // type: "loop",
                        // speed: 400,
                        // autoplay: true,
                        // pauseOnHover: false,
                        arrows: false,
                        classes: {
                            arrows: "arrows",
                            arrow: "arrow",
                            prev: "arrow-prev",
                            next: "arrow-next",
                            pagination:
                                "splide__pagination__container slider-container",
                            page: "splide__pagination__page slider-page",
                        },
                    }}
                    hasSliderWrapper
                >
                    <SplideSlide>
                        <div className="header__welcome">
                            <h1 className="welcome-heading">
                                Hej! Miło Cię poznać!
                            </h1>
                            <h2 className="welcome-text">
                                Nazywam się Mateusz i jestem tu po to by
                                zbudować wizytówkę Twojej osoby bądź firmy.
                                Wiem, wiem... Ciężko zaufać komuś kogo się nie
                                zna, więc jeśli masz ochotę dowiedzieć się
                                więcej na mój temat, nie krępuj się i wpadaj w
                                zakładkę 'O mnie'!
                            </h2>
                            <Link to="/about">
                                <Button value="O mnie" />
                            </Link>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="header__welcome">
                            <h1 className="welcome-heading">
                                Muszę Ci się pochwalić!
                            </h1>
                            <h2 className="welcome-text">
                                Odkąd zakochałem się w programowaniu udało mi
                                się już stworzyć kilka projektów. Ciekawy?
                                Zapraszam do mojego małego świata FrontEnd!
                            </h2>
                            <Link to="/portfolio">
                                <Button value="Portfolio" />
                            </Link>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="header__welcome">
                            <h1 className="welcome-heading">
                                Gotowy do współpracy?
                            </h1>
                            <h2 className="welcome-text">
                                Odwiedziłeś już wszystko? Daj znać jak Ci się
                                podobała ta wycieczka. Jako, że poszukuje pracy
                                jako FrontEnd Developer, możesz kontaktować się
                                ze mną również w tej sprawie! Odezwij się, a na
                                pewno odpowiem!
                            </h2>
                            <Link to="/contact">
                                <Button value="Kontakt" />
                            </Link>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
            <HashLink smooth to="/#about">
                <div className="arrow-down">
                    <i className="fas fa-chevron-down"></i>
                </div>
            </HashLink>
        </header>
    );
};

export default Header;

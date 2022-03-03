import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Button from "./Button";

import Nav from "./Nav";

const Header = () => {
    return (
        <header>
            <Nav />
            <div className="header__slider wrapper">
                <Splide
                    options={{
                        type: "loop",
                        arrows: false,
                        speed: 2000,
                        autoplay: true,
                        pauseOnHover: false,
                    }}
                    hasSliderWrapper
                >
                    <SplideSlide>
                        <div className="header__welcome">
                            <h1 className="welcome-heading">Mateusz Szweda</h1>
                            <p className="welcome-text">
                                Hej! Miło Cię poznać! Nazywam się Mateusz i
                                jestem tu po to by zbudować wizytówkę Twojej
                                osoby bądź firmy. Wiem, wiem... Ciężko zaufać
                                komuś kogo się nie zna, więc jeśli masz ochotę
                                dowiedzieć się więcej na mój temat, nie krępuj
                                się i wpadaj w zakładkę 'O mnie'!
                            </p>
                            <Button value="O mnie" path="/about" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="header__welcome">
                            <h1 className="welcome-heading">
                                Frontend Developer
                            </h1>
                            <p className="welcome-text">
                                Odkąd zakochałem się w programowaniu udało mi
                                się już stworzyć kilka prac. Cały wolny czas
                                poświęcam na rozwój swoich umiejętności i budowę
                                nowych projektów. Ciekawy? Zapraszam do mojego
                                małego świata Frontend!
                            </p>
                            <Button value="Portfolio" path="/portfolio" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="header__welcome">
                            <h1 className="welcome-heading">
                                Gotowy do współpracy?
                            </h1>
                            <p className="welcome-text">
                                Odwiedziłeś już wszystko? Daj znać jak Ci się
                                podobała ta wycieczka, a jeśli szukasz Juniora
                                do swojej ekipy lub potrzebujesz zbudować swoją
                                stronę odezwij się, a na pewno odpowiem!
                            </p>
                            <Button value="Kontakt" path="/contact" />
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
            <HashLink smooth to="#about" className="arrow-down">
                <i className="fas fa-chevron-down"></i>
            </HashLink>
        </header>
    );
};

export default Header;

import Footer from "../Components/Footer";
import Header from "../Components/Header";

import ScreenShot from "../assets/projects-images/lol-form-screenshot.jpg";

const LolForm = () => {
    return (
        <>
            <Header />
            <section id="project__present" className="project__present wrapper">
                <h3 className="section__heading">
                    League of Legends - Sign Up
                </h3>
                <p className="section__paragraph">
                    Zdecydowałem się na przygotowanie formularza rejestracyjnego
                    z gry League of Legends, ponieważ zrobił na mnie spore
                    wrażenie wizualne. Spodziewałem się dużego wyzwania, ale na
                    to właśnie za każdym razem liczę. W przypadku tego projektu
                    wykorzystałem bibliotekę React wraz z modułem
                    react-router-dom oraz preprocesor SASS. Zastosowałem również
                    walidację po stronie użytkownika, która miała wpływ na
                    kolejne etapy rejestracji.
                </p>
                <p className="section__paragraph">
                    <a href="https://github.com/mate966/lol-form">GitHub</a>
                </p>
                <p className="section__paragraph">
                    <a href="https://mate966.github.io/lol-form/">Live</a>
                </p>
                <img
                    src={ScreenShot}
                    alt="Zdjęcie poglądowe strony"
                    className="screenshot"
                />
            </section>
            <Footer />
        </>
    );
};

export default LolForm;

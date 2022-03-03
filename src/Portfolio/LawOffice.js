import Footer from "../Components/Footer";
import Header from "../Components/Header";

import ScreenShot from "../assets/projects-images/law-office-screenshot.jpg";
import ScreenShot1 from "../assets/projects-images/law-office-screenshot1.jpg";

const LawOffice = () => {
    return (
        <>
            <Header />
            <section id="project__present" className="project__present wrapper">
                <h3 className="section__heading">
                    Kancelaria Radcy Prawnego Jan Karolak
                </h3>
                <p className="section__paragraph">
                    Mój pierwszy komercyjny projekt, który przygotowałem dla
                    Kancelarii Radcy Prawnego Jan Karolak. W pracy tej
                    pracowałem na pliku graficznym PSD z gotowym szablonem
                    strony. W związku z tym, iż strona miała być prostolinijna
                    oraz nie za duża, zdecydowałem się na zastosowanie czystego
                    Javascriptu. Do stylizacji użyłem preprocesora Sass oraz
                    technikę projektowanie RWD z podejściem Desktop First.
                    Ponadto wykorzystałem gotową bibliotekę AOS Css, która
                    sprawiła, że strona nabrała kolorytu dzięki efektownym
                    animacjom. Zaimplementowałem również platformę EmailJS,
                    która służy do obsługi poczty email. W formie kontaktowej
                    zastosowałem również walidację po stronie użytkownika.
                </p>
                <p className="section__paragraph">
                    <a href="https://github.com/mate966/lawyer-site">GitHub</a>
                </p>
                <p className="section__paragraph">
                    <a href="https://krpjk.pl">Live</a>
                </p>
                <img
                    src={ScreenShot}
                    alt="Zdjęcie poglądowe strony"
                    className="screenshot"
                />
                <img
                    src={ScreenShot1}
                    alt="Zdjęcie poglądowe strony nr 2"
                    className="screenshot"
                />
            </section>
            <Footer />
        </>
    );
};

export default LawOffice;

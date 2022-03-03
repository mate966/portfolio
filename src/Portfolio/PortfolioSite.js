import Footer from "../Components/Footer";
import Header from "../Components/Header";

import ScreenShot from "../assets/projects-images/portfolio-screenshot.jpg";
import ScreenShot1 from "../assets/projects-images/portfolio-screenshot1.jpg";

const PortfolioSite = () => {
    return (
        <>
            <Header />
            <section id="project__present" className="project__present wrapper">
                <h3 className="section__heading">Portfolio - Mateusz Szweda</h3>
                <p className="section__paragraph">
                    Rdzeniem mojego portfolio jest biblioteka React. Projekt ten
                    został przygotowany na bazie gotowego szablonu graficznego w
                    formacie PSD. Za stylizację strony odpowiada preprocesor
                    Sass, zaś podejście które wybrałem tym przypadku to Mobile
                    First. Ze względu na obecność podstron zastosowałem React
                    Router. Ponadto zdecydowałem się na użycie React Router Hash
                    Link, który rozwiązuje problem Routera polegający na tym, że
                    nie przewija on do hash'ów podczas korzystania z komponentu
                    Link. Dodatkowo na stronie pojawiła się biblioteka AOS Css
                    wprowadzająca animacje, SplideJS obsługujący slider headera
                    oraz EmailJS, czyli serwis poczty email.
                </p>
                <p className="section__paragraph">
                    <a href="https://github.com/mate966/portfolio">GitHub</a>
                </p>
                <img
                    src={ScreenShot}
                    alt="Zdjęcie poglądowe strony"
                    className="screenshot"
                />
                <img
                    src={ScreenShot1}
                    alt="Zdjęcie poglądowe strony"
                    className="screenshot"
                />
            </section>
            <Footer />
        </>
    );
};

export default PortfolioSite;

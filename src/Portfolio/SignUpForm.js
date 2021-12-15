import Footer from "../Components/Footer";
import Header from "../Components/Header";

const StarWars = () => {
    return (
        <>
            <Header />
            <section className="project__present wrapper">
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
                <div className="project__screen"></div>
            </section>
            <Footer />
        </>
    );
};

export default StarWars;

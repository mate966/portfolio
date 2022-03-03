import Footer from "../Components/Footer";
import Header from "../Components/Header";

import ScreenShot from "../assets/projects-images/weather-app-screenshot.jpg";

const WeatherApp = () => {
    return (
        <>
            <Header />
            <section id="project__present" className="project__present wrapper">
                <h3 className="section__heading">Weather App</h3>
                <p className="section__paragraph">
                    Podobnie jak w przypadku listy TODO, projekt Weather App
                    został poligonem doświadczalnym zdobytej dotąd wiedzy.
                    Ponownie zdecydowałem się na wykorzystanie biblioteki React
                    oraz Styled-Components. Tym razem jednak głównym zadaniem
                    aplikacji jest pobranie danych dotyczących prognozy pogody.
                    Do tego celu wykorzystałem metodę FETCH oraz API
                    OpenWeatherMap.
                </p>
                <p className="section__paragraph">
                    <a href="https://github.com/mate966/weather-app">GitHub</a>
                </p>
                <p className="section__paragraph">
                    <a href="https://mate966.github.io/weather-app/">Live</a>
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

export default WeatherApp;

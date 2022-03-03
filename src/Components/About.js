import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Button from "./Button";

const About = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section className="about wrapper" id="about">
            <div data-aos="fade-right" className="about__picture"></div>
            <div data-aos="fade-left" className="about__content">
                <h2 className="section__heading">O mnie</h2>
                <div className="socials">
                    <div>
                        <a
                            href="https://github.com/mate966"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.linkedin.com/in/mateuszszweda/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.facebook.com/matszwe"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                </div>
                <p className="section__paragraph">
                    Witaj ponownie! Pozwól, że przedstawię się jeszcze raz.
                    Nazywam się Mateusz i pochodzę z Tczewa. Kilka lat temu
                    zainteresowałem się Frontendem, a pasja ta przerodziła się w
                    nałóg... Nałóg, na który poświęcam każdą wolną chwilę i
                    robię to z przyjemnością. Jeśli jeszcze Cię nie zanudziłem
                    to zapraszam do lektury o mojej osobie!
                </p>
                {window.location.pathname === "/about" ? null : (
                    <Button value="Zobacz więcej!" path="/about" />
                )}
            </div>
        </section>
    );
};

export default About;

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
                <h3 className="section__heading">O mnie</h3>
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
                    {/* Hej! Nazywam się Mateusz Szweda. Pochodzę z Tczewa, choć na
                    co dzień pracuję w Wielkiej Brytanii. Od dłuższego czasu mam
                    obsesję na punkcie Web Developmentu czego efektem jest kilka
                    prac, które możesz ujrzeć w zakładce portfolio. */}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, odio, cupiditate modi fuga eos tempore rerum
                    distinctio culpa, consequuntur in repellendus dolores ut
                    magni aliquam eveniet nemo! Cumque, veritatis hic?
                    {/* choć moje serce cały czas pozostaje w moim
                    rodzinnym mieście.  */}
                    {/* Od dłuższego czasu mam obsesję na punkcie Web Developmentu i
                    każdą wolną chwilę poświęcam na rozwijanie tej pasji. Kocham
                    boks, lubię szachy oraz wciągającą lekturę. Gram w
                    wszelkiego rodzaju gry, od planszówek po Tomb Raidera, ale
                    ponadto stawiam na wspólnie spędzony czas z rodziną i
                    przyjaciółmi! */}
                </p>
                {window.location.pathname === "/about" ? null : (
                    <Button value="Zobacz więcej!" />
                )}
            </div>
        </section>
    );
};

export default About;

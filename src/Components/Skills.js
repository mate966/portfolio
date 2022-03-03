import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section id="skills" className="skills wrapper">
            <h2 className="section__heading">Umiejętności.</h2>
            <div className="skills__container">
                <div data-aos="flip-left" className="skills__rectangle">
                    <img
                        src="https://img.icons8.com/color/65/000000/html-5--v1.png"
                        alt="HTML icon"
                    />
                    <h3 className="box__heading">HTML</h3>
                </div>
                <div data-aos="flip-left" className="skills__rectangle">
                    <img
                        src="https://img.icons8.com/color/65/000000/css3.png"
                        alt="CSS icon"
                    />
                    <h3 className="box__heading">CSS</h3>
                </div>
                <div data-aos="flip-left" className="skills__rectangle">
                    <img
                        src="https://img.icons8.com/color/65/000000/javascript--v1.png"
                        alt="JavaScript icon"
                    />
                    <h3 className="box__heading">Javascript</h3>
                </div>
                <div data-aos="flip-left" className="skills__rectangle">
                    <img
                        src="https://img.icons8.com/plasticine/65/000000/react.png"
                        alt="React icon"
                    />
                    <h3 className="box__heading">REACT</h3>
                </div>
                <div data-aos="flip-left" className="skills__rectangle">
                    <img
                        src="https://img.icons8.com/color/65/000000/sass.png"
                        alt="Sass icon"
                    />
                    <h3 className="box__heading">SASS</h3>
                </div>
                <div data-aos="flip-left" className="skills__rectangle">
                    <img
                        src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/65/000000/external-responsive-marketing-seo-flatart-icons-lineal-color-flatarticons.png"
                        alt="RWD icon"
                    />
                    <h3 className="box__heading">RWD</h3>
                </div>
                <div data-aos="flip-left" className="skills__rectangle">
                    <img
                        src="https://img.icons8.com/material-outlined/65/000000/github.png"
                        alt="GitHub icon"
                    />
                    <h3 className="box__heading">GITHUB</h3>
                </div>
                <div data-aos="flip-left" className="skills__rectangle">
                    <img
                        src="https://img.icons8.com/ios/65/000000/figma--v1.png"
                        alt="Figma icon"
                    />
                    <h3 className="box__heading">FIGMA</h3>
                </div>
            </div>
        </section>
    );
};

export default Skills;

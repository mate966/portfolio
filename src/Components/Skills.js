import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section id="skills" className="skills wrapper">
            <h3 className="section__heading">Umiejętności.</h3>
            <div className="skills__container">
                <div data-aos="flip-left" className="skills__rectangle">
                    <img
                        src="https://img.icons8.com/color/65/000000/html-5--v1.png"
                        alt="HTML icon"
                    />
                    <h4 className="box__heading">HTML5</h4>
                    <p className="section__paragraph">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                    </p>
                </div>
                <div data-aos="flip-left" className="skills__rectangle">
                    <img
                        src="https://img.icons8.com/color/65/000000/css3.png"
                        alt="CSS icon"
                    />
                    <h4 className="box__heading">CSS3</h4>
                    <p className="section__paragraph">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                    </p>
                </div>
                <div data-aos="flip-left" className="skills__rectangle">
                    <img
                        src="https://img.icons8.com/color/65/000000/javascript--v1.png"
                        alt="JavaScript icon"
                    />
                    <h4 className="box__heading">ES6</h4>
                    <p className="section__paragraph">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                    </p>
                </div>
                <div data-aos="flip-left" className="skills__rectangle">
                    <img
                        src="https://img.icons8.com/plasticine/65/000000/react.png"
                        alt="React icon"
                    />
                    <h4 className="box__heading">REACT</h4>
                    <p className="section__paragraph">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                    </p>
                </div>
                {/* <div className="skills__rectangle">
                    <img
                        src="https://img.icons8.com/color/65/000000/npm.png"
                        alt="NPM icon"
                    />
                    <h4 className="box__heading">NPM</h4>
                    <p className="section__paragraph">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                    </p>
                </div> */}
                <div data-aos="flip-left" className="skills__rectangle">
                    <img
                        src="https://img.icons8.com/color/65/000000/sass.png"
                        alt="Sass icon"
                    />
                    <h4 className="box__heading">SASS</h4>
                    <p className="section__paragraph">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                    </p>
                </div>
                <div data-aos="flip-left" className="skills__rectangle">
                    <img
                        src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/65/000000/external-responsive-marketing-seo-flatart-icons-lineal-color-flatarticons.png"
                        alt="RWD icon"
                    />
                    <h4 className="box__heading">RWD</h4>
                    <p className="section__paragraph">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                    </p>
                </div>
                {/* <div className="skills__rectangle">
                    <img
                        src="https://img.icons8.com/color/65/000000/bootstrap.png"
                        alt="Bootstrap icon"
                    />
                    <h4 className="box__heading">BOOTSTRAP</h4>
                    <p className="section__paragraph">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                    </p>
                </div> */}
                <div data-aos="flip-left" className="skills__rectangle">
                    <img
                        src="https://img.icons8.com/material-outlined/65/000000/github.png"
                        alt="GitHub icon"
                    />
                    <h4 className="box__heading">GITHUB</h4>
                    <p className="section__paragraph">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;

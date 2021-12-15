import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import About from "../Components/About";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const AboutPage = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <Header />
            <About />
            {/* <div className="experience wrapper">
                <h2 className="section__heading">Doświadczenie</h2>
                <div className="experience__content">
                    <div className="experience__jobs" data-aos="fade-right">
                        <h4 className="skills__heading">Junior</h4>
                        <p className="section__paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Excepturi ipsa architecto qui dolores repellat
                            similique maxime a eos reiciendis laboriosam,{" "}
                        </p>
                    </div>
                    <div className="experience__road">
                        <i className="fab fa-github"></i>
                        <span className="road__line">
                            <span className="road__dot"></span>
                            <span className="road__dot"></span>
                        </span>
                        <i className="fab fa-github"></i>
                    </div>
                    <div
                        className="experience__jobs"
                        data-aos="fade-left"
                        data-aos-offset="600"
                    >
                        <h4 className="skills__heading">Junior</h4>
                        <p className="section__paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Excepturi ipsa architecto qui dolores repellat
                            similique maxime a eos reiciendis laboriosam,{" "}
                        </p>
                    </div>
                </div>
            </div> */}
            <Footer />
        </>
    );
};

export default AboutPage;

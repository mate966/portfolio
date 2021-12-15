const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer>
            <div className="footer__content wrapper">
                <div className="footer__logo logo">
                    <div className="logo-rectangle"></div>
                    <div className="logo-initials">MS</div>
                </div>
                <div className="footer__socials socials">
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
                    <div>
                        <a
                            href="https://icons8.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fas fa-icons"></i>
                        </a>
                    </div>
                </div>
                <div className="arrow-up" onClick={scrollToTop}>
                    <i className="fas fa-chevron-up"></i>
                </div>
            </div>
            <div className="copyright wrapper">
                <p>2021 © Mateusz Szweda</p>
            </div>
        </footer>
    );
};

export default Footer;

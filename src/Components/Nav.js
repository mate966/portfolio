import { useState } from "react";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Burger from "./Burger";

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="nav wrapper">
            <div className="logo">
                <div className="logo-rectangle"></div>
                <div className="logo-initials">MS</div>
            </div>
            <nav className={!isActive ? "menu" : "menu active-menu"}>
                <ul className="menu__list">
                    <li
                        className={
                            window.location.pathname === "/"
                                ? "menu__list-element active"
                                : "menu__list-element"
                        }
                    >
                        <Link to="/">Strona Główna</Link>
                    </li>
                    <li
                        className={
                            window.location.pathname === "/about/"
                                ? "menu__list-element active"
                                : "menu__list-element"
                        }
                    >
                        {/* <Link to="/about">O mnie</Link> */}
                        <HashLink smooth to="/about/#about">
                            O mnie
                        </HashLink>
                    </li>
                    <li className="menu__list-element">
                        <HashLink smooth to="/#skills">
                            Umiejętności
                        </HashLink>
                    </li>
                    <li
                        className={
                            window.location.pathname === "/portfolio/"
                                ? "menu__list-element active"
                                : "menu__list-element"
                        }
                    >
                        <HashLink smooth to="/portfolio/#portfolio">
                            Portfolio
                        </HashLink>
                    </li>
                    <li
                        className={
                            window.location.pathname === "/contact/"
                                ? "menu__list-element active"
                                : "menu__list-element "
                        }
                    >
                        {/* <Link to="/contact">Kontakt</Link> */}
                        <HashLink smooth to="/contact/#contact">
                            Kontakt
                        </HashLink>
                    </li>
                </ul>
            </nav>
            <Burger isActive={isActive} setIsActive={setIsActive} />
        </div>
    );
};

export default Nav;

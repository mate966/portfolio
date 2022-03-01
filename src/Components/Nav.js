import { useState, useEffect } from "react";

import { HashLink } from "react-router-hash-link";
import Burger from "./Burger";
import Logo from "../assets/Logo.png";

const Nav = () => {
    const [isActive, setIsActive] = useState(false);
    const [offSet, setOffSet] = useState(0);

    const setScroll = () => {
        setOffSet(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", setScroll);
    });

    return (
        <nav
            className={
                offSet >= window.innerHeight - 50
                    ? "navigation sticky"
                    : "navigation"
            }
        >
            <div className="navigation__container wrapper">
                <HashLink smooth to="/#">
                    <img src={Logo} alt="Logo portfolio" />
                </HashLink>
                <ul
                    className={
                        isActive ? "menu__list active-menu" : "menu__list"
                    }
                >
                    <li
                        className={
                            window.location.pathname === "/"
                                ? "menu__list-element active"
                                : "menu__list-element"
                        }
                    >
                        <HashLink smooth to="/#">
                            Strona Główna
                        </HashLink>
                    </li>
                    <li
                        className={
                            window.location.pathname === "/about/"
                                ? "menu__list-element active"
                                : "menu__list-element"
                        }
                    >
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
                        <HashLink smooth to="/contact/#contact">
                            Kontakt
                        </HashLink>
                    </li>
                </ul>
                <Burger isActive={isActive} setIsActive={setIsActive} />{" "}
            </div>
        </nav>
    );
};

export default Nav;

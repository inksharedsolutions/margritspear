import React, { useState } from "react";
import { Link } from "gatsby";
import styles from "./css/header.module.scss";

const Header = () => {
    let [isToggled, setIsToggled] = useState(false);
    const hamburgerHandler = () => {
        setIsToggled(!isToggled);
    };

    return (
        <>
            <header className={`${styles.header} hdr`}>
                <div className={`container-fluid`}>
                    <nav className={`row ${styles.navMenu} ${isToggled === true ? `${styles.menuActive} ${styles.showClose}` : ""}`}>
                        <div className={`col-6`}>
                            <Link to="/" className={`${styles.logoLink}`}>
                                <img className={`${styles.logoImg}`} src="../logo.png" alt="logo" /><span className={`${styles["author-name"]}`}>Margrit Spear</span>
                            </Link>
                        </div>
                        <div className={`col-6`}>
                            <div className={`${styles.menuToggle}`} onClick={hamburgerHandler}>
                                <div className={`${styles.hamburger}`}>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className={`col-lg-12 ${styles.menuHolder}`}>
                            <ul className={`${styles.menuMain}`}>
                                <li>
                                    <Link to="/" activeClassName={`${styles.current}`}>
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about-the-author" activeClassName={`${styles.current}`}>
                                        <span>About the Author</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about-the-book" activeClassName={`${styles.current}`}>
                                        <span>About the Book</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" activeClassName={`${styles.current}`}>
                                        <span>Contact</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;

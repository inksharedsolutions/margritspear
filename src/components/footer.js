import React from "react";
import { Link } from "gatsby";
import styles from "./css/footer.module.scss";

const Footer = () => {
    return (
        <>
            <footer className={``}>
                <div className={`${styles.footer}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Follow me on social media</h3>
                                <div  className={`${styles.socialMedia}`}>
                                    <a className={`${styles.socialMediaIcon}`} href="https://www.facebook.com/Margrit-Spear-1975859289380646" target="_blank" rel="noopener noreferrer"><img src="../sm-facebook.png" alt="Facebook"/></a>{' '}
                                    <a className={`${styles.socialMediaIcon}`} href="https://twitter.com/strattonpress/" target="_blank" rel="noopener noreferrer"><img src="../sm-twitter.png" alt="Twitter"/></a>{' '}
                                    <a className={`${styles.socialMediaIcon}`} href="https://www.instagram.com/margritspear" target="_blank" rel="noopener noreferrer"><img src="../sm-instagram.png" alt="Instagram"/></a>{' '}
                                    <a className={`${styles.socialMediaIcon}`} href="https://www.goodreads.com/book/show/42778800-life-changing-explosion-of-consciousness" target="_blank" rel="noopener noreferrer"><img src="../sm-goodreads.png" alt="Goodreads"/></a>
                                </div>
                                <div className={`${styles.agreement}`}>
                                    <Link to="/terms-and-conditions">Terms and Conditions</Link>{' '}
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                </div>
                            </div>
                            <div className={`col-lg-6 ${styles.newsletter}`}>
                                <h3>Subscribe to my Newsletter</h3>
                                <form action="#" method="post" className={`${styles.newsletterForm}`}>
                                    <input type="email" name="newsletterEmail" data-submit="newsletterSubmit" autocomplete="off" placeholder="Enter your e-mail address" />
                                    <input type="submit" value="Sign up" />
                                    <div className={`${styles.formMessage}`}>
                                        <p>Success!</p>
                                    </div>
                                    <div className={`${styles.loader}`}></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.copyright}`}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                Copyright &copy; 2021. Margrit Spear. All rights reserved.
                            </div>
                            <div class="col-lg-6">
                                Developed by: <a href="https://stratton-press.com/" target="_blank" rel="noopener noreferrer">Stratton Press</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

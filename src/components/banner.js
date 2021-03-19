import React from "react";
import styles from "./css/banner.module.scss";

const Banner = () => {
    return (
        <>
            <div className={`sect ${styles.banner}`}>
                <div class="container-fluid">
                    <div className={`col-lg-12 ${styles.bannerContents}`}>
                        <h1 className={`${styles.bannerHeading}`}><span>Holographic Psychology</span></h1>
                        <p className={`${styles.bannerText}`}>A revolutionary change from traditional psychology as its focus lies in the potential of the individual instead of on his or her pathology.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
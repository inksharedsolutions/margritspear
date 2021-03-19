import React from "react";
import styles from "./css/banner2.module.scss";

const Banner2 = (props) => {
    return (
        <>
            <div className={`${styles.banner}`}>
                <div class="container-fluid">
                    <div className={`col-lg-12 ${styles.bannerContents}`}>
                        <h1 className={`${styles.bannerHeading}`}><span>{props.pagetitle}</span></h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner2;
"use client";
import { useContext } from "react";
import styles from "./page.module.scss";

import { mont } from "./fonts";
import { cursorContext } from "./cursorContext";
const Listing = () => {
    const { setCursorHovering } = useContext(cursorContext);
    return (
        <div className={styles.listing}>
            <div>
                <div className={styles.listing__heading}>01</div>
                <div
                    className={styles.para}
                    style={{
                        fontFamily: mont.style.fontFamily,
                        fontWeight: "500",
                        color: "#001514",
                        marginTop: "1rem",
                        lineHeight: "1.5",
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit animi minus deserunt pariatur excepturi eos ipsam
                    corrupti dolores eum sint, vero, laudantium, veritatis nisi
                    possimus repudiandae tempore ad earum enim?
                </div>
            </div>
            <div
                className={styles.listing__image_container}
                onMouseEnter={() => setCursorHovering(true)}
                onMouseLeave={() => setCursorHovering(false)}
            >
                <img src="/bear.png" className={styles.listing__image} />
            </div>
        </div>
    );
};

export default Listing;

/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./page.module.scss";
import { cursorContext, mont } from "./layout";
import { useContext } from "react";
import Listing from "./Listing";
export default function Home() {
    const { setCursorHovering } = useContext(cursorContext);
    return (
        <main className={styles.main}>
            <div className={styles.nav}>
                <h1 className={styles.heading}>Heading</h1>
                <img
                    src="/menu.png"
                    alt="menu"
                    className={styles.hamburger}
                    height="60"
                    onMouseEnter={() => setCursorHovering(true)}
                    onMouseLeave={() => setCursorHovering(false)}
                />
            </div>
            <p
                style={{
                    fontFamily: mont.style.fontFamily,
                    fontWeight: "500",
                    color: "#001514",
                    marginTop: "1rem",
                    maxWidth: "50rem",
                    lineHeight: "1.5",
                }}
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                officia nostrum, provident sint, veritatis exercitationem
                reprehenderit delectus obcaecati non debitis molestiae deserunt
                recusandae enim temporibus accusantium nulla quaerat? In, aut.
            </p>
            <div className={styles.hr}></div>
            <Listing />
        </main>
    );
}


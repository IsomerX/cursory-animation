"use client";
import styles from "./page.module.scss";
import { mont } from "./layout";
export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.heading}>Heading</h1>
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
        </main>
    );
}


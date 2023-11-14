"use client";
import { Agbalumo, Montserrat } from "next/font/google";
import "./globals.scss";
import Cursor from "./Cursor";
import { useState } from "react";
import { cursorContext } from "./cursorContext";

const ag = Agbalumo({ weight: "400", subsets: ["latin"] });
const mont = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [cursorHovering, setCursorHovering] = useState(false);
    return (
        <html lang="en">
            <cursorContext.Provider
                value={{
                    cursorHovering,
                    setCursorHovering,
                    action: 0,
                }}
            >
                <body className={ag.className}>
                    <Cursor />
                    {children}
                </body>
            </cursorContext.Provider>
        </html>
    );
}


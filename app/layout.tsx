"use client";
import { Agbalumo, Montserrat } from "next/font/google";
import "./globals.css";
import Cursor from "./Cursor";
import { createContext, useContext, useState } from "react";

export const ag = Agbalumo({ weight: "400", subsets: ["latin"] });
export const mont = Montserrat({ subsets: ["latin"] });

const cursorContextValues = {
    cursorHovering: false,
    setCursorHovering: (hovering: boolean) => {},
    action: 0,
};

export const cursorContext = createContext(cursorContextValues);

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


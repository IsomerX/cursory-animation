import type { Metadata } from "next";
import { Agbalumo, Montserrat } from "next/font/google";
import "./globals.css";

export const ag = Agbalumo({ weight: "400", subsets: ["latin"] });
export const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={ag.className}>{children}</body>
        </html>
    );
}


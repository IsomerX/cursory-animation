import { useContext } from "react";
import { cursorContext } from "./cursorContext";

const SOCIAL_LINKS = [
    {
        href: "https://github.com/IsomerX",
        text: "Github",
    },
    {
        href: "https://linkedin.com/in/dhruvbakshiwork",
        text: "Linkedin",
    },
    {
        href: "https://dhruvbakshi.com",
        text: "Portfolio",
    },
    {
        href: "https://twitter.com/dramaticdhruv",
        text: "Twitter",
    },
];

const Footer = () => {
    const { setCursorHovering } = useContext(cursorContext);
    return (
        <div className="footer">
            <span>Find me on:</span>
            <div className="links">
                {SOCIAL_LINKS.map((social) => (
                    <a
                        href={social.href}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        key={social.text}
                        onMouseEnter={() => setCursorHovering(true)}
                        onMouseLeave={() => setCursorHovering(false)}
                    >
                        {social.text}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Footer;

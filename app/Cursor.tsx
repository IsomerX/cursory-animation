"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { cursorContext } from "./cursorContext";

const Cursor = () => {
    const [cursorSize, setCursorSize] = useState(10);
    const { cursorHovering } = useContext(cursorContext);

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.1 };

    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions),
    };

    useEffect(() => {
        const manageMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            mouse.x.set(clientX - cursorSize / 2);

            mouse.y.set(clientY - cursorSize / 2);
        };
        window.addEventListener("mousemove", manageMouseMove);

        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
        };
    }, [cursorSize]);

    useEffect(() => {
        if (cursorHovering) {
            setCursorSize(100);
        } else {
            setCursorSize(10);
        }
    }, [cursorHovering]);

    return (
        <motion.div
            style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
                height: cursorSize,
            }}
            className="cursor"
        ></motion.div>
    );
};

export default Cursor;

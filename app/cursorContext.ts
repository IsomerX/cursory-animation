import { createContext } from "react";

const cursorContextValues = {
    cursorHovering: false,
    setCursorHovering: (hovering: boolean) => {},
    action: 0,
};

export const cursorContext = createContext(cursorContextValues);

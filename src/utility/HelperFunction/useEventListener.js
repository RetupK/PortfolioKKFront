import React, {useEffect} from "react";

export const checkVisible = (element) => {
    if (!element) { return; }
    var rect = element.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 250 || rect.top - viewHeight >= 40);
}

export function useEventListener(eventName, className, setIsVisible, element = window) {
    useEffect(() => {
        const el = document.querySelector(`.${className}`);
        if (!el) { return; }
        element.addEventListener(eventName, () => {
            return checkVisible(el) ? setIsVisible(true) : setIsVisible(false);
        });
        return () => {
            element.removeEventListener(eventName, () => checkVisible(el));
        };
    }, [eventName, element, setIsVisible, className]);
}
import React from "react";

export const checkVisible = (element) => {
    if (element !== null) {
        var rect = element.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 250 || rect.top - viewHeight >= 40);
    }
    return
}

export function useEventListener(eventName, className, setIsVisible, element = window) {
    React.useEffect(() => {
        const el = document.querySelector(`.${className}`);
        if (el !== null) {
            element.addEventListener(eventName, () => {
                return checkVisible(el) ? setIsVisible(true) : setIsVisible(false);
            });
        }
        return () => {
            element.removeEventListener(eventName, () => checkVisible(el));
        };
    }, [eventName, element, setIsVisible, className]);
}
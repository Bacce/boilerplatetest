import { useEffect } from "react";
import { wChild } from "../types";

export const FeatureDetector = ({children}:wChild) => {

    useEffect(()=>{
        // https://www.stucox.com/blog/you-cant-detect-a-touchscreen/
        const hasTouch = 'ontouchstart' in window;
        // Using the same naming as Modernizr does
        if(hasTouch){document.documentElement.classList.add('touchevents');}
        else {document.documentElement.classList.add('no-touchevents');}
    },[]);
    return (<>{children}</>);
}
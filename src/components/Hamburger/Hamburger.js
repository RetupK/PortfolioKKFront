import React from "react";
import {StyledBurger} from "./Hamburger.css";

const Hamburger = ({ isShow, setIsShow, ...props }) => {
    return (
        <StyledBurger
            aria-label="Toggle menu"
            aria-expanded={isShow}
            open={isShow}
            onClick={() => setIsShow(!isShow)}
            {...props}
        >
            <span />
            <span />
            <span />
        </StyledBurger>
    );
};

export default Hamburger;
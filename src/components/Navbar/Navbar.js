import React, { lazy, Suspense, useState } from "react";
import { NavbarContainer, PortfolioTextContainer, Img, HamburgerDiv, SingleElNav, Ul, NavLink, List, FooterContainer } from "./Navbar.css";
import portfolioText from "../../assests/images/portfolioText.png";
import { NavbarData } from "./NavbarData";
import Loading from "../Spinner/SpinnerLoading/SpinnerLoading.css";
import Hamburger from "../Hamburger/Hamburger";

const Navbar = () => {

    const [isShow, setIsShow] = useState(false);

    const hideNav = () => setIsShow(false);

    return (
        <NavbarContainer isShow={isShow}>
            <PortfolioTextContainer>
                <HamburgerDiv>
                    <Hamburger setIsShow={setIsShow} isShow={isShow} />
                </HamburgerDiv>
                <SingleElNav>
                    <Img src={portfolioText} />
                </SingleElNav>
                <Ul isShow={isShow}>
                    {NavbarData.map((item) =>
                        <NavLink key={item.id} to={`/#${item.name}`}>
                            <List onClick={hideNav} isShow={isShow}>{item.name}</List>
                        </NavLink>
                    )}
                </Ul>
                <FooterContainer isShow={isShow}>
                    Krystian Kalinowski
                </FooterContainer>
            </PortfolioTextContainer>
        </NavbarContainer>
    )
}

export default Navbar;
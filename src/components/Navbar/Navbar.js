import React, {lazy, Suspense, useState} from "react";
import { NavbarContainer, PortfolioTextContainer, Ul, NavLink, List, FooterContainer } from "./Navbar.css";
import portfolioText from "../../assests/images/portfolioText.png";
import { NavbarData } from "./NavbarData";
import Loading from "../Spinner/SpinnerLoading/SpinnerLoading.css";
import Hamburger from "../Hamburger/Hamburger";
const RenderPhoto = lazy(() => import("../RenderPhoto/RenderPhoto"));

const Navbar = () => {

    const [isShow, setIsShow] = useState(false);

    return (
        <NavbarContainer isShow={isShow}>
            <PortfolioTextContainer>
                <Hamburger setIsShow={setIsShow} isShow={isShow}/>
                <Suspense fallback={<Loading/>}>
                    <RenderPhoto url={portfolioText} />
                </Suspense>
            </PortfolioTextContainer>
            <Ul isShow={isShow}>
                {NavbarData.map((item) =>
                    <NavLink key={item.id} to={`/#${item.name}`}>
                        <List isShow={isShow}>{item.name}</List>
                    </NavLink>
                )}
            </Ul>
            <FooterContainer isShow={isShow}>
                Krystian Kalinowski
            </FooterContainer>
        </NavbarContainer>
    )
}

export default Navbar;
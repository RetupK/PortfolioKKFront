import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AboutMeContainer from "../../containers/AboutMeContainer/AboutMeContainer";
import Contact from "../../containers/ContactMe/ContactMe";
import GreetingContainer from "../../containers/GreetingContainer/GreetingContainer";
import Portfolio from "../../containers/Portfolio/Portfolio";
import Skills from "../../containers/Skills/Skills";
import WorkProcess from "../../containers/WorkProcess/Workprocess";
import { HomeMainContainer, ContentContainer } from "./Home.css";

const Home = () => {
    return (
        <HomeMainContainer>
            <Navbar />
            <ContentContainer>
                <GreetingContainer/>
                <AboutMeContainer/>
                <WorkProcess/>
                <Skills/>
                <Portfolio/>
                <Contact/>
            </ContentContainer>
        </HomeMainContainer>
    )
}

export default Home;
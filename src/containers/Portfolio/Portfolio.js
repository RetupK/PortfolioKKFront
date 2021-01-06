import React, { } from "react";
import { portfolioDescription, projects } from "./PortfolioData";
import { Fade } from "react-reveal";
import SectionDescription from "../../components/SectionDescription/SectionDescription";
import { ImgComp, PortfolioComp, PortfolioMainContainer, PortfolioTitle, IconsWrapper, ImgContainer, ButtonContainer, MainIconsWrapper } from "./Portfolio.css";
import { Btn, Paragraph } from "../../utility/RepeatedStyle/RepeatedStyle";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from "react-bootstrap/esm/Tooltip";

const Portfolio = () => {

    const renderTooltip = (item) => (
        <Tooltip>
            {item.name}
        </Tooltip>
    )

    return (
        <>
            <SectionDescription
                title={portfolioDescription.title}
                subTitle={portfolioDescription.subTitle}
            />
            <PortfolioMainContainer id="#Portfolio">
                {projects.map((item) =>
                    <Fade bottom>
                        <PortfolioComp>
                            <ImgContainer>
                                <ImgComp src={item.img} />
                            </ImgContainer>
                            <PortfolioTitle>
                                <Paragraph>{item.name}</Paragraph>
                            </PortfolioTitle>
                            <MainIconsWrapper>
                                {item.icons.map((i) =>
                                    <IconsWrapper color={i.styles.color}>
                                        <OverlayTrigger key={i.id} placement="top" overlay={renderTooltip(i)}>
                                            {i.icon}
                                        </OverlayTrigger>
                                    </IconsWrapper>
                                )}
                            </MainIconsWrapper>
                            <ButtonContainer>
                                <a href={item.path} target="_blank" rel="noopener noreferrer">
                                    <Btn>Zobacz Live</Btn>
                                </a>
                            </ButtonContainer>
                        </PortfolioComp>
                    </Fade>
                )}
            </PortfolioMainContainer>
        </>
    )
}

export default Portfolio;
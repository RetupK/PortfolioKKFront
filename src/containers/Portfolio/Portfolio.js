import React, {useState, useCallback} from "react";
import SectionDescription from "../../components/SectionDescription/SectionDescription";
import { portfolioDescription, projects } from "./PortfolioData";
import { SingleElContainer, PortfolioMainContainer, IconsContainer, SingleIcon, P, Img, ImageContainer, ElementsOnHoverContainer, SingleLink, LinkIcon, GithubIcon } from "./Portfolio.css";

const Portfolio = () => {
    const [mouseEnter, setMouseEnter] = useState(null);

    const handleChangeMouse = useCallback((id) => {
        setMouseEnter(id)
    }, [setMouseEnter])
    
    const conditionHover = useCallback((item) => {
        return mouseEnter === item.id ?
            <ElementsOnHoverContainer>
                <SingleLink href={item.path} target="_blank" rel="noreferrer" rel="noopener"><LinkIcon /></SingleLink>
                <SingleLink href={item.pathGithub} target="_blank" rel="noreferrer" rel="noopener"><GithubIcon /></SingleLink>
            </ElementsOnHoverContainer> :
            <Img
                url={item.img}
                shadow
            />
    }, [mouseEnter])

    return (
        <div id="#Portfolio">
            <SectionDescription
                title={portfolioDescription.title}
                subTitle={portfolioDescription.subTitle}
            />
            <PortfolioMainContainer>
                {projects.map((item) => {
                    return (
                        <SingleElContainer key={item.id}>
                            <ImageContainer
                                onMouseEnter={() => handleChangeMouse(item.id)}
                                onMouseLeave={() => handleChangeMouse(null)}
                            >
                                {conditionHover(item)}
                            </ImageContainer>
                            <P>{item.name}</P>
                            <IconsContainer>
                                {item.icons.map((i,id) => <SingleIcon key={id} color={i.styles.color}>{i.icon}</SingleIcon>)}
                            </IconsContainer>
                            
                        </SingleElContainer>
                    )
                })}
            </PortfolioMainContainer>
        </div>
    )
}

export default Portfolio;
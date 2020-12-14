import React, { useState } from "react";
import { WorkprocessData, workprocessTitle } from "./WorkprocessData";
import { WorkProcessMainContainer, IconWrapper, SingleWorkprocessWrapper, Span, IconsAndArrowWrapper, ArrowIcon } from "./Workprocess.css";
import SectionDescription from "../../components/SectionDescription/SectionDescription";
import Fade from 'react-reveal/Slide';
import { useEventListener } from "../../utility/HelperFunction/useEventListener";

const WorkProcess = () => {
    const [isVisible, setIsVisible] = useState(null);
    useEventListener("scroll", "controllContainer", setIsVisible);

    return (
        <>
            <SectionDescription
                title={workprocessTitle.title}
                subTitle={workprocessTitle.subTitle}
            />
            <Fade when={isVisible} left>
                <WorkProcessMainContainer className="controllContainer">
                    {WorkprocessData.map((item) =>
                        <SingleWorkprocessWrapper key={item.id}>
                            <IconsAndArrowWrapper>
                                <IconWrapper bg={item.isBackground}>{item.icon}</IconWrapper>
                                <ArrowIcon />
                            </IconsAndArrowWrapper>
                            <Span>{item.name}</Span>
                        </SingleWorkprocessWrapper>
                    )}
                </WorkProcessMainContainer>
            </Fade>
        </>
    )
}

export default WorkProcess;
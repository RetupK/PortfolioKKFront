import React from "react";
import { SubTitle, Title, TitleContainer, SubSectionTitle, TitleContainerSubSection } from "./SectionDescription.css";

const SectionDescription = ({ title, subTitle, subSection }) => {
    return (
        <>
            {subSection ?
                <TitleContainerSubSection>
                    <SubSectionTitle>{title}</SubSectionTitle>
                </TitleContainerSubSection>
                :
                <TitleContainer >
                    <Title>{title}</Title>
                    <SubTitle>{subTitle}</SubTitle>
                </TitleContainer>
            }
        </>
    )
}

export default SectionDescription;
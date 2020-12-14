import React, { lazy, Suspense } from "react";
import { AboutMeMainContainer, DescriptionContainer, TextContainer } from "./AboutMeContainer.css";
import { AboutMeContainerData } from "./AboutMeContainerData";
import Loading from "../../components/Spinner/SpinnerLoading/SpinnerLoading.css";
const SectionDescription = lazy(() => import("../../components/SectionDescription/SectionDescription"));

const AboutMeContainer = () => {
    return (
        <AboutMeMainContainer id="#O mnie">
            <Suspense fallback={<Loading />}>
                <SectionDescription
                    title={AboutMeContainerData.title}
                    subTitle={AboutMeContainerData.subTitle}
                />
            </Suspense>
            <DescriptionContainer>
                <TextContainer>{AboutMeContainerData.textDesc1}</TextContainer>
                <TextContainer>{AboutMeContainerData.textDesc2}</TextContainer>
            </DescriptionContainer>
        </AboutMeMainContainer>
    )
}

export default AboutMeContainer;
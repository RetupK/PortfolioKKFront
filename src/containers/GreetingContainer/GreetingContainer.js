import React, { lazy, Suspense, useState } from "react";
import { GreetingContainerImgBg, GreetingCardContainer, DescText, CardContentContainer, SingleElementValue, ImgContainer, KeyValueContainer, SingleContentContainer, Footer } from "./GreetingContainer.css";
import myPhoto from "../../assests/images/myphoto.jpg";
import { GreetingContainterData, GreetingTitle } from "./GreetingContainerData";
import Button from 'react-bootstrap/Button'
import Loading from "../../components/Spinner/SpinnerLoading/SpinnerLoading.css";
import { SubTitle, Title } from "../../components/SectionDescription/SectionDescription.css";
import Fade from 'react-reveal/Fade';
import { useEventListener } from "../../utility/HelperFunction/useEventListener";
import { NavLink } from "../../components/Navbar/Navbar.css";
const RenderPhoto = lazy(() => import("../../components/RenderPhoto/RenderPhoto"));
const SocialIcons = lazy(() => import("../../components/SocialIcons/SocialIcons"));

const GreetingContainer = () => {

    const [isVisible, setIsVisiblee] = useState(true);
    useEventListener("scroll", "controllGreetingContainer", setIsVisiblee);

    return (
        <GreetingContainerImgBg className="controllGreetingContainer" id="#Karta">
            <Fade when={isVisible} top>
                <GreetingCardContainer>
                    <CardContentContainer>
                        <ImgContainer>
                            <Suspense fallback={<Loading />}>
                                <RenderPhoto url={myPhoto} shadow />
                            </Suspense>
                        </ImgContainer>
                        <SingleContentContainer>
                            <Title>{GreetingTitle.title}</Title>
                            <SubTitle>{GreetingTitle.subTitle}</SubTitle>
                            <KeyValueContainer>
                                {GreetingContainterData.map((item) =>
                                    <SingleElementValue key={item.id} keyOfObj={item.keyOfObj}>
                                        <DescText keyOfObj={item.keyOfObj}>{item.name}</DescText>
                                    </SingleElementValue>
                                )}
                            </KeyValueContainer>
                            <NavLink to="#Osiągnięcia"><Button variant="danger">Osiągnięcia</Button></NavLink>
                        </SingleContentContainer>
                    </CardContentContainer>
                    <Footer>
                        <Suspense fallback={<Loading />}>
                            <SocialIcons />
                        </Suspense>
                    </Footer>
                </GreetingCardContainer>
            </Fade>
            
        </GreetingContainerImgBg>
    )
}

export default GreetingContainer;
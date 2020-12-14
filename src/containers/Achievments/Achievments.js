import React from "react";
import { Carousel } from 'react-responsive-carousel';
import SectionDescription from "../../components/SectionDescription/SectionDescription";
import { SingleElementContainer, SubSectionContainer, ImgDiv, DivTest, TextContainer, Text } from "./Achievments.css";
import { achievmentsData, sectionAchievmentTitle } from "./AchievmentsData";
import ReactImageMagnify from "react-image-magnify";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Achievments = () => {

    const indicatorStyles = {
        background: '#eaeaea',
        height: 5,
        display: 'inline-block',
        margin: '0px 8px',
        width: 50,
        
    };

    return (
        <div id="#Osiągnięcia">
            <SectionDescription
                title={sectionAchievmentTitle.title}
                subTitle={sectionAchievmentTitle.subTitle}
            />
            <Carousel showThumbs={false} showStatus={false} autoPlay={true} stopOnHover={true} infiniteLoop={true} renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                        <li
                            style={{ ...indicatorStyles, background: '#000'}}
                            aria-label={`Selected: ${label} ${index + 1}`}
                            title={`Selected: ${label} ${index + 1}`}
                        />
                    );
                }
                return (
                    <li
                        style={indicatorStyles}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        title={`${label} ${index + 1}`}
                        aria-label={`${label} ${index + 1}`}
                    />
                );
            }}>
                {achievmentsData.map((item) =>
                    <SingleElementContainer key={item.id}>
                        <SubSectionContainer>
                            <SectionDescription title={item.title} subSection />
                            <TextContainer>
                                <Text>{item.description}</Text>
                            </TextContainer>
                        </SubSectionContainer>
                        <ImgDiv>
                            <DivTest>
                                <ReactImageMagnify 
                                hintTextMouse="Najedź by przybliżyć"
                                    {...{
                                        smallImage: {
                                            alt: "Wristwatch by Ted Baker London",
                                            isFluidWidth: true,
                                            src: item.img,
                                            width: 10,
                                            height: 10,
                                        },
                                        largeImage: {
                                            alt: "",
                                            src: item.img,
                                            width: 600,
                                            height: 600
                                        },
                                        isHintEnabled: true,
                                    }}
                                />
                            </DivTest>
                        </ImgDiv>
                    </SingleElementContainer>
                )}
            </Carousel>
        </div>
    )
}

export default Achievments;
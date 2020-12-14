import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { Paragraph } from "../../../utility/RepeatedStyle/RepeatedStyle";
import AnimatedProgressProvider from "../AnimationCircle/AnimationCircle";
import { CircleDivText, LabelContainer, SingleCircleWrapper } from "./CircleComp.css";

const CircleComp = ({ value, label, styles, animationStart, setAnimation }) => {
    return (
        <AnimatedProgressProvider
            valueStart={0}
            valueEnd={value}
            duration={0.7}
            animationStart={animationStart}
            setAnimation={setAnimation}
        >
            {value => <SingleCircleWrapper>
                <CircularProgressbarWithChildren
                    value={value}
                    styles={styles}
                >
                    <CircleDivText>{parseInt(value)}%</CircleDivText>
                </CircularProgressbarWithChildren>
                <LabelContainer>
                    <Paragraph>{label}</Paragraph>
                </LabelContainer>
            </SingleCircleWrapper>}
        </AnimatedProgressProvider>
    )
}

export default CircleComp;
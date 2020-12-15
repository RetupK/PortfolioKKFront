import React, { useEffect } from "react";
import { LogoWrapper, Screen, NofreezeSpinner, SpinnerDiv, SpinnerDivContainer, Svg, TextUnderSpinner } from "./Spinner.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs"

const AnimatedSplash = () => {
    return (
        <LogoWrapper>
            <Screen>
                <NofreezeSpinner>
                    <SpinnerDivContainer>
                        <Svg>
                            <AiOutlineHome />
                        </Svg>
                        <Svg>
                            <FaUsers />
                        </Svg>
                        <Svg>
                            <BsBriefcaseFill />
                        </Svg>
                        <SpinnerDiv />
                        <TextUnderSpinner>Krystian Kalinowski</TextUnderSpinner>
                    </SpinnerDivContainer>
                </NofreezeSpinner>
            </Screen>
        </LogoWrapper>
    );
}

const Spinner = ({setSpinner}) => {
    useEffect(() => {
        setTimeout(() => setSpinner(false), 3000);
    }, [])

    return <AnimatedSplash/>
}

export default Spinner;
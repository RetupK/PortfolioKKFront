import React, { useState, useEffect } from "react";
import { LogoWrapper, Screen, NofreezeSpinner, SpinnerDiv, SpinnerDivContainer, Svg } from "./Spinner.css";
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
                    </SpinnerDivContainer>
                </NofreezeSpinner>
            </Screen>
        </LogoWrapper>
    );
}

const Spinner = () => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        setTimeout(() => setRedirect((boolean) => !boolean), 3000);
    }, [])

    return redirect ? null : <AnimatedSplash />;
}

export default Spinner;
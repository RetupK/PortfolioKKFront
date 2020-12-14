import React, { Suspense, lazy, useState } from "react";
import { progressbarData, SkillsData, skillsTitle } from "./SkillsData";
import { SkillsMainContainer, PersonalSkillsSection } from "./Skills.css";
import { stylesForCircle } from "../../components/AllAboutCircleAndProgress/CircleComp/CircleComp.css";
import Fade from 'react-reveal/Fade';
import { useEventListener } from "../../utility/HelperFunction/useEventListener";
import Loading from "../../components/Spinner/SpinnerLoading/SpinnerLoading.css";
import SectionDescription from "../../components/SectionDescription/SectionDescription";
const Progressbar = lazy(() => import("../../components/AllAboutCircleAndProgress/Progressbar/Progressbar"));
const CircleComp = lazy(() => import("../../components/AllAboutCircleAndProgress/CircleComp/CircleComp"));


const Skills = () => {

    const [isVisibleCircle, setIsVisibleCircle] = useState(null);
    useEventListener("scroll", "controllCircle", setIsVisibleCircle);

    const [isVisible, setIsVisible] = useState(null);
    useEventListener("scroll", "controllTest", setIsVisible);


    return (
        <div id="#Umiejętności">
            <SectionDescription
                title={skillsTitle.title}
                subTitle={skillsTitle.subTitle}
            />
            <SkillsMainContainer className="controllCircle">
                {SkillsData.map((item) =>
                    <Suspense fallback={<Loading />}>
                        <CircleComp
                            key={item.id}
                            styles={stylesForCircle}
                            value={item.percentage}
                            animationStart={isVisibleCircle}
                            setAnimation={setIsVisibleCircle}
                            label={item.name}
                        />
                    </Suspense>
                )}
            </SkillsMainContainer>
            <SkillsMainContainer>
                <PersonalSkillsSection className="controllTest">
                    <SectionDescription subSection title="Umiejętności miękkie" />
                    <Fade when={isVisible} bottom>
                        {progressbarData.map((item) =>
                            <Suspense fallback={<Loading />}>
                                <Progressbar key={item.id} value={item.value} label={item.label} />
                            </Suspense>
                        )}
                    </Fade>
                </PersonalSkillsSection>
            </SkillsMainContainer>
        </div>
    )
}

export default Skills;
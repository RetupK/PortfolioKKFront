import React, { Suspense, lazy, useState } from "react";
import { iconsData, skillsTitle } from "./SkillsData";
// import Fade from 'react-reveal/Fade';
import { useEventListener } from "../../utility/HelperFunction/useEventListener";
// import Loading from "../../components/Spinner/SpinnerLoading/SpinnerLoading.css";
import SectionDescription from "../../components/SectionDescription/SectionDescription";
import { CircleContainer, Icon, IconCategory, Label, IconContainer, Li, SkillsContainer, Ul } from "./Skills.css";


const Skills = () => {

    const [isVisible, setIsVisible] = useState(false);
    useEventListener("scroll", "controllTest", setIsVisible);

    const [isOpen, setIsOpen] = useState("");
    const [sectionId, setSectionId] = useState(Number);

    const countDeg = (item) => {
        const deg = 360 / iconsData[sectionId].data.length;
        return item.id * deg;
    }

    const handleActiveCircle = (name, id) => {
        setIsOpen(name);
        setSectionId(id);
    }

    return (
        <div id="#Umiejętności" style={{ width: "100%", height: "100%" }}>
            <SectionDescription
                title={skillsTitle.title}
                subTitle={skillsTitle.subTitle}
            />
            <SkillsContainer>
            {iconsData.map((i) =>
                <CircleContainer key={i.id} onClick={() => handleActiveCircle(i.sectionName, i.id)}>
                    <Label>{i.sectionName}</Label>
                    <IconCategory color={i.color}>
                        <Icon iconCategory={i.iconCategory}/>
                    </IconCategory>
                    <Ul>
                        {i.data.map((item) =>
                            <Li key={item.id} open={isOpen == i.sectionName} currDeg={countDeg(item)}>
                                <IconContainer color={item.color} open={isOpen == i.sectionName} currDeg={countDeg(item)}>
                                    {item.iconAround}
                                </IconContainer>
                            </Li>
                        )}
                    </Ul>
                </CircleContainer>
            )}
            </SkillsContainer>
        </div>
    )
}

export default Skills;
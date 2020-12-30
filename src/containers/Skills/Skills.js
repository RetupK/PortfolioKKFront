import React, { useState } from "react";
import { iconsData, skillsTitle } from "./SkillsData";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import SectionDescription from "../../components/SectionDescription/SectionDescription";
import { CircleContainer, Icon, IconCategory, Label, SectionSkillsContainer, IconContainer, Li, SkillsContainer, Ul } from "./Skills.css";

const Skills = () => {

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

    const renderTooltip = (item) => (
        <Tooltip>
            {item.name}
        </Tooltip>
    )

    return (
        <div id="#Umiejętności" style={{ width: "100%", height: "100%" }}>
            <SectionDescription
                title={skillsTitle.title}
                subTitle={skillsTitle.subTitle}
            />
            <SkillsContainer>
                {iconsData.map((i) =>
                    <SectionSkillsContainer onMouseEnter={() => handleActiveCircle(i.sectionName, i.id)} onMouseLeave={() => handleActiveCircle("", i.id)}>
                        <CircleContainer key={i.id}>
                            <Label>{i.sectionName}</Label>
                            <IconCategory color={i.color}>
                                <Icon iconCategory={i.iconCategory} />
                            </IconCategory>
                            <Ul>
                                {i.data.map((item) =>
                                    <Li key={item.id} open={isOpen === i.sectionName} currDeg={countDeg(item)}>
                                        <OverlayTrigger placement="top" overlay={renderTooltip(item)}>
                                            <IconContainer color={item.color} open={isOpen === i.sectionName} currDeg={countDeg(item)}>
                                                {item.iconAround}
                                            </IconContainer>
                                        </OverlayTrigger>
                                    </Li>
                                )}
                            </Ul>
                        </CircleContainer>
                    </SectionSkillsContainer>
                )}
            </SkillsContainer>
        </div>
    )
}

export default Skills;
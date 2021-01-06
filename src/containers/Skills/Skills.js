import React, { useState } from "react";
import { iconsData, skillsTitle } from "./SkillsData";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import SectionDescription from "../../components/SectionDescription/SectionDescription";
import { CircleContainer, Icon, IconCategory, Label, SectionSkillsContainer, IconContainer, Li, SkillsContainer, Ul } from "./Skills.css";
import Bounce from 'react-reveal/Bounce';
import { useEventListener } from "../../utility/HelperFunction/useEventListener";

const Skills = () => {
    const [isVisibleCircle, setIsVisibleCircle] = useState(true);
    useEventListener("scroll", "controllCircleVisible", setIsVisibleCircle);

    const countDeg = (item, id) => {
        const deg = 360 / iconsData[id].data.length;
        return item.id * deg;
    }

    const renderTooltip = (item) => (
        <Tooltip>
            {item.name}
        </Tooltip>
    )

    return (
        <div id="#Umiejętności" className="controllCircleVisible" style={{ width: "100%", height: "100%" }}>
            <SectionDescription
                title={skillsTitle.title}
                subTitle={skillsTitle.subTitle}
            />
            <SkillsContainer>
                {iconsData.map((i) =>
                    <SectionSkillsContainer>
                        <Bounce>
                            <CircleContainer key={i.id}>
                                <Label>{i.sectionName}</Label>
                                <IconCategory color={i.color}>
                                    <Icon iconCategory={i.iconCategory} />
                                </IconCategory>
                                <Ul>
                                    {i.data.map((item) =>
                                        <Li key={item.id} open={isVisibleCircle} currDeg={countDeg(item, i.id)}>
                                            <OverlayTrigger placement="top" overlay={renderTooltip(item)}>
                                                <IconContainer color={item.color} open={isVisibleCircle} currDeg={countDeg(item, i.id)}>
                                                    {item.iconAround}
                                                </IconContainer>
                                            </OverlayTrigger>
                                        </Li>
                                    )}
                                </Ul>
                            </CircleContainer>
                        </Bounce>
                    </SectionSkillsContainer>
                )}
            </SkillsContainer>
        </div>
    )
}

export default Skills;
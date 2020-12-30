import React from "react";
import {TiDeviceDesktop} from "react-icons/ti";
import {FiDatabase} from "react-icons/fi";
import { AiFillGithub, AiFillHtml5, AiOutlineApi, AiOutlineConsoleSql } from "react-icons/ai";
import { FaBitbucket, FaBootstrap, FaCss3Alt, FaJava, FaJira, FaNode, FaYarn } from "react-icons/fa";
import {GrReactjs} from "react-icons/gr";
import {SiAirtable, SiAngular, SiJavascript, SiReactrouter, SiRedux, SiStyledComponents, SiTypescript} from "react-icons/si";
import { BsTools } from "react-icons/bs";
import {DiRuby, DiMongodb, DiPostgresql, DiNpm, DiTrello} from "react-icons/di";
import {CgSlack} from "react-icons/cg";

export const skillsTitle = {
    title: "Umiejętności",
    subTitle: ",,W teorii nie ma różnicy pomiędzy teorią i praktyką. W praktyce - jest''"
}

export const iconsData = [
    {
        id: 0,
        sectionName: "Front End",
        color: "#41228E",
        iconCategory: <TiDeviceDesktop/>,
        data: [
            {
                id: 0,
                iconAround: <AiFillHtml5/>,
                name: "HTML",
                color: "#DD4B25",
            },
            {
                id: 1,
                iconAround: <FaCss3Alt/>,
                name: "SCSS/CSS",
                color: "#2D4CDD",
            },
            {
                id: 2,
                iconAround: <GrReactjs/>,
                name: "ReactJS",
                color: "#5ED3F2",
            },
            {
                id: 3,
                iconAround: <SiRedux/>,
                name: "Redux",
                color: "#7247B5",
            },
            {
                id: 4,
                iconAround: <SiStyledComponents/>,
                name: "Styled-components",
                color: "#C356A8",
            },
            {
                id: 5,
                iconAround: <FaBootstrap/>,
                name: "Bootstrap",
                color: "#533B78",
            },
            {
                id: 6,
                iconAround: <SiAngular/>,
                name: "Angular",
                color: "#D6112E",
            },
            {
                id: 7,
                iconAround: <SiTypescript/>,
                name: "TypeScript",
                color: "#388ECF",
            },
            {
                id: 8,
                iconAround: <SiJavascript/>,
                name: "JavaScript",
                color: "#EFD81C",
            },
            {
                id: 9,
                iconAround: <AiOutlineApi/>,
                name: "API",
                color: "#46B9EB",
            },
            {
                id: 10,
                iconAround: <SiReactrouter/>,
                name: "React-Router",
                color: "#F14747",
            }
        ]
    },
    {
        id: 1,
        sectionName: "Back End",
        color: "#F54EA2",
        iconCategory: <FiDatabase/>,
        data: [
            {
                id: 0,
                iconAround: <FaJava/>,
                name: "Java",
                color: "#2C6EB2",
            },
            {
                id: 1,
                iconAround: <FaNode/>,
                name: "Node.js",
                color: "#3E3F34",
            },
            {
                id: 2,
                iconAround: <DiRuby/>,
                name: "Ruby",
                color: "#AA1302",
            },
            {
                id: 3,
                iconAround: <DiMongodb/>,
                name: "MongoDB",
                color: "#66AC3D",
            },
            {
                id: 4,
                iconAround: <DiPostgresql/>,
                name: "PostgreSQL",
                color: "#31648C",
            },
            {
                id: 5,
                iconAround: <AiOutlineConsoleSql/>,
                name: "MySQL",
                color: "#DD8A00",
            },
        ]
    },
    {
        id: 2,
        sectionName: "Narzędzia",
        color: "#41228E",
        iconCategory: <BsTools/>,
        data: [
            {
                id: 0,
                iconAround: <AiFillGithub/>,
                name: "Github",
                color: "#302F2F",
            },
            {
                id: 1,
                iconAround: <DiNpm/>,
                name: "npm",
                color: "#C53635",
            },
            {
                id: 2,
                iconAround: <FaYarn/>,
                name: "Yarn",
                color: "#338AB5",
            },
            {
                id: 3,
                iconAround: <DiTrello/>,
                name: "Trello",
                color: "#2A6EA8",
            },
            {
                id: 4,
                iconAround: <SiAirtable/>,
                name: "AirTable",
                color: "#EFCA2F",
            },
            {
                id: 5,
                iconAround: <FaBitbucket/>,
                name: "Bitbucket",
                color: "#86ACDF",
            },
            {
                id: 6,
                iconAround: <CgSlack/>,
                name: "Slack",
                color: "#C356A8",
            },
            {
                id: 7,
                iconAround: <FaJira/>,
                name: "Jira",
                color: "#3B80F7",
            },
        ]
    },
]
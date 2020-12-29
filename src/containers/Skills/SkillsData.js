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
                color: "#DD4B25",
            },
            {
                id: 1,
                iconAround: <FaCss3Alt/>,
                color: "#2D4CDD",
            },
            {
                id: 2,
                iconAround: <GrReactjs/>,
                color: "#5ED3F2",
            },
            {
                id: 3,
                iconAround: <SiRedux/>,
                color: "#7247B5",
            },
            {
                id: 4,
                iconAround: <SiStyledComponents/>,
                color: "#C356A8",
            },
            {
                id: 5,
                iconAround: <FaBootstrap/>,
                color: "#533B78",
            },
            {
                id: 6,
                iconAround: <SiAngular/>,
                color: "#D6112E",
            },
            {
                id: 7,
                iconAround: <SiTypescript/>,
                color: "#388ECF",
            },
            {
                id: 8,
                iconAround: <SiJavascript/>,
                color: "#EFD81C",
            },
            {
                id: 9,
                iconAround: <AiOutlineApi/>,
                color: "#46B9EB",
            },
            {
                id: 10,
                iconAround: <SiReactrouter/>,
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
                color: "#2C6EB2",
            },
            {
                id: 1,
                iconAround: <FaNode/>,
                color: "#3E3F34",
            },
            {
                id: 2,
                iconAround: <DiRuby/>,
                color: "#AA1302",
            },
            {
                id: 3,
                iconAround: <DiMongodb/>,
                color: "#66AC3D",
            },
            {
                id: 4,
                iconAround: <DiPostgresql/>,
                color: "#31648C",
            },
            {
                id: 5,
                iconAround: <AiOutlineConsoleSql/>,
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
                color: "#302F2F",
            },
            {
                id: 1,
                iconAround: <DiNpm/>,
                color: "#C53635",
            },
            {
                id: 2,
                iconAround: <FaYarn/>,
                color: "#338AB5",
            },
            {
                id: 3,
                iconAround: <DiTrello/>,
                color: "#2A6EA8",
            },
            {
                id: 4,
                iconAround: <SiAirtable/>,
                color: "#EFCA2F",
            },
            {
                id: 5,
                iconAround: <FaBitbucket/>,
                color: "#86ACDF",
            },
            {
                id: 6,
                iconAround: <CgSlack/>,
                color: "#C356A8",
            },
            {
                id: 7,
                iconAround: <FaJira/>,
                color: "#3B80F7",
            },
        ]
    },
]
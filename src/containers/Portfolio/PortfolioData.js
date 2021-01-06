import React from "react";
import dashboard from "../../assests/images/Dashboard.png";
import portfolio from "../../assests/images/portfolio.png";
import todo from "../../assests/images/todo.png";
import portfolioKK from "../../assests/images/portfolioKK.png"
import weatherapp from "../../assests/images/weatherapp.png";
import papperRockScissors from "../../assests/images/prs.png";
import { AiFillHtml5 } from "react-icons/ai"
import { SiJavascript, SiStyledComponents } from "react-icons/si";
import { SiRedux, SiTypescript } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { FaCss3Alt, FaReact, FaWpforms, FaLanguage } from "react-icons/fa";

export const portfolioDescription = {
    title: "Portfolio",
    subTitle: "Oto moje niekomercyjne projekty, wykonane na etapie rozwoju"
}

const repeatedIcons = [
    {
        name: "HTML",
        icon: <AiFillHtml5 />,
        styles: {
            color: "#DD4B25",
        }
    },
    {
        name: "SCSS",   
        icon: <FaCss3Alt />,
        styles: {
            color: "#016DB4"
        }
    },
    {
        name: "ReactJS",
        icon: <FaReact />,
        styles: {
            color: "#5ED3F3"
        }
    },
    {
        name: "Redux",
        icon: <SiRedux />,
        styles: {
            color: "#7248B6",
        }
    },
    {
        name: "Styled-Components",
        icon: < SiStyledComponents />,
        styles: {
            color: "#C970B4",
        }
    },
    {
        name: "JavaScript",
        icon: <SiJavascript/>,
        styles: {
            color: "#EFD81C",
        }
    },
]

export const projects = [
    {
        id: 0,
        name: "PortfolioKK Projekt",
        path: "https://retupk.github.io/portfolioKK/",
        img: portfolioKK,
        icons: [
            repeatedIcons[5],
            repeatedIcons[0],
            repeatedIcons[4],
            repeatedIcons[2],
            {
                name: "Ruby on Rails",
                icon: <DiRuby />,
                styles: {
                    color: "#A91005",
                }
            },
            {
                name: "React-Hook-Form",
                icon: <FaWpforms />,
                styles: {
                    color: "#E3598C",
                }
            }
        ]
    },
    {
        id: 1,
        name: "Aplikacja Pogodowa",
        path: "https://weatherapp-kk.herokuapp.com/",
        img: weatherapp,
        icons: [
            {
                name: "TypeScript",
                icon: <SiTypescript/>,
                styles: {
                    color: "#2F74C0",
                }
            },
            {
                name: "Formik",
                icon: <FaWpforms />,
                styles: {
                    color: "#E3598C",
                }
            },
            {
                name: "i18n",
                icon: <FaLanguage />,
                styles: {
                    color: "#5ED3F4",
                }
            },
            repeatedIcons[0],
            repeatedIcons[1],
            repeatedIcons[2],
        ]
    },
    {
        id: 2,
        name: "Dashboard",
        path: "https://retupk.github.io/ContactList/",
        img: dashboard,
        icons: [
            repeatedIcons[5],
            repeatedIcons[0],
            repeatedIcons[1],
            repeatedIcons[2],
            repeatedIcons[3],
        ]
    },
    {
        id: 3,
        name: "Presentation Projekt",
        path: "https://retupk.github.io/presentation/",
        img: portfolio,
        icons: [
            repeatedIcons[5],
            repeatedIcons[0],
            repeatedIcons[1],
            repeatedIcons[2],
        ]
    },
    {
        id: 4,
        name: "Lista zadań projekt",
        path: "https://retupk.github.io/TodoApp/",
        img: todo,
        icons: [
            repeatedIcons[5],
            repeatedIcons[0],
            repeatedIcons[1],
            repeatedIcons[2],
            repeatedIcons[3]
        ]
    },
    {
        id: 5,
        name: "Kamień Papier Nożyce",
        path: "https://retupk.github.io/PaperRockScissors",
        img: papperRockScissors,
        icons: [
            repeatedIcons[5],
            repeatedIcons[0],
            repeatedIcons[1],
            repeatedIcons[2],
        ]
    },
]

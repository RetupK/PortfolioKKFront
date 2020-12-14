import React from "react";
import dashboard from "../../assests/images/Dashboard.png";
import portfolio from "../../assests/images/portfolio.png";
import todo from "../../assests/images/todo.png";
import portfolioKK from "../../assests/images/portfolioKK.png"
import { AiFillHtml5 } from "react-icons/ai"
import { SiStyledComponents } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { FaCss3Alt, FaReact, FaWpforms } from "react-icons/fa";


export const portfolioDescription = {
    title: "Portfolio",
    subTitle: "Oto moje niekomercyjne projekty, wykonane na etapie rozwoju"
}

const repeatedIcons = [
    {
        icon: <AiFillHtml5 />,
        styles: {
            color: "#DD4B25",
        }
    },
    {
        icon: <FaCss3Alt />,
        styles: {
            color: "#016DB4"
        }
    },
    {
        icon: <FaReact />,
        styles: {
            color: "#5ED3F3"
        }
    },
    {
        icon: <SiRedux />,
        styles: {
            color: "#7248B6",
        }
    }
]

export const projects = [
    {
        id: 0,
        name: "PortfolioKK Projekt",
        path: "https://retupk.github.io/portfolioKK/",
        pathGithub: "https://github.com/RetupK/portfolioKK/",
        img: portfolioKK,
        icons: [
            repeatedIcons[0],
            {
                icon: < SiStyledComponents />,
                styles: {
                    color: "#C970B4",
                }
            },
            repeatedIcons[2],
            {
                icon: <DiRuby />,
                styles: {
                    color: "#A91005",
                }
            },
            {
                icon: <FaWpforms />,
                styles: {
                    color: "#E3598C",
                }
            }
        ]
    },
    {
        id: 1,
        name: "Dashboard",
        path: "https://retupk.github.io/ContactList/",
        pathGithub: "https://github.com/RetupK/ContactList/",
        img: dashboard,
        icons: [
            repeatedIcons[0],
            repeatedIcons[1],
            repeatedIcons[2],
            repeatedIcons[3]
        ]
    },
    {
        id: 2,
        name: "Lista zadań projekt",
        path: "https://retupk.github.io/TodoApp/",
        pathGithub: "https://github.com/RetupK/TodoApp",
        img: todo,
        icons: [
            repeatedIcons[0],
            repeatedIcons[1],
            repeatedIcons[2],
            repeatedIcons[3]
        ]
    },
    {
        id: 3,
        name: "Presentation Projekt",
        path: "https://retupk.github.io/presentation/",
        pathGithub: "https://github.com/RetupK/presentation",
        img: portfolio,
        icons: [
            repeatedIcons[0],
            repeatedIcons[1],
            repeatedIcons[2],
        ]
    },
]

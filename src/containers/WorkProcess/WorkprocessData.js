import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import {GoLightBulb} from "react-icons/go";
import {BiCodeAlt, BiRocket} from "react-icons/bi";
import {VscDebugAlt} from "react-icons/vsc";

export const workprocessTitle = {
    title: "Podstawa to dobry plan",
    subTitle: "Doskonałość to ciągły proces, dlatego warto mieć swój plan."
}

export const WorkprocessData = [
    {
        id: 0,
        name: "POMYSŁ",
        icon: <GoLightBulb/>,
        isBackground: true,
        isVisible: false
    },
    {
        id: 1,
        name: "DESIGN",
        icon: <FaPencilAlt/>,
        isVisible: false
    },
    {
        id: 2,
        name: "KODOWANKO",
        icon: <BiCodeAlt/>,
        isBackground: true,
        isVisible: false
    },
    {
        id: 3,
        name: "TESTOWANIE",
        icon: <VscDebugAlt/>,
        isVisible: false
    },
    {
        id: 4,
        name: "URUCHOMIENIE",
        icon: <BiRocket/>,
        isBackground: true,
        isVisible: false
    },
]
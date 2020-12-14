import styled from "styled-components";
import { Paragraph } from "../../utility/RepeatedStyle/RepeatedStyle";
import {ImSearch} from "react-icons/im";
import {FaGithub} from "react-icons/fa";

export const PortfolioMainContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px) {
        width: 100%;
    }
    @media (min-width: 768px) and (max-width: 1199px){
        width: 100%;
        margin: 0;
    }
    @media (min-width: 1200px) and (max-width: 1600px) {
        width: 100%;
    }
`

export const SingleElContainer = styled.div`
    width: 45%;
    height: 420px;
    margin: 45px 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 767px) {
        width: 100%;
    }

`

export const P = styled(Paragraph)`
    margin-top: 20px;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    border-radius: 20px;
    cursor: pointer;
    background: url("${props => props.url}");
    background-size: cover;
    background-position: center;
`

export const ImageContainer = styled.div`
    width: 80%;
    height: 100%;
    &:hover{
        background: white;
        border: 5px solid black;
        border-radius: 5px;
        z-index: 9999;
    }
`

export const ElementsOnHoverContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SingleLink = styled.a`
    text-decoration: none;
    list-style-type: none;
    color: black;
    padding: 0px 20px;
    &:hover{
        text-decoration: none;
        list-style-type: none;
        color: black;
        transform: scale(1.04);
        color: ${props => props.theme.colors.color2};
    }
`

export const LinkIcon = styled(ImSearch)`
    height: 50px;
    width: 50px;
`

export const GithubIcon = styled(FaGithub)`
    height: 50px;
    width: 50px;
`

export const IconsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const SingleIcon = styled.div`
    color: ${props => props.color};
    font-size: 30px;
    padding: 0px 5px;
`
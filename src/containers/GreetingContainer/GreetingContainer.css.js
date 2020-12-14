import styled from "styled-components";
import img from "../../assests/images/bgHome.jpg";
import { Title } from "../../components/SectionDescription/SectionDescription.css";

export const GreetingContainerImgBg = styled.div`
    background: linear-gradient(
        rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.5)
    ), url(${img});
    background-size: 100% 100%;
    background-attachment: fixed;
`

export const GreetingCardContainer = styled.div`
    margin: 0 auto;
    width: 74%;
    height: 100%;
    box-shadow: ${props => props.theme.box_shadows.shadow2};
    background: ${props => props.theme.colors.color1};
    border-radius: 4px;
    flex-direction: column;
    position: relative;
    top: 100px;
    @media (max-width: 767px) {
        width: 95%;
        padding-top: 70px;
        height: auto;
        margin-top: 50px;
    }
    @media (min-width: 768px) and (max-width: 1199px){
        width: 86%;
    }
    @media (min-width: 1200px) and (max-width: 1400px) {
        width: 86%;
    }
`

export const CardContentContainer = styled.div`
    display: flex;
    padding: 50px;
    @media (max-width: 767px) {
        flex-direction: column;
        padding: 0px 10px;
    }
    @media (min-width: 768px) and (max-width: 1199px){
        padding: 20px;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    @media (min-width: 1200px) and (max-width: 1400px) {
        align-items: center;
        display: flex;
        padding: 30px;
    }
`

export const ImgContainer = styled.div`
    flex: 1;
    width: 440px;
    height: 466px;
    @media (max-width: 767px) {
        width: 200px;
        height: 200px;
        margin: 0px auto 30px auto;
    }
    @media (min-width: 768px) and (max-width: 1199px){
        width: 300px;
        height: 300px;
    }
    @media (min-width: 1200px) and (max-width: 1500px) {
        width: 330px;
        height: 330px;
    }
`

export const SingleContentContainer = styled.div`
    flex: 2;
    padding: 0px 0px 0px 30px;
    @media (max-width: 767px) {
        padding: 10px 10px;
    }
`


export const Footer = styled.footer`
    width: 100%;
    height:70px;
    background: ${props => props.theme.colors.color3};
    color: white;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const KeyValueContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 30px 0px;
    border-top: 1px solid ${props => props.theme.colors.color4};
`

export const SingleElementValue = styled.div`
    width: ${props => props.keyOfObj ? "30%" : "70%"};
`

export const DescText = styled(Title)`
    font-size: 13px;
    padding: 5px 0px;
    text-transform: unset;
    font-weight: ${props => props.keyOfObj ? "bold" : "unset"};
    color: ${props => props.keyOfObj ? "#343a40" : "#6c757d"};
    letter-spacing: 1px;
    margin: 0;
    @media (max-width: 767px) {
        font-size: 12px;
        text-align: left;
    }
    @media (min-width: 768px) and (max-width: 1199px){
        font-size: 12px;
        text-align: left;
    }
`
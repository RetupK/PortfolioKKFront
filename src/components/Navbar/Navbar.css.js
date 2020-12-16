import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
    display: flex;
    width: 300px;
    height: 100vh;
    position: fixed;
    flex-direction: column;
    background: ${props => props.theme.colors.color1};
    box-shadow: ${props => props.theme.box_shadows.shadow1};
    z-index: 100;
    justify-content: space-between;
    padding-top: 50px;
    @media (max-width: 768px) {
        width: 100%;
        justify-content: unset;
        height: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 60px;
        padding-top: unset;
    }
    @media (min-width: 768px) and (max-width: 1199px){
        width: 100%;
        text-align: center;
        height: ${props => props.isShow ? "100%" : "60px"};
        padding: 0;
        display: flex;
        align-items: center;
        background: white;
    }
    @media (min-width: 1200px) and (max-width: 1400px) {
        width: 250px;
    }
`

export const PortfolioTextContainer = styled.div`
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    @media(max-width:1199px){
        justify-content: ${props => props.isShow ? "end" : "unset"};
    }
`

export const SingleElNav = styled.div`
    display: flex;
    justify-content: center;
`

export const HamburgerDiv = styled.div`
    display: none;
    @media(max-width: 767px) {
        display: flex;
    }
    @media(min-width: 768px) and (max-width:1199px){
        display: flex;
    }
`

export const Img = styled.img`
    width: 250px;
    height: 85px;
    z-index: 10;
    @media(max-width: 1199px) {
        width: 140px;
        height: 60px;
    }
`

export const Ul = styled.ul`
    text-decoration: none;
    list-style-type: none;
    background: white;
    @media (max-width: 768px) {
        padding: ${props => props.isShow ? "50px 0px 0px 0px" : "0px"};
        width: 100%;
        box-shadow: ${props => props.theme.box_shadows.shadow3};
    }
    @media (min-width: 768px) and (max-width: 1199px){
        width: 100%;
        padding: 0px 10px;
    }
`

export const NavLink = styled(Link)`
    color: black;
    &:hover{
        color: black;
        text-decoration: none;
    }
`

export const List = styled.li`
    padding: 5px 0px;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    &:hover{
        transform: scale(1.02);
    }
    @media (max-width: 768px) {
        border-bottom: 1px solid ${props => props.theme.colors.color4};
        margin-right: 10px;
        padding-left: 10px;
        display: ${props => props.isShow ? "flex" : "none"}
    }
    @media (min-width: 768px) and (max-width: 1199px){
        border-bottom: 1px solid ${props => props.theme.colors.color4};
        margin-right: 10px;
        padding-left: 10px;
        padding-top:30px;
        display: ${props => props.isShow ? "flex" : "none"}
    }
`

export const FooterContainer = styled.footer`
    width: 100%;
    margin: 60px 0px;
    text-align: center;
    font-family: 'Cedarville Cursive', cursive;
    font-size: 25px;
    @media (max-width: 768px) {
        display: none;
    }
    @media (min-width: 768px) and (max-width: 1199px){
        display: ${props => props.isShow ? "flex" : "none"};
        justify-content: center;
    }
`
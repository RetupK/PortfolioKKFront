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
        padding: unset;
        justify-content: unset;
        height: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 60px;
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
    width: 80%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    &:after{
        content: "";
        width:7px;
        height:7px;
        border-radius:50%;
        background: ${props => props.theme.colors.color2};
        margin: 33px 0px 23px -8px;
        @media (max-width: 768px) {
            margin: 33px 0px 40px -2px;
        }
        @media (min-width: 768px) and (max-width: 1199px){
            margin: 24px 0px 40px -6px;
        }
    }
    @media (max-width: 768px) {
        width: 60%;
        display: flex;
        align-items: center;
        height: 56px;
    }
    @media (min-width: 768px) and (max-width: 1199px){
        height: 60px;
        padding: 0px 50px;
        width: 57%;
    }
`

export const Ul = styled.ul`
    text-decoration: none;
    list-style-type: none;
    @media (max-width: 768px) {
        padding: ${props => props.isShow ? "20px 0px 0px 0px" : "0px"};
        width: 100%;
        background: white;
        box-shadow: ${props => props.theme.box_shadows.shadow3};
    }
    @media (min-width: 768px) and (max-width: 1199px){
        width: 100%;
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
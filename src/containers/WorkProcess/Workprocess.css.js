import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
import { Paragraph } from "../../utility/RepeatedStyle/RepeatedStyle";

export const WorkProcessMainContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 40px;
    @media (max-width: 767px) {
        flex-direction: column;
    }
`

export const IconWrapper = styled.div`
    border-radius: 50%;
    color: #fff;
    font-size: 30px;
    height: 90px;
    line-height: 5rem;
    margin: 0 auto;
    width: 90px;
    background-color: ${props => props.bg ? props.theme.colors.color2 : props.theme.colors.color3};
    text-align: center;
    box-shadow: ${props => props.theme.box_shadows.shadow1};
`

export const SingleWorkprocessWrapper = styled.div`
    @media (max-width: 767px) {
        text-align: center;
    }
`

export const IconsAndArrowWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 30px;
    @media (min-width: 768px) and (max-width: 1199px){
        padding: 0;
    }
    @media (min-width: 1200px) and (max-width: 1600px) {
        padding: 0;
    }
`

export const ArrowIcon = styled(AiOutlineArrowRight)`
    font-size: 30px;
    margin-left: 80px;
    @media (max-width: 767px) {
        display: none;
    }
    @media (min-width: 768px) and (max-width: 1199px){
        margin: 10px;
    }
    @media (min-width: 1200px) and (max-width: 1600px) {
        margin: 20px;
    }
`

export const Span = styled(Paragraph)`
    text-align: center;
    margin-top: 20px;
    width: 60%;
    @media (max-width: 767px) {
        width: unset;
        margin: 20px 0px;
    }
`


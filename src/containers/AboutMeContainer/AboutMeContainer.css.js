import styled from "styled-components";
import { SubTitle } from "../../components/SectionDescription/SectionDescription.css";

export const AboutMeMainContainer = styled.div`
    width: 100%;
    margin: 200px auto 20px auto;
`

export const DescriptionContainer = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 767px) {
        justify-content: unset;
        align-items: unset;
        display: unset;
    }
`

export const TextContainer = styled(SubTitle)`
    letter-spacing: 1px;
    width: 500px;
    text-align: left;
    line-height: 30px;
    text-transform: unset;
    @media (max-width: 767px) {
        width: 100%;
        padding: 0px 10px;
    }
    @media (min-width: 768px) and (max-width: 1199px){
        padding: 0px 15px;
    }
    @media (min-width: 1200px) and (max-width: 1400px) {
        padding: 0px 25px;
    }
`
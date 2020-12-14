import styled from "styled-components";

export const SkillsMainContainer = styled.div`
    display: flex;
    width: 75%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const SingleSection = styled.div`
    width: 30%;
    padding: 20px 40px;
`

export const PersonalSkillsSection = styled.div`
    width: 50%;
    padding: 20px 40px;
    @media (max-width: 767px) {
        width: 90%;
        padding: 0;
    }
    @media (min-width: 768px) and (max-width: 1199px){
        width: 80%;
    }
    @media (min-width: 1200px) and (max-width: 1600px){
        width: 70%;
    }
`

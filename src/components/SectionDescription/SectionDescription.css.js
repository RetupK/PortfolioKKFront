import styled from "styled-components";

export const Title = styled.h3`
    font-family: Poppins,sans-serif;
    padding: 0;
    margin: 0;
    font-size: 25px;
    font-weight: bold;
    color: #343a40;
    text-transform: uppercase;
    @media (max-width: 767px) {
        font-size: 18px;
        text-align: center;
    }
    @media (min-width: 768px) and (max-width: 1199px){
        font-size: 18px;
        text-align: center;
    }
`

export const SubTitle = styled.h3`
    font-size: 14px;
    color: #6c757d;
    text-transform: uppercase;
    font-family: Poppins,sans-serif;
    letter-spacing: 1.5px;
    @media (max-width: 767px) {
        font-size: 12px;
        text-align: center;
    }
    @media (min-width: 768px) and (max-width: 1199px){
        font-size: 14px;
        text-align: center;
    }
`

export const TitleContainer = styled.div`
    text-align: center;
    height:80px;
    margin: 70px 0px 30px 0px;
    &:before{
        content: "";
        position: absolute;
        width: 50px;
        border: 3px solid;
        margin: 65px 0px 0px -25px;
        color: #F54EA2;
    }
    @media (max-width: 767px) {
        margin-bottom: 20px;
        height: 60px;
        margin-top: 40px;
        width: 90%;
        margin: 40px auto;
    }
`

export const SubSectionTitle = styled(Title)`
    font-size: 20px;
    @media (max-width: 767px) {
        font-size: 13px;
        text-align: center;
        width: 100%;
    }
`

export const TitleContainerSubSection = styled(TitleContainer)`
    margin-bottom: 10px;
    &:before{
        border: 1px solid;
        margin: 33px 0px 0px -14px;
        width: 40px;
    }
    @media (max-width: 767px) {
        font-size: 14px;
    }
`
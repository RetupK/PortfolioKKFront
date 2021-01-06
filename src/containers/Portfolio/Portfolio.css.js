import styled from "styled-components";

export const Icon = styled(props => props.icon)`
    
`

export const PortfolioMainContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    @media(max-width: 767px) {
        flex-direction: column;
    }
`

export const PortfolioComp = styled.div`
    margin: 0px 20px 40px 20px;
    box-shadow: ${props => props.theme.box_shadows.shadow1};
    border-radius: 20px;
    padding: 10px 10px;
    @media(min-width: 768px) and (max-width: 1199px) {
        margin: 35px 30px;
    }
    @media(max-width: 767px) {
        width: 90%;
        margin: 36px auto;
        border-bottom: 1px solid;
        padding: 0px 0px 20px 0px;
        color: lightslategrey;
    }
`

export const ImgContainer = styled.div`
    margin: 0 auto;
    border-radius: 20px;
`

export const ImgComp = styled.img`
    width: 400px;
    border-radius: 5px;
    height: 250px;
    @media(max-width: 767px){
        width: 100%;
        height: unset;
    }
    @media(min-width: 768px) and (max-width: 1300px) {
        width: 340px;
    }
`

export const PortfolioTitle = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    background: ${props => props.theme.colors.color3};
    box-shadow: ${props => props.theme.box_shadows.shadow1};
    color: white;
`

export const SpanTitle = styled.span`
    margin: 0;
    font-family: "Google Sans Medium";
    font-size: 20px;
    @media(max-width: 767px) {
        font-size: 16px;
    }
`

export const IconsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100px;
    align-items: center;
    margin: 0 auto;
    width: 45%;
    @media(max-width: 767px) {
        width: 90%;
    }
    font-size: 30px;
    color: ${props => props.color};
`

export const MainIconsWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    width: 80%;
`

export const ButtonContainer = styled.div`
    text-align: center;
`
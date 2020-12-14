import styled from "styled-components";

export const ContactMainContainer = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 20px 0px;
    @media (max-width: 767px) {
        width: 100%;
    }
    @media (min-width: 768px) and (max-width: 1199px){
        width: 70%;
    }
    @media (min-width: 1200px) and (max-width: 1500px) {
        width: 70%;
    }
`

export const FormWrapper = styled.div`
    padding: 50px;
    box-shadow: ${props => props.theme.box_shadows.shadow1};
    border: 5px solid ${props => props.theme.colors.color3};
    border-radius: 10px;
`
